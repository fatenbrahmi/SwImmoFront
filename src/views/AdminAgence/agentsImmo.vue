<template>
   <MyNavbar />
   <adminAgenceSidebar />
   <div v-if="loading">Loading...</div>
   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
   <div id="content" class="content-container">
      <br>
      <div style="display: flex; justify-content: flex-end; align-items: center;">
         <div class="input-group rounded" style="max-width: 350px; margin-right: 10px;">
            <input type="search" v-model="searchQuery" class="form-control rounded" placeholder="Search"
               aria-label="Search" aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
            </span>
         </div>

         <button type="button" class="btn custom-button btn-sm" data-bs-toggle="modal" data-bs-target="#userModal">
            <i class="bi bi-person-plus-fill"></i> Ajouter un Agent
         </button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
         <div class="modal-dialog" style="max-width: 450px;">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel">Ajouter un Agent</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form @submit.prevent="submitUser">
                     <div class="mb-3">
                        <input v-model="user.nom" type="text" class="form-control" id="nom" placeholder="Nom" required>
                     </div>
                     <div class="mb-3">
                        <input v-model="user.prenom" type="text" class="form-control" id="prenom" placeholder="Prénom"
                           required>
                     </div>
                     <div class="mb-3">
                        <input v-model="user.email" type="email" class="form-control" id="email" placeholder="Email"
                           required>
                     </div>
                     <div class="mb-3">
                        <input v-model="user.motDePasse" type="password" class="form-control" id="motDePasse"
                           placeholder="Mot de passe" required>
                     </div>
                     <div class="mb-3">
                        <input v-model="user.telephone" type="tel" class="form-control" id="telephone"
                           placeholder="Téléphone" required>
                     </div>
                     <div class="mb-3">
                        <label for="profil" class="form-label">Profil</label>
                        <select v-model="user.Profil" class="form-select" aria-placeholder="Profil" id="profil">
                           <option value="agentImmobilier">Agent Immobilier</option>
                        </select>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fermer</button>
                        <button type="submit" class="btn custom-button btn-sm">Ajouter</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <br>
      <div class="row">
         <div class="col-lg-3 col-md-4 col-sm-6" v-for="(user, index) in filteredUsers" :key="user._id">
            <div class="panel panel-default userlist">
               <div class="panel-body text-center">
                  <div class="userprofile">
                     <div class="userpic">
                        <img :src="'http://localhost:3000/' + (user.photoProfil || 'path/to/your/white-image.png')"
                           alt="" class="userpicimg">
                     </div>
                     <p><strong></strong> {{ user.nom }} {{ user.prenom }}</p>
                     <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a :href="`mailto:${user.email}`">{{
                           user.email }}</a></p>
                     <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> {{ user.telephone }}</p>
                     <p><strong><i class="bi bi-geo-alt-fill"></i> Profil:</strong> {{ user.Profil }}</p>
                     <button type="button" class="btn custom-button btn-sm">Voir profil</button>
                     <a href="#" class="btn btn-link pull-right btn-sm" @click.prevent="deleteUser(index)"><i
                           class="fa fa-trash"></i></a>
                  </div>
               </div>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
import MyNavbar from '@/components/AdminNavbar.vue';
import adminAgenceSidebar from '@/components/adminAgenceSidebar/SideBar.vue';
import axios from 'axios';

export default {
   components: { MyNavbar, adminAgenceSidebar },
   data() {
      return {
         searchQuery: '',
         users: [], // This will be filled by the fetchUsers method
         user: {
            nom: '',
            prenom: '',
            email: '',
            motDePasse: '',
            telephone: '',
            Profil: 'agentImmobilier', // Ensure this is set to 'agentImmobilier' by default
            ville: '',
         },
         currentFilter: 'agentImmobilier' // Set to 'agentImmobilier' to filter by default
      };
   },
   mounted() {
      this.fetchUsers();
   },
   computed: {
      filteredUsers() {
         const searchString = this.searchQuery.toLowerCase();
         const filtered = this.users.filter(user => {
            const matchesSearch = (user.nom && user.nom.toLowerCase().includes(searchString)) ||
               (user.prenom && user.prenom.toLowerCase().includes(searchString)) ||
               (user.email && user.email.toLowerCase().includes(searchString)) ||
               (user.telephone && user.telephone.includes(searchString));
            const matchesProfile = !this.currentFilter || user.Profil === this.currentFilter;
            return matchesSearch && matchesProfile;
         });
         console.log('Filtered users:', filtered); // Log the filtered users
         return filtered;
      }
   },
   methods: {
      setFilter(filter) {
         this.currentFilter = filter;
         this.$nextTick(() => console.log("Current filter updated to:", this.currentFilter));
      },
      fetchUsers() {
         const user=  JSON.parse(localStorage.getItem('userData'))
         axios.get(`http://localhost:3000/auth/agentsByAgence/${user.agence}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
               const data = response.data;
               console.log('Fetched users:', data);
               this.users = data;
            }).catch(error => {
               console.error('Error fetching users:', error);
            });
      },

      submitUser() {
         axios.post('http://localhost:3000/auth/users', this.user, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(response => {
               this.users.push(response.data);
               this.hideModal();
               this.resetUser();
            })
            .catch(error => {
               console.error('Error adding user:', error);
               alert(`Erreur lors de l’ajout de l’utilisateur: ${error.response ? error.response.data.message : error.message}`);
            });
      },
      resetUser() {
         this.user = { nom: '', prenom: '', email: '', motDePasse: '', telephone: '', Profil: 'agentImmobilier', ville: '' };
      },
      hideModal() {
         const modal = document.getElementById('userModal');
         if (modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
               backdrop.parentNode.removeChild(backdrop);
            }
         }
      },
      deleteUser(index) {
         const user = this.filteredUsers[index];
         axios.delete(`http://localhost:3000/auth/users/${user._id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(() => {
               this.users.splice(this.users.findIndex(u => u._id === user._id), 1);
            }).catch(error => {
               console.error('Error deleting user:', error);
            });
      }
   }
};
</script>


