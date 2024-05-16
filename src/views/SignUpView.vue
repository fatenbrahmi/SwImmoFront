<template>
  <div>
    <MyNavbar/>
    <div class="background-image">
      <div class="col_md_sign_up">
        <div class="cont_ba_opcitiy">
          <h2>S'INSCRIRE</h2>
          <br>
          <form @submit.prevent="registerUser" class="form">
            <div class="mb-3">
              <input type="text" class="custom-input" v-model="userData.nom" placeholder="Nom" required>
            </div>
            <div class="mb-3">
              <input type="text"  class="custom-input" v-model="userData.prenom" placeholder="Prénom" required>
            </div>
            <div class="mb-3">
              <input type="email" class="custom-input" v-model="userData.email" placeholder="Email" required>
            </div>
            <div class="mb-3">
              <input type="text" class="custom-input" v-model="userData.telephone" placeholder="Téléphone" required>
            </div>
            <div class="mb-3">
              <input type="password" class="custom-input" v-model="userData.motDePasse" placeholder="Mot de passe" required>
              
            </div>
            <div class="mb-3">
              <select v-model="userData.Profil" required>
                <option value="" disabled selected hidden>Choisir un profil</option>
                <option value="superAdmin">Superadmin</option>
                <option value="agentImmobilier">Agent immobilier</option>
                <option value="internaute">Internaute</option>
                <option value="adminAgence">admin Agence</option>
                <option value="delegue">Délégué</option>
              </select>
            </div>
            <div class="mb-3">
              <input type="file" class="custom-input"  @change="onFileChange" placeholder="Image de profil" required>
            </div>
            <button type="submit" class= "btn_sign_up">Sign Up</button>
          </form>
        </div>
      </div>
      
    </div>
    
  </div>
</template>


<script>
import MyNavbar from '@/components/MyNavbar.vue'
import axios from 'axios';

export default {
  components: {
    MyNavbar,
  },
  data() {
    return {
      userData: {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        motDePasse: '',
        Profil: '',
        image: null
      }
    }
  },
  methods: {
    onFileChange(event) {
      this.userData.image = event.target.files[0];
    },
    registerUser() {
      // Envoi de la requête POST pour l'inscription
      axios.post('http://localhost:3000/auth/register', {
          nom: this.userData.nom,
          prenom: this.userData.prenom,
          email: this.userData.email,
          telephone: this.userData.telephone,
          motDePasse: this.userData.motDePasse,
          Profil: this.userData.Profil,
          photoProfil: this.userData.photoProfil
        })
        .then(response => {
          console.log(response.data);
          alert("Inscription réussie !");
          // Réinitialiser les champs du formulaire après une inscription réussie
          this.userData.nom = '';
          this.userData.prenom = '';
          this.userData.email = '';
          this.userData.telephone = '';
          this.userData.motDePasse = '';
          this.userData.Profil = '';
          this.userData.photoProfil = '';
        })
        .catch(error => {
          console.error(error);
          alert("Une erreur s'est produite lors de l'inscription : " + error.message);
        });
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, select {
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0; /* Couleur de fond pour les champs */
}


button {
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color: #1a8796;
  color: white;
  border: none;
  cursor: pointer;
}

.custom-input {
  width: 500px; /* Largeur personnalisée */
  height: 40px; /* Hauteur personnalisée */
  background-color: #f0f0f0; 
  border-radius: 20px; /* Rayon de bordure pour arrondir les coins des deux côtés */
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


.col_md_sign_up {
  width: 50%; /* Les deux conteneurs auront la même largeur */
 
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
  border-radius: 3px;
  margin-top: 60px;
  padding: 15px 0px;
}

.btn_sign_up {
  background-color: #f9d211;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}

</style>