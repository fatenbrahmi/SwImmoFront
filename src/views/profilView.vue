<template>
  <MyNavbar />
  <div class="container">
    <div class="row justify-content-center mt-5">
    <div class="row gutters">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar position-relative">
                  <input type="file" id="profile-image" accept="image/*" style="display: none;" @change="updateProfileImage">
                  <label for="profile-image">
                    <i class="bi bi-pencil-square position-absolute" style="right: 5px; bottom: 5px;"></i>
                    <img :src="'http://localhost:3000/' + user.photoProfil || 'path/to/your/white-image.png'" alt="" class="userpicimg">
                  </label>
                </div>
                <h5 class="user-name">{{ user.nom }} {{ user.prenom }}</h5>
                <h6 class="user-email">{{ user.email }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2 class="mb-2 text-warning">Informations personnelles</h2>
                <br>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" v-model="user.nom" class="form-control" placeholder="Nom" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" v-model="user.prenom" class="form-control" placeholder="Prénom" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" v-model="user.email" class="form-control" placeholder="Email" required />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="tel" v-model="user.telephone" class="form-control" placeholder="Téléphone" required />
                  </div>
                  
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <select v-model="user.Profil" class="form-select" required>
                      <option value="internaute">Client</option>
                      <option value="delegue">Délégué</option>
                      <option value="agentImmobilier">Agent immobilier</option>
                      <option value="adminAgence">Admin Agence</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="password" v-model="user.motDePasse" class="form-control" placeholder="Password" required />
                  </div>
                </div>
              </div>
            </div>
            <br><br><br>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="text-right">
                <button type="button" @click="cancelUpdate" class="btn btn-secondary">Cancel</button>
                <button type="button" @click="updateUser" class="btn btn-warning btn-margin">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MyNavbar from '@/components/MyNavbar.vue'
export default {
  components: {
    MyNavbar,
  },
  data() {
    return {
      user: {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        Profil: '',
        photoProfil: '',
        motDePasse: ''
      }
    };
  },
  methods: {
    async fetchUser() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/users/:id', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.user = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur:', error);
      }
    },
    async updateUser() {
      try {
        const token = localStorage.getItem('token');
        await axios.put('http://localhost:3000/auth/users/:id', this.user, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        alert('Informations mises à jour avec succès!');
      } catch (error) {
        console.error('Erreur lors de la mise à jour des informations utilisateur:', error);
      }
    },
    cancelUpdate() {
      this.fetchUser();
    },
    updateProfileImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.photoProfil = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  },
  mounted() {
    this.fetchUser();
  }
};
</script>





<style scoped>
.btn-margin {
  margin-left: 10px;
}


.btn-margin {
    margin-left: 10px; /* Ajoute une marge de 10px à gauche du bouton */
}
.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
body {
    margin: 0;
    padding-top: 40px;
    color: #2e323c;
    background: #f5f6fa;
    position: relative;
    height: 100%;
}
.account-settings .user-profile {
    margin: 0 0 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
}
.account-settings .user-profile .user-avatar {
    margin: 0 0 1rem 0;
}
.account-settings .user-profile .user-avatar img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
}
.account-settings .user-profile h5.user-name {
    margin: 0 0 0.5rem 0;
}
.account-settings .user-profile h6.user-email {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #9fa8b9;
}
.account-settings .about {
    margin: 2rem 0 0 0;
    text-align: center;
}
.account-settings .about h5 {
    margin: 0 0 15px 0;
    color: #007ae1;
}
.account-settings .about p {
    font-size: 0.825rem;
}
.form-control {
    border: 1px solid #cfd1d8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: .825rem;
    background: #ffffff;
    color: #2e323c;
}

.card {
    background: #ffffff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;
}
</style>