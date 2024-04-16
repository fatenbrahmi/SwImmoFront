<template>
    <div class="position-relative">
      <font-awesome-icon
        :icon="isFavorite ? ['fas', 'heart'] : ['far', 'heart']"
        class="position-absolute top-0 end-0 m-2"
        @click="toggleFavorite"
      />
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
  import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
  
  export default {
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        isFavorite: false
      }
    },
    methods: {
      toggleFavorite() {
        this.isFavorite = !this.isFavorite
        // Ajoutez ici la logique pour ajouter ou retirer l'élément des favoris dans votre application
      }
    },
    created() {
      // Ajoutez ici la logique pour vérifier si l'élément est déjà en favori lorsqu'il est chargé
    },
    mounted() {
      this.$fontAwesome.library.add([fasHeart, farHeart])
    }
  }
  </script>
  
  <style scoped>
  /* Ajoutez ici votre CSS personnalisé si nécessaire */
  </style>
  