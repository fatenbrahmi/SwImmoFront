
<template>
  <div class="join-us-container">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg bg-custom-color" style="border-radius: 20px;">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Se%20Connecter">Se connecter</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/S'inscrire">S'inscrire</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br>
      <br>
      <!-- Form -->
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <input type="text" class="form-control form-control-sm" id="nom" placeholder="Entrez votre nom*" v-model="nom">
            </div>
            <br>
            <div class="mb-3">
              <input type="text" class="form-control form-control-sm" id="prenom" placeholder="Entrez votre prénom*" v-model="prenom">
            </div>
            <br>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <input type="email" class="form-control form-control-sm" id="email" placeholder="Entrez votre email*" v-model="email">
            </div>
            <br>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <input type="password" class="form-control form-control-sm" id="motdepasse" placeholder="Entrez votre mot de passe*" v-model="mot_de_passe">
            </div>
            <br>
            <div class="mb-3">
              <input type="password" class="form-control form-control-sm" id="confirmermotdepasse" placeholder="Confirmez votre mot de passe*" v-model="confirmer_mot_de_passe">
            </div>
            <br>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <input type="tel" class="form-control form-control-sm" id="telephone" placeholder="Entrez votre numéro de téléphone*" v-model="telephone">
            </div>
            <br>
            <div class="mb-3">
              <select class="form-select form-select-sm" id="profil" v-model="profil">
                <option selected disabled>Choisissez votre profil*</option>
                <option value="agent">Agent immobilier</option>
                <option value="acquereur">Acquéreur</option>
                <option value="locataire">Locataire</option>
                <option value="proprietaire">Propriétaire</option>
              </select>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <input type="file" class="form-control form-control-sm" id="photo" @change="onFileChange">
        </div>
        <div id="subform-Mandatory" class="mandatory" style="margin-top: 10px;text-decoration: underline;color: black;font-size: 12px;">( * ) Champs obligatoires</div>
        <button type="submit" class="btn btn-warning">S'inscrire</button>
      </form>
    </div>
     <!-- Affichage du message d'erreur -->
     <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import FormData from 'form-data';

export default {
  name: 'InscrireView',
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      mot_de_passe: '',
      confirmer_mot_de_passe: '',
      telephone: '',
      profil: '',
      photo: null,
      errorMessage: '', // Ajoutez une variable pour stocker le message d'erreur
    };
  },
  methods: {
    async submitForm() {
      const formData = new FormData();
      formData.append('nom', this.nom);
      formData.append('prenom', this.prenom);
      formData.append('email', this.email);
      formData.append('mot_de_passe', this.mot_de_passe);
      formData.append('confirmer_mot_de_passe', this.confirmer_mot_de_passe);
      formData.append('telephone', this.telephone);
      formData.append('profil', this.profil);
      formData.append('photo', this.photo);
      
      try {
        // Utilisez Axios pour envoyer le formulaire avec la photo de profil
        const response = await axios.post('http://localhost:3000/auth/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        console.log(response.data); // Affiche la réponse du serveur
        
        // Réinitialiser les champs du formulaire après l'envoi
        this.nom = '';
        this.prenom = '';
        this.email = '';
        this.mot_de_passe = '';
        this.confirmer_mot_de_passe = '';
        this.telephone = '';
        this.profil = '';
        this.photo = null;
      } catch (error) {
        console.error(error); // Affiche toute erreur survenue lors de l'envoi du formulaire
        
        // Afficher un message d'erreur approprié en fonction de l'erreur reçue
        if (error.response) {
          // La requête a été faite, mais le serveur a répondu avec un code d'erreur
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          this.errorMessage = error.response.data.message; // Récupérer le message d'erreur du serveur
        } else if (error.request) {
          // La requête a été faite, mais aucune réponse n'a été reçue
          console.log(error.request);
          this.errorMessage = "Aucune réponse du serveur";
        } else {
          // Une erreur s'est produite lors de la configuration de la requête
          console.log('Error', error.message);
          this.errorMessage = "Une erreur s'est produite lors de la requête";
        }
      }
    },
    onFileChange(e) {
      // Stocke la photo sélectionnée dans la variable photo
      this.photo = e.target.files[0];
    },
  },
};
</script>





<style scoped>
.navbar {
  
  padding: 0 20px;
  max-height: 10%;
  top: 0; 

}
.bg-custom-color {
background-color: #3E81BC;
}

.join-us-container {
  width: 100%; /* Ajustez la largeur selon vos besoins */
  height: 100vh; /* Ajustez la hauteur selon vos besoins */
  background: linear-gradient(
    180deg,
    rgba(109, 141, 162, 1) 0%,
    rgba(217, 217, 217, 0) 100%
  ), url('~@/Assets/sign.jpg');
  background-size: cover; /* Chemin vers votre image */
  background-size: cover; /* Ajustez la taille de l'image */
  background-position: center;
    /* Position de l'image */
  /* Autres styles personnalisés pour le conteneur JoinUs */
}
.container {
  
  width: 700px;
  height: auto;
  margin: auto;
  padding: 20px;
  border: 1px solid #dceffa;
  border-radius: 5px;
  /* Chemin vers votre image de fond */
  background: linear-gradient(
    180deg,
    rgba(109, 141, 162, 1) 0%,
    rgba(217, 217, 217, 0) 100%
  ), url('~@/Assets/accueil.png');
  /* Centrer l'image de fond */
  background-position: center;
  /* Assurer que l'image de fond couvre toute la zone */
  background-size: cover;
  
}
</style>