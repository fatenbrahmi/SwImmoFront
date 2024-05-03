<template>
  <div class="container-fluid header bg-white p-0 background-image">
    <div class="flex flex-wrap -mx-2 justify-center">
      <div class="w-full md:w-2/3 lg:w-1/2 px-2">
        <h2 class="text-xl text-center mb-4">Déposer votre Annonce</h2>
        <form @submit.prevent="submitForm" class="mt-8">
          <!-- Champs pour les informations de l'utilisateur -->
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <label>
                <div class="text-sm text-gray-600">Votre nom*</div>
                <input v-model="user.name" type="text" name="name" class="w-full mt-2 form-input">
              </label>
              <label>
                <div class="text-sm text-gray-600">Votre adresse e-mail*</div>
                <input v-model="user.email" type="email" name="email" class="w-full mt-2 form-input">
              </label>
              <label>
                <div class="text-sm text-gray-600">Téléphone*</div>
                <input v-model="user.telephone" type="text" name="telephone" class="w-full mt-2 form-input">
              </label>
              <label>
                <div class="text-sm text-gray-600">Profil*</div>
                <select name="profil" v-model="user.profil" class="w-full mt-2 form-select">
                  <option value="" disabled>Choisir...</option>
                  
                  <option value="Agent_immobilier">Agent immobilier</option>
                  <option value="Proprietaire">Propriétaire</option>
                </select>
              </label>
            </div>
          </div>
          <!-- Reste du formulaire pour les détails de l'annonce -->
          <div class="flex flex-wrap -mx-4 mt-8">
            <div class="w-full px-4">
              <h1 class="text-xl">Votre bien</h1>
              <p class="mt-2 text-sm text-gray-600">Quelques informations utiles concernant le bien que vous souhaitez vendre.</p>
              <label>
                <div class="text-sm text-gray-600">Type de bien*</div>
                <select v-model="annonce.type" name="type" class="w-full mt-2 form-select">
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
              <label>
                <div class="text-sm text-gray-600">Nombre de pièces</div>
                <select v-model="annonce.rooms" name="rooms" class="w-full mt-2 form-select">
                  <option value="" disabled>Choisir...</option>
                  <option value="1">1 pièce</option>
                  <option value="2">2 pièces</option>
                  <option value="3">3 pièces</option>
                  <option value="4">4 pièces</option>
                  <option value="5">5 pièces ou plus</option>
                </select>
              </label>
              <div class="flex flex-wrap -mx-2">
                <label class="block w-full px-2 mt-4 lg:w-2/3">
                  <div class="text-sm text-gray-600">Ville*</div>
                  <input v-model="annonce.city" type="text" name="city" class="w-full mt-2 form-input">
                </label>
                <label class="block w-full px-2 mt-4 lg:w-1/3">
                  <div class="text-sm text-gray-600">Code postal*</div>
                  <input v-model="annonce.postal" type="text" name="postal" class="w-full mt-2 form-input">
                </label>
              </div>
              <label>
                <div class="text-sm text-gray-600">Surface</div>
                <input v-model="annonce.surface" type="number" name="surface" class="w-full mt-2 form-input">
              </label>
              <div class="flex flex-wrap -mx-2 mt-4">
                <label class="block w-full px-2 lg:w-1/2">
                  <div class="text-sm text-gray-600">Sélectionner des images</div>
                  <input type="file" name="images" accept="image/*" multiple class="w-full mt-2 form-input">
                </label>
              </div>
            </div>
          </div>
          <div class="px-4 mt-8">
            <label>
              <div class="text-sm text-gray-600">Description</div>
              <textarea v-model="annonce.description" name="description" class="w-full" style="width: 100%; height: 100px;"></textarea>
            </label>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="btn btn-warning">Envoyer</button>
          </div>
          <br>
        </form>
        <br><br>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'DeposerAnnonce',
  data() {
    return {
      user: {
        name: '',
        email: '',
        telephone: '',
        profil: ''
      },
      annonce: {
        title: '',
        description: '',
        price: 0,
        type: '',
        rooms: 0,
        city: '',
        postal: '',
        surface: 0,
        image: [],
        // Ajoutez d'autres champs si nécessaire
      }
    };
  },
  methods: {
    async  submitForm(){
      try {
        // Enregistrez l'utilisateur ou récupérez l'utilisateur existant
        const userResponse = await axios.post('http://localhost:3000/userRoutes', this.user);
        const userId = userResponse.data._id;

        // Ajoutez l'ID de l'utilisateur à l'annonce
        this.annonce.userId = userId;

        // Envoi de l'annonce au backend
        const annonceResponse = await axios.post('http://localhost:3000/annonces', this.annonce);
        console.log('Annonce créée:', annonceResponse.data);

        // Réinitialisez les champs du formulaire après la soumission
        this.user.name = '';
        this.user.email = '';
        this.user.phone = '';
        this.annonce.title = '';
        this.annonce.description = '';
        this.annonce.price = 0;
        this.annonce.type = '';
        this.annonce.rooms = 0;
        this.annonce.city = '';
        this.annonce.postal = '';
        this.annonce.surface = 0;
        this.annonce.images = [];
        // Réalisez toute autre action nécessaire après la soumission du formulaire

      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error);
        // Gérez les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
      }
    }
  }
}
</script>


<style scoped>
.background-image {
    background-image: url("../Assets/slide.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh; /* Utilise la hauteur complète de la fenêtre */
  }
/* Style pour les inputs */
.form-input {
  background-color: rgb(255, 255, 255); /* Change la couleur de fond des inputs */
  border: 1px solid rgb(0, 0, 0); /* Ajoute une bordure grise autour des inputs */
  padding: 8px; /* Ajoute un peu d'espace intérieur aux inputs */
  margin-bottom: 10px; /* Ajoute un peu d'espace en bas des inputs */
}

/* Style pour les labels */
.text-gray-600 {
  color: rgb(0, 0, 0); /* Change la couleur du texte des labels en bleu */
}

/* Style pour les titres */
.text-xl {
  color: rgb(10, 10, 10); /* Change la couleur des titres en rouge */
  font-weight: bold; /* Rend les titres en gras */
}
</style>