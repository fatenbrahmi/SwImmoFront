<template>
   <div>
      <MyNavbar />
      <div v-if="loading" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">
         <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>
      <div v-else>
         <h1>Ta liste des favoris</h1>
         <div v-for="(fav) in favorites" :key="fav._id" class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="property-item rounded overflow-hidden h-100">
               <div class="position-relative overflow-hidden">
                  <a :href="fav.link || '#'">
                     <img :src="getImageUrl(fav.image)" class="img-fluid" alt="Image de l'annonce">
                  </a>
                  <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                     {{ fav.type }}
                  </div>
               </div>
               <div class="p-4 pb-0">
                  <h5 class="text-primary mb-1">{{ fav.title }}</h5>
                  <h5 class="text-secondary mb-3">{{ fav.price }} DT</h5>
                  <small class="flex-fill text-center"><i class="fa fa-ruler-combined text-primary me-2"></i>{{ fav.area
                     }} m²</small>
                  <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ fav.city }}</p>
                  <p>Description: {{ fav.description }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue'
import axios from 'axios'
const user = JSON.parse(localStorage.getItem('userData'))

export default {
   components: {
      MyNavbar,
   },
   data() {
      return {
         favorites: [],
         loading: true
      }
   },
   mounted() {
      axios.get(`http://localhost:3000/favoris/getFavoris/${user._id}`)
         .then(response => {
            this.favorites = response.data;
            this.loading = false;
         })
         .catch(error => {
            console.error('Error fetching favorites:', error);
            this.loading = false;
         });
   },
   methods: {
      getImageUrl(image) {
         return image ? `http://localhost:3000/${image}` : '../Assets/img/default-property.jpg';
      },
      
   }
}
</script>
