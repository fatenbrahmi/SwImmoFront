<template>
  <div class="container-fluid nav-bar bg-transparent">
    <nav class="navbar fixed-top navbar-expand-lg bg-white navbar-light py-0 px-4">
      <router-link to="/" class="navbar-brand d-flex align-items-center text-center">
        <img class="img-fluid" src="../Assets/swimmo.png" alt="Icon" style="width: 70px; height: 70px;">
      </router-link>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav me-auto">
          <router-link to="/" class="nav-item nav-link" exact>Accueil</router-link>
          <router-link to="/Acheter" class="nav-item nav-link">Acheter</router-link>
          <router-link to="/Louer" class="nav-item nav-link">Louer</router-link>
          <router-link to="/Agent" class="nav-item nav-link">Agent</router-link>
        </div>
        <div class="d-flex align-items-center position-relative mx-2">
          <div class="d-flex justify-content-end align-items-center">
            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#annonceModal">
              Déposer une Annonce
            </button>
          </div>

          <div class="modal fade" id="annonceModal" tabindex="-1" aria-labelledby="annonceModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="annonceModalLabel">Ajouter une annonce</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="submitAnnonce">
                    <div class="mb-3">
                      <input v-model="annonce.title" type="text" class="form-control input-smaller" id="title" placeholder="Titre" required>
                    </div>
                    <div class="mb-3">
                      <textarea v-model="annonce.description" class="form-control input-smaller" id="description" placeholder="Description" required></textarea>
                    </div>
                    <div class="mb-3">
                      <input v-model="annonce.price" type="number" class="form-control input-smaller" id="price" placeholder="Prix" required>
                    </div>
                    <div class="mb-3">
                      <input type="file" @change="handleFileUpload" class="form-control input-smaller" id="image" placeholder="Image" required>
                    </div>
                    <div class="mb-3">
                      <input v-model="annonce.area" type="number" class="form-control input-smaller" id="area" placeholder="Surface" required>
                    </div>
                    <div class="mb-3">
                      <input v-model="annonce.rooms" type="number" class="form-control input-smaller" id="rooms" placeholder="Nombre de pièces" required>
                    </div>
                    <div class="mb-3">
                      <input v-model="annonce.city" type="text" class="form-control input-smaller" id="city" placeholder="Ville" required>
                    </div>
                    <div class="mb-3">
                      <select v-model="annonce.type" class="form-select" id="type">
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                        <option value="villa">Villa</option>
                        <option value="terrain">Terrain</option>
                        <option value="autres">Autres</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <select v-model="annonce.status" class="form-select" id="status">
                        <option value="Vendre">À vendre</option>
                        <option value="Louer">À louer</option>
                      </select>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Fermer</button>
                      <button type="submit" class="btn btn-success btn-sm">Ajouter</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <li class="nav-item ms-3 pe-3">
            <router-link to="/profil-list" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#alertModal"><i class="fas fa-bell"></i></router-link>
          </li>

          <li class="nav-item pe-3">
            <router-link to="/favoriteList" class="nav-item nav-link"><i class="fas fa-heart"></i></router-link>
          </li>
          <li class="nav-item dropdown pe-3">
            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <i class="fas fa-user"></i>
              <span class="d-none d-md-block dropdown-toggle ps-2">Rejoignez nous</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li><router-link to="/profil" class="dropdown-item"><i class="fas fa-user"></i> Mon profil</router-link></li>
              <li><router-link to="/connexion" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> Connexion</router-link></li>
              <li><router-link to="/Annonces" class="dropdown-item"><i class="fas fa-newspaper"></i> Mes Annonces</router-link></li>
              <li>
                <a class="dropdown-item" @click="logout">
                  <i class="fas fa-sign-out-alt"></i> Se Déconnecter
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  </div>

  <!-- Modal pour la création d'alerte -->
  <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <br><br><br><br><br><br>
          <h5 class="modal-title" id="alertModalLabel">Créer une alerte</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitAlerte">
            <div class="mb-3">
              <input v-model="alerte.utilisateurEmail" type="email" class="form-control" id="utilisateurEmail" placeholder="Email" required>
            </div>
            <div class="mb-3">
              <input v-model="alerte.critere.prixMax" type="number" class="form-control" id="prixMax" placeholder="Prix Max" required>
            </div>
            <div class="mb-3">
              <input v-model="alerte.critere.localisation" type="text" class="form-control" id="localisation" placeholder="Localisation" required>
            </div>
            <div class="mb-3">
              <select v-model="alerte.critere.typeBien" class="form-select" id="typeBien" required>
                <option value="" disabled>Type de bien</option>
                <option value="maison">Maison</option>
                <option value="appartement">Appartement</option>
                <option value="villa">Villa</option>
                <option value="terrain">Terrain</option>
                <option value="autres">Autres</option>
              </select>
            </div>
            <div class="mb-3">
              <select v-model="alerte.critere.status" class="form-select" id="status" required>
                <option value="Vendre">À vendre</option>
                <option value="Louer">À louer</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-warning ">Créer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';
