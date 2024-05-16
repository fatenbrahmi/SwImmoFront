<template>
    <AdminNavbar />
    <SideBar />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div id="content" class="content-container">
       <br>
       <div style="display: flex; justify-content: flex-end; align-items: center;"> <!-- Changé justify-content -->
          <div class="input-group rounded" style="max-width: 350px; margin-right: 10px;"> <!-- Augmenté max-width -->
             <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
             <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
             </span>
          </div>
          <div>
             <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal" @click="handleClick()">
                <i class="bi bi-person-plus-fill"></i> Ajouter un utilisateur
             </button>
 
             <!-- Modal -->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                   <div class="modal-content">
                      <div class="modal-header">
                         <h1 class="modal-title fs-5" id="exampleModalLabel">Ajouter un utilisateur</h1>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                         <form>
                            <div class="mb-3 row">
                               <label for="nom" class="col-sm-3 col-form-label">Nom et prénom</label>
                               <div class="col-sm-9">
                                  <input type="text" class="form-control" id="nom" placeholder="Entrez le nom et prénom">
                               </div>
                            </div>
                            <div class="mb-3 row">
                               <label for="email" class="col-sm-3 col-form-label"><i class="bi bi-envelope-fill"></i>
                                  Email</label>
                               <div class="col-sm-9">
                                  <input type="email" class="form-control" id="email" placeholder="Entrez l'email">
                               </div>
                            </div>
                            <div class="mb-3 row">
                               <label for="telephone" class="col-sm-3 col-form-label"><i class="bi bi-phone"></i>
                                  Téléphone</label>
                               <div class="col-sm-9">
                                  <input type="tel" class="form-control" id="telephone"
                                     placeholder="Entrez le numéro de téléphone">
                               </div>
                            </div>
                            <div class="mb-3 row">
                               <label for="ville" class="col-sm-3 col-form-label"><i class="bi bi-geo-alt-fill"></i>
                                  Ville</label>
                               <div class="col-sm-9">
                                  <input type="text" class="form-control" id="ville" placeholder="Entrez la ville">
                               </div>
                            </div>
                         </form>
                      </div>
                      <div class="modal-footer">
                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                         <button type="button" class="btn btn-primary">Ajouter</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
 
 
       </div>
 
       <br>
       <div class="row">
          <!-- User 1 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> John Doe</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:info@maxartkiller.in">info@maxartkiller.in</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +91 000 000 0000</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i> Ville:</strong> Gujarat</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 2 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Jane Smith</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:jane@example.com">jane@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +1 123 456 7890</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> California</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 3 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Michel John</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong><a
                            href="mailto:michael@example.com">michael@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +1 234 567 8901</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> New York</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 4 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Emily Wilson</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:emily@example.com">emily@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +44 1234 567890</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> London</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 5 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Michael Jackson</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:michael@example.com">michael@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +1 234 567 8901</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> Los Angeles</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 6 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Emma Watson</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:emma@example.com">emma@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +44 1234 567890</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> London</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 7 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> William Smith</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:william@example.com">william@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +1 234 567 8901</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> New York</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 8 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Olivia Williams</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:olivia@example.com">olivia@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +44 1234 567890</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> London</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 9 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar9.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Sophia Johnson</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:sophia@example.com">sophia@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +1 234 567 8901</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> Los Angeles</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 10 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar10.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Lucas Brown</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:lucas@example.com">lucas@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +44 1234 567890</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> London</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 11 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar11.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Alexander Taylor</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:alexander@example.com">alexander@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +1 234 567 8901</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> New York</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- User 12 -->
          <div class="col-lg-3 col-md-4 col-sm-6">
             <div class="panel panel-default userlist">
                <div class="panel-body text-center">
                   <div class="userprofile">
                      <div class="userpic">
                         <img src="https://bootdey.com/img/Content/avatar/avatar12.png" alt="" class="userpicimg">
                      </div>
                      <!-- Additional fields -->
                      <p><strong>Nom et prénom:</strong> Isabella Martinez</p>
                      <p><strong><i class="bi bi-envelope-fill"></i>Email:</strong> <a
                            href="mailto:isabella@example.com">isabella@example.com</a></p>
                      <p><strong><i class="bi bi-phone"></i>Téléphone:</strong> +44 1234 567890</p>
                      <p><strong><i class="bi bi-geo-alt-fill"></i>Ville:</strong> London</p>
                      <button type="button" class="btn btn-outline-primary">Voir profil</button>
                      <!-- Delete icon -->
                      <a href="#" class="btn btn-link pull-right"><i class="fa fa-trash"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <!-- End of user section -->
       </div>
 
    </div>
 
 
 </template>
 
 <script>
 import AdminNavbar from '@/components/AdminNavbar.vue';
 import SideBar from '@/components/Sidebar/SideBar.vue';
 import { sidebarWidth } from '@/components/Sidebar/state'
 
 export default {
    components: { AdminNavbar, SideBar },
    setup() {
       return { sidebarWidth }
    },
    
    data() {
       return {
          searchQuery: '',
          isModalOpen: false,
          users: [/* insérez vos utilisateurs ici */],
       };
    },
    computed: {
       filteredUsers() {
          return this.users.filter(user =>
             user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             user.phone.includes(this.searchQuery)
          );
       },
    },
    methods: {
       handleClick() {
          // Cette méthode est appelée lorsque le bouton est cliqué
          console.log("Bouton cliqué !");
       },
       showAddUserModal() {
          this.isModalOpen = true;
       },
       closeModal() {
          this.isModalOpen = false;
       },
       deleteUser(index) {
          // Implémentez la logique pour supprimer un utilisateur de la liste
          this.users.splice(index, 1);
       },
    
    },
 };
 </script>
 <style>
 .userlist {
    padding: 20px;
    /* Ajoutez le padding désiré */
 }
 
 body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: rgb(233, 231, 231);
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
    box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.05);
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
    /* Ajustez cette valeur en fonction de la largeur de votre sidebar */
 }
 .modal {
    margin-top: 50px;
    /* Ajustez cette valeur selon vos besoins */
    margin-top: 0
 }
 
 </style>