<style>

/* rest of buttons */
.custom-button {
   background-color: #ffffff;
   /* Custom blue color */
   border: 1px solid #ffffff;
   /* Border color */
   color: #1e9dd7;
   /* White text for better contrast */
}

.custom-button:hover {
   background-color: #71a2b9;
   /* Darker shade for hover effect */
   border-color: #71a2b9;
   /* Even darker border on hover */
   color: #ffffff;
   /* White text for better contrast */
}

.userlist {
   padding: 20px;
   /* Ajoutez le padding désiré */
}

body {
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   background-color: #ffffff;
   margin-top: 20px;
}

.nav>li>a.userdd {
   padding: 5px 15px
}

.userprofile {
   width: 100%;
   float: left;
   clear: both;
   margin: 40px auto
}

.userprofile .userpic {
   height: 100px;
   width: 100px;
   clear: both;
   margin: 0 auto;
   display: block;
   border-radius: 100%;
   box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);
   position: relative;
}

.userprofile .userpic .userpicimg {
   height: auto;
   width: 100%;
   border-radius: 100%;
}

.username {
   font-weight: 400;
   font-size: 20px;
   line-height: 20px;
   color: #000000;
   margin-top: 20px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}

.username+p {
   color: #607d8b;
   font-size: 13px;
   line-height: 15px;
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
}

.settingbtn {
   height: 30px;
   width: 30px;
   border-radius: 30px;
   display: block;
   position: absolute;
   bottom: 0px;
   right: 0px;
   line-height: 30px;
   vertical-align: middle;
   text-align: center;
   padding: 0;
   box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.15);
}

.userprofile.small {
   width: auto;
   clear: both;
   margin: 0px auto;
}

.userprofile.small .userpic {
   height: 40px;
   width: 40px;
   margin: 0 10px 0 0;
   display: block;
   border-radius: 100%;
   box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.15);
   position: relative;
   float: left;
}

.userprofile.small .textcontainer {
   float: left;
   max-width: 100px;
   padding: 0;
}

.userprofile.small .userpic .userpicimg {
   min-height: 100%;
   width: 100%;
   border-radius: 100%;
}

.userprofile.small .username {
   font-weight: 400;
   font-size: 16px;
   line-height: 21px;
   color: #000000;
   margin: 0px;
   float: left;
   width: 100%;
}

.userprofile.small .username+p {
   color: #607d8b;
   font-size: 13px;
   float: left;
   width: 100%;
   margin: 0;
}

.countlist h3 {
   margin: 0;
   font-weight: 400;
   line-height: 28px;
}

.countlist {
   text-transform: uppercase
}

.countlist li {
   padding: 15px 30px 15px 0;
   font-size: 14px;
   text-align: left;
}

.countlist li small {
   font-size: 12px;
   margin: 0
}

.followbtn {
   float: right;
   margin: 22px;
}

