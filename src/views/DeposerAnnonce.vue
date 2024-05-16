<template>
  <div class="container-fluid header p-0 background-image">
    <MyNavbar/>
    <br><br><br>
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-md-8">
        <h2 class="text-xl text-center mb-4 " style=" color: #faef18;">Déposer votre Annonce</h2>
        
        <form @submit.prevent="submitForm" class="mt-8">
          <!-- Champs pour les informations de l'utilisateur -->
          <div class="row">
            <div class="col-md-6 align-items-start">
              <label>
                <div class="text-sm text-gray-600" style=" color: #000000;">Votre nom*</div>
                <input v-model="user.nom" type="text" name="nom"  class="custom-input mt-2">
              </label>
              
            </div>
            <div class="col-md-6 align-items-start">
              <label>
                <div class="text-sm text-gray-600" style=" color: #000000;">Votre adresse e-mail*</div>
                <input v-model="user.email" type="email" name="email"  class="custom-input mt-2">
              </label>
            </div>
            <div class="col-md-6 align-items-start">
              <label>
                <div class="text-sm text-gray-600" style=" color: #000000;">Téléphone*</div>
                <input v-model="user.telephone" type="text" name="telephone" class="custom-input mt-2">
              </label>
            </div>
            <div class="col-md-6 align-items-start">
              <label>
                <div class="text-sm text-gray-600" style=" color: #000000;">Profil*</div>
                <select v-model="user.role" required>
                <option value="" disabled selected hidden>Choisir un rôle</option>
                <option value="superadmin">Superadmin</option>
                <option value="agent_immobiliere">Agent immobilier</option>
                <option value="locataire">Locataire</option>
                <option value="proprietaire">Propriétaire</option>
              </select>
              </label>
            </div>
          </div>
          <!-- Reste du formulaire pour les détails de l'annonce -->
          <div class="row mt-8">
            
            <div class="col-md-12">
              <h1 class="text-xl"  style=" color: #faef18;">Votre bien</h1>
              
              <p class="mt-2 text-sm text-gray-600" style=" color: #fff;">Quelques informations utiles concernant le bien que vous souhaitez vendre.</p>
              
              <div class="row">
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #fff;">Title*</div>
                    <input v-model="annonce.title" type="text" name=title  class="custom-input mt-2">
                  </label>
                </div>
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #000000;">prix*</div>
                    <input v-model="annonce.price" type="text" name="price"  class="custom-input mt-2">
                  </label>
                </div>
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #000000;">Type de bien*</div>
                    <select v-model="annonce.type" name="type"  class="custom-input mt-2">
                      <option value="" disabled>Choisir...</option>
                      <option value="maison">Maison</option>
                      <option value="appartement">Appartement</option>
                      <option value="garage">Garage</option>
                      <option value="terrain">Terrain</option>
                      <option value="local industriel">Local industriel</option>
                      <option value="bureau">Bureau</option>
                      <option value="autre">Autre</option>
                    </select>
                  </label>
                </div>
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #000000;">Nombre de pièces</div>
                    <select v-model="annonce.rooms" name="rooms" class="custom-input mt-2">
                      <option value="" disabled>Choisir...</option>
                      <option value="1">1 pièce</option>
                      <option value="2">2 pièces</option>
                      <option value="3">3 pièces</option>
                      <option value="4">4 pièces</option>
                      <option value="5">5 pièces ou plus</option>
                    </select>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #000000;">Ville*</div>
                    <input v-model="annonce.city" type="text" name="city"  class="custom-input mt-2">
                  </label>
                </div>
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #000000;">Code postal*</div>
                    <input v-model="annonce.postal" type="text" name="postal"  class="custom-input mt-2">
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #fff;">Surface</div>
                    <input v-model="annonce.surface" type="number" name="surface"  class="custom-input mt-2">
                  </label>
                </div>
                <div class="col-md-6 align-items-start">
                  <label>
                    <div class="text-sm text-gray-600" style=" color: #000000;">Sélectionner des images</div>
                    <input  type="file" name="images" accept="image/*" multiple  class="//*--2">
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-8">
            <div class="col-md-12">
              <label>
                <div class="text-sm text-gray-600" style=" color: #000000;">Description</div>
                <textarea  v-model="annonce.description" name="description" id="input_11_10" class="textarea medium"  rows="10" cols="50"></textarea>
              </label>
            </div>
          </div>
          <div class="row mt-8">
            <div class="col-md-12">
              <div class="flex justify-end">
                <button type="submit" class="custom-button">Publier</button>
              </div>
            </div>
          </div>
          <br><br><br>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import MyNavbar from '@/components/MyNavbar.vue';
