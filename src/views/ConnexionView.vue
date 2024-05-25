<template>
  <div>
    <MyNavbar />
    <div class="background-image">
      <div class="cont_login">
        <div class="cont_ba_opcitiy">
          <h2>SE CONNECTER</h2>
          <p>Bienvenue ! Veuillez vous connecter avec SWIMMO.</p>
          <br>
          <form @submit.prevent="login">
            <div class="mb-3">

              <input type="email" class="custom-input" id="email" v-model="loginData.email" placeholder="Email"
                required>
            </div>
            <div class="mb-3">
              <input type="password" class="custom-input" id="password" v-model="loginData.motDePasse"
                placeholder="Mot de passe" required>
              <a href="#exampleModalToggle" class="forgot-password" data-bs-toggle="modal">Mot de passe oublié ?</a>
            </div>
            <button type="submit" class="btn_login">Connexion</button>
          </form>
        </div>
      </div>
      <div class="col_md_sign_up">
        <div class="cont_ba_opcitiy">
          <h2>S’INSCRIRE</h2>
          <p>Vous n'avez pas encore de compte ? Créez-le en quelques secondes pour bénéficier.</p>
          <br>
          <router-link to="/signup" class="btn_sign_up">Créer mon compte</router-link>
        </div>
      </div>
    </div>

    <!-- Modal for Password Recovery -->
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
      <div class="modal-dialog modal-dialog-centered custom-modal-dialog">
        <div class="modal-content custom-modal-content">
          <div class="modal-header custom-modal-header">
            <h5 class="modal-title custom-modal-title" id="exampleModalToggleLabel">Renseignez votre adresse e-mail et
              nous vous enverrons tout de suite la marche à suivre.</h5>
            <button type="button" class="btn-close custom-modal-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
            <br><br>
          </div>
          <br><br><br>
          <div class="modal-body">
            <div class="mb-3">

              <input type="email" class="custom-input" v-model="recoveryEmail" placeholder="Email" required>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-warning custom-modal-button" @click="recoverPassword"
              data-bs-dismiss="modal">Réinitialiser votre mot de passe</button>
          </div>
          <br><br>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MyNavbar from '@/components/MyNavbar.vue'
import axios from 'axios'

export default {
  components: {
    MyNavbar,
  },
  data() {
    return {
      loginData: {
        email: '',
        motDePasse: ''
      },
      recoveryEmail: '',
      
    }
  },
  methods: {
    async login() {
      try {
        // Sending POST request for login
        const response = await axios.post('http://localhost:3000/auth/login', {
          email: this.loginData.email,
          motDePasse: this.loginData.motDePasse
        })

        // Success response
        console.log(response.data)
        alert("Connexion réussie !")

        // Reset form fields after successful login
        this.loginData.email = ''
        this.loginData.motDePasse = ''
      } catch (error) {
        // Error handling
        console.error(error)
        if (error.response.status === 401) {
          // Status 401 means incorrect credentials
          alert("Adresse e-mail ou mot de passe incorrect.")
        } else {
          // Other error
          alert("Une erreur s'est produite lors de la connexion : " + error.message)
        }
      }
    },
    
    async recoverPassword() {
      try {
        await axios.post('http://localhost:3000/auth/forgot-password', {
          email: this.recoveryEmail
        });
        alert("Un email de récupération de mot de passe a été envoyé à votre adresse email.");
        this.recoveryEmail = ''; // Clear the email field after sending
      } catch (error) {
        console.error(error);
        alert("Une erreur s'est produite lors de la récupération du mot de passe.");
      }
    }

,
    openModal() {
    this.showRecoveryModal = true; // Set to true to show the modal
  },
    closeModal() {
      // Hide the password recovery modal using a ref and v-show directive
      this.$refs.passwordRecoveryModal.style.display = 'none';
    }
  }
}
</script>







<style scoped>
/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/
/* Styles personnalisés pour la modal */
.custom-modal-dialog {
  max-width: 700px; /* Largeur maximale de la modal */
}