.userprofile.social {
   background: url(http://placehold.it/500x300) no-repeat top center;
   background-size: 100%;
   padding: 50px 0;
   margin: 0
}

.userprofile.social .username {
   color: #ffffff
}

.userprofile.social .username+p {
   color: #ffffff;
   opacity: 0.8
}

.postbtn {
   position: absolute;
   right: 5px;
   top: 5px;
   z-index: 9
}

.status-upload {
   width: 100%;
   float: left;
   margin-bottom: 15px
}

.posttimeline .panel {
   margin-bottom: 15px
}

.commentsblock {
   background: #f8f9fb;
}

.nopaddingbtm {
   margin-bottom: 0
}

.memberblock {
   width: 100%;
   float: left;
   clear: both;
   margin-bottom: 15px
}

.member {
   width: 24%;
   float: left;
   margin: 2px 1% 2px 0;
   background: #ffffff;
   border: 1px solid #d8d0c3;
   padding: 3px;
   position: relative;
   overflow: hidden
}

.memmbername {
   position: absolute;
   bottom: -30px;
   background: rgba(0, 0, 0, 0.8);
   color: #ffffff;
   line-height: 30px;
   padding: 0 5px;
   white-space: nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
   width: 100%;
   font-size: 11px;
   transition: 0.5s ease all;
}

.member:hover .memmbername {
   bottom: 0
}

.member img {
   width: 100%;
   transition: 0.5s ease all;
}

.member:hover img {
   opacity: 0.8;
   transform: scale(1.2)
}

.panel-default>.panel-heading {
   color: #607D8B;
   background-color: #ffffff;
   font-weight: 400;
   font-size: 15px;
   border-radius: 0;
   border-color: #e1eaef;
}

.btn-circle {
   width: 30px;
   height: 30px;
   padding: 6px 0;
   border-radius: 15px;
   text-align: center;
   font-size: 12px;
   line-height: 1.428571429;
}

.page-header.small {
   position: relative;
   line-height: 22px;
   font-weight: 400;
   font-size: 20px;
}

.favorite i {
   color: #eb3147;
}

.btn i {
   font-size: 17px;
}

.panel {
   box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.15);
   -moz-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
   -webkit-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
   -ms-box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
   transition: all ease 0.5s;
   -moz-transition: all ease 0.5s;
   -webkit-transition: all ease 0.5s;
   -ms-transition: all ease 0.5s;
   margin-bottom: 35px;
   border-radius: 0px;
   position: relative;
   border: 0;
   display: inline-block;
   width: 100%;
}

.panel-footer {
   padding: 10px 15px;
   background-color: #ffffff;
   border-top: 1px solid #eef2f4;
   border-bottom-right-radius: 0;
   border-bottom-left-radius: 0;
   color: #607d8b;
}

.panel-blue {
   color: #ffffff;
   background-color: #03A9F4;
}

.panel-red.userlist .username,
.panel-green.userlist .username,
.panel-yellow.userlist .username,
.panel-blue.userlist .username {
   color: #ffffff;
}

.panel-red.userlist p,
.panel-green.userlist p,
.panel-yellow.userlist p,
.panel-blue.userlist p {
   color: rgba(255, 255, 255, 0.8);
}

.panel-red.userlist p a,
.panel-green.userlist p a,
.panel-yellow.userlist p a,
.panel-blue.userlist p a {
   color: rgba(255, 255, 255, 0.8);
}

.progress-bar-success,
.status.active,
.panel-green,
.panel-green>.panel-heading,
.btn-success,
.fc-event,
.badge.green,
.event_green {
   color: white;
   background-color: #8BC34A;
}

.progress-bar-warning,
.panel-yellow,
.status.pending,
.panel-yellow>.panel-heading,
.btn-warning,
.fc-unthemed .fc-today,
.badge.yellow,
.event_yellow {
   color: white;
   background-color: #FFC107;
}

.progress-bar-danger,
.panel-red,
.status.inactive,
.panel-red>.panel-heading,
.btn-danger,
.badge.red,
.event_red {
   color: white;
   background-color: #F44336;
}

/* Smaller user card styles */
.userprofile {
   width: 80%;
   /* Decrease width */
   margin: 20px auto;
   /* Adjust margin */
}

.userprofile .userpic {
   height: 60px;
   /* Decrease height */
   width: 60px;
   /* Decrease width */
}

.username {
   font-size: 16px;
   /* Decrease font size */
   margin-top: 10px;
   /* Decrease margin */
}

.username+p {
   font-size: 12px;
   /* Decrease font size */
   margin-top: 5px;
   /* Decrease margin */
}

.settingbtn {
   height: 20px;
   /* Decrease height */
   width: 20px;
   /* Decrease width */
   border-radius: 20px;
   /* Adjust border radius */
   line-height: 20px;
   /* Decrease line height */
   font-size: 10px;
   /* Decrease font size */
}

.userprofile.small .userpic {
   height: 30px;
   /* Decrease height */
   width: 30px;
   /* Decrease width */
   margin-right: 10px;
   /* Adjust margin */
}

.userprofile.small .username {
   font-size: 14px;
   /* Decrease font size */
   line-height: 18px;
   /* Decrease line height */
}

.userprofile.small .username+p {
   font-size: 11px;
   /* Decrease font size */
}

.panel-footer {
   padding: 2px 4px;
   /* Adjust padding */
   font-size: 9px;
   /* Decrease font size */
}

/* Add custom styles here */
.content-container {
   margin-left: 190px;
   /* Ajustez cette valeur en fonction de la largeur de votre adminAgenceSidebar */
}

.modal {
   margin-top: 50px;
   /* Ajustez cette valeur selon vos besoins */
   margin-top: 0
}
</style>