import axios from 'axios';

export default {
  components: { MyNavbar },
  name: 'DeposerAnnonce',
  data() {
    return {
      user: {
        nom: '',
        email: '',
        telephone: '',
        role: ''
      },
      annonce: {
        title: '',
        price: 0,
        type: '',
        rooms: 0,
        city: '',
        postal: '',
        surface: 0,
        image: [],
        description: ''
      }
    };
  },
  mounted() {
    const heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('active');
      });
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 45) {
        document.querySelector('.nav-bar').classList.add('sticky-top');
      } else {
        document.querySelector('.nav-bar').classList.remove('sticky-top');
      }
    });
  },
  methods: {
    async submitForm() {
      try {
        // Vérifier si l'utilisateur existe
        const userCheckResponse = await axios.get(`http://localhost:3000/auth/users/email/${this.user.email}`);
        let userId;

        if (userCheckResponse.data) {
          // Utilisateur existe
          userId = userCheckResponse.data._id;

          // Créer l'annonce
          const annonceData = {
            title: this.annonce.title,
            price: this.annonce.price,
            type: this.annonce.type,
            rooms: this.annonce.rooms,
            city: this.annonce.city,
            postal: this.annonce.postal,
            surface: this.annonce.surface,
            image: this.annonce.image,
            description: this.annonce.description,
            userId: userId
          };

          await axios.post('http://localhost:3000/annonceRoutes/createAnnonce', annonceData);
          alert("Annonce publiée avec succès !");
          
          // Réinitialiser les champs du formulaire après une inscription réussie
          this.user = {
            nom: '',
            email: '',
            telephone: '',
            role: ''
          };
          this.annonce = {
            title: '',
            price: 0,
            type: '',
            rooms: 0,
            city: '',
            postal: '',
            surface: 0,
            image: [],
            description: ''
          };
        } else {
          // Utilisateur n'existe pas, afficher une alerte
          alert("Veuillez créer un compte avant de déposer une annonce.");
        }
      } catch (error) {
        console.error(error);
        alert("Une erreur s'est produite lors de la publication : " + error.message);
      }
    }
  }
};
</script>


<style scoped>
/* Style pour l'image de fond */
.background-image {
  position: relative;
  background-image: url("../Assets/deposer4.jpg");
  background-size: cover;
  background-position: center;

}

/* Les styles pour le contenu */
.container-fluid.header {
  position: relative;
  z-index: 1; /* Assure que le contenu reste au-dessus de l'image de fond */
}

/* Styles personnalisés pour les champs et le bouton */
.custom-input {
  width: 100%; /* Largeur personnalisée */
  padding: 8px; /* Espacement intérieur */
  border: 1px solid #ccc; /* Bordure */
  border-radius: 4px; /* Bordure arrondie */
  margin-bottom: 10px; /* Marge inférieure */
}

.custom-textarea {
  width: 100%; /* Largeur personnalisée */
  min-height: 100px; /* Hauteur minimale */
  padding: 8px; /* Espacement intérieur */
  border: 1px solid #070707; /* Bordure */
  border-radius: 10px; /* Bordure arrondie */
}

.custom-button {
  padding: 10px 30px; /* Espacement intérieur */
  background-color: #f0e409; /* Couleur de fond */
  color: #fff; /* Couleur du texte */
  border: none; /* Pas de bordure */
  border-radius: 10px; /* Bordure arrondie */
  cursor: pointer; /* Curseur pointer */
}

.custom-button:hover {
  background-color: #eea236; /* Couleur de fond au survol */
}


/* Les styles pour les titres */
.text-xl {
  color: rgb(255, 255, 255); /* Change la couleur des titres en rouge */
  font-weight: bold; /* Rend les titres en gras */
}
</style>