.custom-modal-content {
  background-color: rgba(60, 104, 127, 0.55); /* Couleur de fond de la modal */
}

.custom-modal-header {
  background-color: rgba(60, 104, 127, 0.55); /* Couleur de fond de l'en-tête de la modal */
}

.custom-modal-title {
  font-size: 1rem; /* Taille de texte pour le titre de la modal */
  color: #ffffff; /* Couleur du texte pour le titre de la modal */
}

.custom-modal-close {
  color: #ff0000; ; 
  margin-right: 10px; /* Marge à droite de l'icône de fermeture */
  
}

.custom-modal-button {
  font-size: 1rem; /* Taille de texte pour le bouton de la modal */
  padding: 10px 20px;
  margin-top: 20px; /* Rembourrage pour le bouton de la modal */
  background-color:#f9d211 ;
}
.custom-modal-button:hover {
  background-color: #ffffff;
  /* Darker shade for hover effect */
  border-color: #ffffff;
  color: rgba(24, 28, 30, 0.55);
  /* White text for better contrast */
}

/* Styles personnalisés pour les champs d'email */
.custom-input {
  width: 100%; /* Largeur du champ d'email */
  height: 40px; /* Hauteur du champ d'email */
  font-size: 1rem; /* Taille de texte pour le champ d'email */
}
.btn_sign_up {
  background-color: #f9d211;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 1px 5px 20px -5px rgba(60, 60, 60, 0.4);
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
  text-decoration: none;
  
}
.forgot-password {
  font-size: 15px; /* Taille de la police */
  color: #ffffff; /* Couleur du texte */
  text-decoration: underline; /* Soulignement du texte */
  display: block; /* Affichage en bloc pour occuper toute la largeur disponible */
  margin-top: 5px; /* Marge supérieure pour séparer du champ de saisie du mot de passe */
}
.custom-input {
  width: 500px; /* Largeur personnalisée */
  height: 40px; /* Hauteur personnalisée */
  background-color: #f0f0f0; 
  border-radius: 10px; /* Rayon de bordure pour arrondir les coins des deux côtés */
}
* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
.background-image {
  position: absolute;
  width: 100%;
  display: flex;

    background-image: url("../Assets/connexion2.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh; /* Utilise la hauteur complète de la fenêtre */
  }

.cont_login,
.col_md_sign_up {
  width: 50%; /* Les deux conteneurs auront la même largeur */
  margin-top: 10%; /* Ajustez la marge supérieure si nécessaire */
}

.cont_login {
  position: relative;
}

.cont_forms {
  position: absolute;
  overflow: hidden;
  top: 0px;
  left: 0px;
  width: 100%; /* Ajustez la largeur si nécessaire */
  height: 280px;
  background-color: #eee;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_info_log_sign_up {
  position: absolute;
  width: 100%; /* Ajustez la largeur si nécessaire */
  height: 280px;
  top: 20px;
  z-index: 1;
}

.col_md_login {
  position: relative;
  float: left;
}

.col_md_login > h2 {
  font-weight: 400;
  margin-top: 70px;
  color: #37474f;
}

.col_md_login > p {
  font-weight: 400;
  margin-top: 15px;
  width: 80%;
  color: #37474f;
}

.btn_login {
  background-color: #f9d211;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 1px 5px 20px -5px rgba(57, 57, 57, 0.4);
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
}

.col_md_sign_up {
  position: relative;
  float: left;
}

.cont_ba_opcitiy > h2 {
  font-weight: 400;
  color: #fff;
}

.cont_ba_opcitiy > p {
  font-weight: 400;
  margin-top: 15px;
  color: #fff;
}
/* ----------------------------------
background text    
------------------------------------
 */
.cont_ba_opcitiy {
  position: relative;
  background-color: rgba(99, 141, 162, 0.55);
  width: 80%;
  border-radius: 10px;
  margin-top: 60px;
  padding: 15px 0px;
}



</style>
