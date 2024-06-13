<template>
  <div>
    <MyNavbar />
    <div class="background-image">
      <div class="col_md_sign_up">
        <div class="cont_ba_opcitiy">
          <h2>S'INSCRIRE</h2>
          <form @submit.prevent="registerUser" class="form">
            <div class="mb-1">
              <input type="text" class="custom-input" v-model="userData.nom" placeholder="Nom" required>
            </div>
            <div class="mb-2">
              <input type="text" class="custom-input" v-model="userData.prenom" placeholder="Prénom" required>
            </div>
            <div class="mb-2">
              <input type="email" class="custom-input" v-model="userData.email" placeholder="Email" required>
            </div>
            <div class="mb-2">
              <input type="text" class="custom-input" v-model="userData.telephone" placeholder="Téléphone" required>
            </div>
            <div class="mb-2">
              <input type="password" class="custom-input" v-model="userData.motDePasse" placeholder="Mot de passe"
                required>
            </div>
            <div class="mb-2">
              <select v-model="userData.Profil" required>
                <option value="" disabled selected hidden>Choisir un profil</option>
                <option value="agentImmobilier">Agent Immobilier</option>
                <option value="internaute">Client</option>
                <option value="adminAgence">Admin Agence</option>
                <option value="delegue">Délégué</option>
              </select>
            </div>
            <div class="mb-2" v-if="userData.Profil === 'adminAgence'">
              <input type="text" class="custom-input" v-model="userData.nomAgence" placeholder="Nom de l'agence"
                required>
            </div>
            <div class="mb-2" v-if="userData.Profil === 'agentImmobilier'">
              <select v-model="userData.agence" required>
                <option v-for="agence in agencies" :key="agence._id" :value="agence._id">
                  {{ agence.nom }}
                </option>
              </select>
            </div>
            <div class="mb-2">
              <input type="file" class="custom-input" @change="onFileChange" placeholder="Image de profil" required>
            </div>
            <button type="submit" class="btn_sign_up">S'inscrire</button>
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
        photoProfil: '',
        nomAgence: '',
        agence: '' 
      },
      agencies: [],
    }
  },
  methods: {
    onFileChange(event) {
      this.userData.photoProfil = event.target.files[0];
    },
    async registerUser() {
      console.log(this.userData.agence)
      let myFormData = new FormData();

      myFormData.append('nom', this.userData.nom);
      myFormData.append('prenom', this.userData.prenom);
      myFormData.append('email', this.userData.email);
      myFormData.append('telephone', this.userData.telephone);
      myFormData.append('motDePasse', this.userData.motDePasse);
      myFormData.append('Profil', this.userData.Profil);
      myFormData.append('file', this.userData.photoProfil);

      if (this.userData.Profil === 'adminAgence') {
        myFormData.append('nomAgence', this.userData.nomAgence);
      }
     else if (this.userData.Profil === 'agentImmobilier') {
        myFormData.append('agence', this.userData.agence); // Add agency ID when profile is agentImmobilier
      }

      try {
        const response = await axios.post('http://localhost:3000/auth/register', myFormData);
        console.log(response.data);
        alert(response.data.message);
        if (response.status === 201) {
          this.userData.nom = '';
          this.userData.prenom = '';
          this.userData.email = '';
          this.userData.telephone = '';
          this.userData.motDePasse = '';
          this.userData.Profil = '';
          this.userData.photoProfil = '';
          this.userData.nomAgence = '';
          this.userData.agence = ''; // Reset agency ID after successful registration
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error.response?.data?.message || error.message || "Une erreur s'est produite lors de l'inscription.";
        alert("Une erreur s'est produite lors de l'inscription : " + errorMessage);
      }
    },
    async fetchAgencies() {
      try {
        const response = await axios.get('http://localhost:3000/auth/Agences'); // Updated the endpoint to be more specific with the base URL
        this.agencies = response.data;
        console.log('Agencies fetched:', this.agencies); // Log the fetched agencies
      } catch (error) {
        console.error('Erreur lors de la récupération des agences:', error);
      }
    }
  },
  watch: {
    'userData.Profil'(newValue) {
      if (newValue === 'agentImmobilier') {
        this.fetchAgencies();
      }
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
  border-radius: 100px;
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
  border-radius: 10px;
  border-color:#8f8f8f ; /* Rayon de bordure pour arrondir les coins des deux côtés */
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
  border-radius: 10px;
  box-shadow: 1px 5px 20px -5px rgba(85, 85, 85, 0.4);
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
}

</style>