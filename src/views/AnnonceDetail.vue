<template>
    <MyNavbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body d-flex">
              <!-- Partie gauche pour l'image -->
              <div class="col-md-6">
                <img v-if="annonce.image" :src="'http://localhost:3000/' + annonce.image" class="img-fluid mb-3" alt="Image de l'annonce">
              </div>
              <!-- Partie droite pour les détails -->
              <div class="col-md-6">
                <h5 class="card-title">{{ annonce.title }}</h5>
                <p class="card-text">{{ annonce.description }}</p>
                <p>Prix: {{ annonce.price }} DT</p>
                <p>Surface: {{ annonce.area }} m²</p>
                <p>Ville: {{ annonce.city }}</p>
                <!-- Afficher les informations de l'utilisateur (propriétaire) -->
                <div v-if="annonce.user">
                  
                  <p>Téléphone: {{ annonce.user.telephone }}</p>
                  <!-- Autres informations de l'utilisateur si disponibles -->
                </div>
                <router-link :to="{ name: 'HomeView' }" class="btn btn-warning mt-3">Retour</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MyNavbar from '@/components/MyNavbar.vue';
  
  export default {
    components: { MyNavbar },
    name: 'AnnonceDetail',
    props: ['id'],
    data() {
      return {
        annonce: {}
      };
    },
    created() {
      this.fetchAnnonce();
    },
    methods: {
      fetchAnnonce() {
        let token = localStorage.getItem('token');
        let config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
  
        axios.get(`http://localhost:3000/annonces/${this.id}`, config)
          .then(response => {
            this.annonce = response.data;
          })
          .catch(error => {
            console.error('Error fetching annonce:', error);
          });
      }
    }
  };
  </script>
  
  
  
  
  