import { Modal } from 'bootstrap';

export default {
  name: 'MyNavbar',
  data() {
    return {
      annonces: [],
      annonce: {
        title: '',
        description: '',
        price: null,
        image: null,
        area: null,
        rooms: null,
        city: '',
        type: 'maison',
        status: 'Vendre'
      },
      alerte: {
        utilisateurEmail: '',
        critere: {
          prixMax: null,
          localisation: '',
          typeBien: '',
          status: 'Vendre'
        }
      }
    };
  },
  methods: {
    submitAnnonce() {
      let formData = new FormData();
      formData.append('title', this.annonce.title);
      formData.append('description', this.annonce.description);
      formData.append('price', this.annonce.price);
      formData.append('area', this.annonce.area);
      formData.append('rooms', this.annonce.rooms);
      formData.append('city', this.annonce.city);
      formData.append('type', this.annonce.type);
      formData.append('status', this.annonce.status);
      formData.append('image', this.annonce.image);

      let token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        alert('Vous devez être connecté pour ajouter une annonce.');
        return;
      }

      axios.post('http://localhost:3000/annonces/createAnnonce', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          if (response.data) {
            this.annonces.push(response.data);
            this.resetAnnonce();
            this.hideModal();
          } else {
            console.error('No data in response:', response);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          if (error.response && error.response.status === 401) {
            alert('Erreur: Vous n\'êtes pas autorisé à ajouter cette annonce.');
          } else {
            alert('Erreur lors de l’ajout de l’annonce: ' + error.message);
          }
        });
    },
    resetAnnonce() {
      this.annonce = {
        title: '',
        description: '',
        price: null,
        image: null,
        area: null,
        rooms: null,
        city: '',
        type: 'maison',
        status: 'Vendre'
      };
    },
    handleFileUpload(event) {
      this.annonce.image = event.target.files[0];
    },





    submitAlerte() {
      const nouvelleAlerte = {
        critere: this.alerte.critere
      };

      let token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        alert('Vous devez être connecté pour créer une alerte.');
        return;
      }

      axios.post('http://localhost:3000/alerts', nouvelleAlerte, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log('Alerte créée avec succès:', response.data);
          this.resetAlerteForm();
          this.hideModal('alertModal');
        })
        .catch(error => {
          console.error('Erreur lors de la création de l\'alerte:', error);
          alert('Erreur lors de la création de l\'alerte: ' + error.message);
        });
    },
    resetAlerteForm() {
      this.alerte = {
        critere: {
          prixMax: null,
          localisation: '',
          typeBien: '',
          status: 'Vendre'
        }
      };
    },
  
    hideModal(alertModal) {
      const modalElement = document.getElementById(alertModal);
      if (modalElement) {
        const modalInstance = Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        } else {
          // If the instance doesn't exist yet, create it and hide it
          const newModalInstance = new Modal(modalElement);
          newModalInstance.hide();
        }
      }
    },
    
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      console.log("User logged out");
      router.push('/connexion');
    }
  }
};
</script>


<style scoped>
.fa-heart {
  color: rgb(56, 55, 55)
}
body {
  padding-top: 80px;
  /* Adjust based on the height of your navbar */
}

.navbar.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1020;
  /* Higher z-index to ensure the navbar is above other content */
}

.nav-item {
  list-style: none;
  margin-right: 10px;
}

.nav-link .fas:hover {
  color: #FFC107 !important;
  /* Couleur jaune de Bootstrap */
}
</style>
