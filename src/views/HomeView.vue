<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <MyNavbar />
  <!-- Header Start -->
  <div class="container-fluid header bg-white p-0">
      <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6 p-5 mt-lg-5">
              <h1 class="display-5 animated fadeIn mb-4">Find A <span class="text-warning">Perfect Home</span> To Live
                  With Your Family</h1>
              <p class="animated fadeIn mb-4 pb-2">Tous les pros, Tous les biens POUR TROUVER VOTRE NID .</p>
              <router-link to="/Annonces" class="btn btn-warning btn-sm">Voir Annonces</router-link>
              <br><br>

              <li class="nav-item list-unstyled"> <!-- Ajout de la classe list-unstyled pour supprimer le point -->
                  <div class="input-group rounded" style="background-color: #f4f4f4;">
                      <input id="searchInput" type="search" class="form-control rounded-pill" placeholder="Search"
                          aria-label="Search" style="width: 500px; height: 50px;">
                      <div class="input-group-append">
                          <span class="input-group-text border-0" id="search-addon">
                              <i class="fas fa-search"></i>
                          </span>
                      </div>
                  </div>
              </li>


          </div>
          <div class="col-md-6 animated fadeIn">
              <div class="owl-carousel header-carousel">
                  <div class="owl-carousel-item">
                      <img class="img-fluid" src="../Assets/img/carousel-2.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Header End -->
  <!-- Search Start -->
  <div class="container-fluid bg-warning mb-4 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
      <div class="container">
          <div class="row g-2">
              <div class="col-md-10">
                  <div class="row g-2">
                      <div class="col-md-4">
                          <input id="searchInput" type="search" class="form-control border-0 py-3"
                              placeholder="Rechercher" aria-label="Search" v-model="searchQuery">
                      </div>
                      <!-- New Dropdown for Type de bien -->
                      <div class="col-md-4">
                          <button class="dropdown-toggle btn-sm border-0 py-3" type="button" id="dropdownMenuButton"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              Type
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('')">Tous</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setTypeFilter('maison')">Maison</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setTypeFilter('appartement')">Appartement</a>
                              </li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('villa')">Villa</a>
                              </li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setTypeFilter('terrain')">Terrain</a></li>

                          </ul>
                      </div>
                      <div class="col-md-4">
                          <button class="btn custom-drop dropdown-toggle" type="button" id="dropdownMenuButton"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              Ville
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('Tunis')">Tunis</a>
                              </li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Sousse')">Sousse</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Monastir')">Monastir</a></li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('Sfax')">Sfax</a>
                              </li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('Gabès')">Gabès</a>
                              </li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Bizerte')">Bizerte</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Kairouan')">Kairouan</a></li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('Gafsa')">Gafsa</a>
                              </li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Nabeul')">Nabeul</a></li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('La Marsa')">La
                                      Marsa</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Kelibia')">Kelibia</a></li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('Le Kef')">Le
                                      Kef</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Zaghouan')">Zaghouan</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Tozeur')">Tozeur</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Djerba')">Djerba</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Zarzis')">Zarzis</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Mahdia')">Mahdia</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Tataouine')">Tataouine</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Mednine')">Mednine</a></li>
                              <li><a class="dropdown-item" href="#" @click.prevent="setCityFilter('Sidi Bouzid')">Sidi
                                      Bouzid</a></li>
                              <li><a class="dropdown-item" href="#"
                                      @click.prevent="setCityFilter('Gasrin')">Gasrin</a></li>
                          </ul>
                      </div>

                  </div>
              </div>
              <div class="col-md-2">
                  <button class="btn btn-info border-0 w-100 py-3 btn-sm">Search</button>
              </div>
          </div>
      </div>
  </div>
  <!-- Search End -->

  <!-- About Start -->
  <div class="container-xxl py-5">
      <div class="container">
          <div class="row g-5 align-items-center">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div class="about-img position-relative overflow-hidden p-5 pe-0">
                      <img class="img-fluid w-100" src="../Assets/img/about.jpg">
                  </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <h1 class="mb-4">#1 Place To Find The Perfect Property</h1>
                  <p class="mb-4 justified-text">SWIMMO plateforme innovante dans le domaine de l'immobilier, offrant
                      une expérience
                      révolutionnaire tant pour les acheteurs que pour les vendeurs.
                      Notre plateforme propose une interface intuitive et des fonctionnalités avancées pour
                      simplifier la recherche et la vente de biens immobiliers.
                      Grâce à nos outils complets, les utilisateurs peuvent comparer facilement les propriétés
                      filtrer les résultats selon leurs préférences et bénéficier d'analyses objectives
                      pour prendre des décisions éclairées.
                      Que vous cherchiez votre maison de rêve ou que vous souhaitiez vendre votre propriété
                      notre plateforme est votre partenaire idéal dans votre parcours immobilier.</p>

                  <a class="btn btn-warning  px-4 mt-3 btn-sm" href="">En savoir plus</a>
              </div>
          </div>
      </div>
  </div>
  <!-- About End -->


 <!-- Property List Start -->
<div class="container-xxl py-5">
    <div id="contents" class="contents-container">
        <div class="container-xxl py-5">
            <div class="container">
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            <div v-for="(annonce) in filteredAnnonces" :key="annonce._id"
                                class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="property-item rounded overflow-hidden h-100 d-flex flex-column">
                                    <div class="position-relative overflow-hidden">
                                        <a :href="annonce.link || '#'">
                                            <img :src="'http://localhost:3000/' + annonce.image || '../Assets/img/default-property.jpg'"
                                                class="img-fluid" alt="Image de l'annonce">
                                        </a>
                                        <div
                                            class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                            {{ annonce.type }}
                                        </div>
                                    </div>
                                    <div class="p-4 pb-0 flex-grow-1 d-flex flex-column">
                                        <h5 class="text-primary mb-1">{{ annonce.title }}</h5>
                                        <h5 class="text-secondary mb-3">{{ annonce.price }} DT</h5>
                                        <small class="flex-fill text-center"><i
                                                class="fa fa-ruler-combined text-primary me-2"
                                                style="color: #5c6060;"></i>{{ annonce.area }} m²
                                        </small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ annonce.city }}</p>
                                        <p>Description: {{ annonce.description }}</p>
                                        <div class="mt-auto mb-3">
                                            <button type="button" class="btn btn-warning annonce-button"
                                                @click="voirDetailsAnnonce(annonce._id)">Voir annonce</button>
                                        </div>
                                        <div class="icon-container position-absolute bottom-0 end-0 px-3 pb-2">
                                            <a v-if="isFavorite(annonce._id)" href="#" class="icon-link"
                                                @click.prevent="removeFavorite(annonce._id)">
                                                <i  style="color:red;" class="fa fa-heart"></i>
                                            </a>
                                            <a v-else href="#" class="icon-link"
                                                @click.prevent="addFavorite(annonce._id)">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Property List End -->

  <MyFooter />

</template>
<script>
import MyNavbar from '@/components/MyNavbar.vue';
import axios from 'axios';
export default {
  components: { MyNavbar },
  data() {
      return {
        favoris: [],
          annonces: [],
          annonce: {
              title: '',
              description: '',
              price: null,
              image: null,
              area: null,
              rooms: null,
              city: '',
              type: 'maison'
          },
          searchQuery: '',
          currentFilter: 'Tous',
          currentTypeFilter: '' ,// New filter for Type de bien,
          currentCityFilter: '' // New filter for city
          
      };
  },
  mounted() {
      this.fetchAnnonces();
      // Sélectionnez chaque icône du cœur individuellement
      const heartIcons = document.querySelectorAll('.heart-icon');

      // Parcourez chaque icône du cœur et ajoutez un écouteur d'événements
      heartIcons.forEach((heartIcon) => {
          heartIcon.addEventListener('click', () => {
              heartIcon.classList.toggle('active');
          });
      });
      
  },
  computed: {
      filteredAnnonces() {
          let searchString = this.searchQuery.toLowerCase();
          return this.annonces.filter(annonce => {
              return (this.currentFilter === 'Tous' || annonce.status === this.currentFilter) &&
                  (this.currentTypeFilter === '' || annonce.type === this.currentTypeFilter) &&
                  (this.currentCityFilter === '' || annonce.city === this.currentCityFilter) &&
                  (annonce.title.toLowerCase().includes(searchString) ||
                      annonce.description.toLowerCase().includes(searchString) ||
                      annonce.city.toLowerCase().includes(searchString));
          });
      }
  },
  methods: {
    voirDetailsAnnonce(id) {
    this.$router.push({ name: 'AnnonceDetail', params: { id } });
  },
  isFavorite(annonceId) {
            console.log(this.favoris.length)
            return this.favoris.some(fav => fav.idAnnonce == annonceId);
        },
        async addFavorite(annonceId) {
            let userId = JSON.parse(localStorage.getItem('userData'))._id
            try {
                const response = await axios.post('http://localhost:3000/favoris/addFavoris', { userId: userId, idAnnonce: annonceId });
                console.log('Added to favorites:', response.data);
                this.favoris.push({ _id: response.data._id, idAnnonce: annonceId }); // Add the new favorite to the list
            } catch (error) {
                console.error('Failed to add to favorites:', error);
            }
        },
        async removeFavorite(annonceId) {
           
            await axios.delete(`http://localhost:3000/favoris/deleteFavoris/${annonceId}`);
            console.log('Removed from favorites:', annonceId);
                   this.fetchFavoris() // Remove the favorite from the list
                
          
        },
        
         fetchFavoris() {
            let userId = JSON.parse(localStorage.getItem('userData'))._id 
            console.log(userId)
            try {
                axios.get(`http://localhost:3000/favoris/getFavoris/${userId}`)
                    .then(response => {
                        this.favoris = response.data;
                     console.log("les favoris",response.data)
                })
               
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        },
        deleteAnnonce(index) {
            const annonce = this.annonces[index];
            let token = localStorage.getItem('token');  // Retrieve the token from localStorage
            let config = {
                headers: {
                    Authorization: `Bearer ${token}`  // Set the Authorization header
                }
            };
            axios.delete(`http://localhost:3000/annonces/${annonce._id}`, config)  // Pass config to axios delete method
                .then(() => {
                    this.annonces.splice(index, 1);
                    console.log('Delete successful');
                })
                .catch(error => {
                    console.error('Error deleting annonce:', error);
                    alert('Failed to delete annonce: ' + error.message);
                });
        },
      fetchAnnonces() {
          let token = localStorage.getItem('token');
          let config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          };
          axios.get('http://localhost:3000/annonces', config)
              .then(response => {
                  // Check if the response data is an array before assigning
                  if (Array.isArray(response.data)) {
                      this.annonces = response.data;
                  } else {
                      console.error('Received data is not an array:', response.data);
                      this.annonces = []; // Reset to an empty array if data is not an array
                  }
              })
              .catch(error => {
                  console.error("Error fetching annonces:", error);
                  this.annonces = []; // Ensure annonces is reset on error
              });
      },

      setFilter(filter) {
          this.currentFilter = filter;
      },
      setTypeFilter(type) {
          this.currentTypeFilter = type;
      },
      setCityFilter(city) {
          this.currentCityFilter = city;
      },
      truncateDescription(description) {
      return description.length > 50 ? description.substring(0, 50) + '...' : description;
    }
  },
  name: 'HomeView',
};
</script>
 
<style scoped>
.property-item {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.property-item .p-4.pb-0 {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.property-item .mt-auto {
    margin-top: auto;
}
.property-item img {
  height: 300px; /* Hauteur fixe pour toutes les images des cartes */
  width: 100%;   /* Assure que l'image prend toute la largeur disponible */
  object-fit: cover; /* Assure que l'image remplit le conteneur en conservant ses proportions */
}
/* Styles to make the 'Ville' dropdown button larger */
.btn.custom-drop.dropdown-toggle {
    padding: 12px 20px;
    /* Increase padding for a larger button appearance */
    font-size: 16px;
    /* Larger text for better visibility */
    width: 100%;
    /* Ensure it spans the full width of its container */
    border-radius: 5px;
    /* Optional: rounded corners for aesthetic preference */
  padding: 14px 15px !important;
  border-color: #ffffff;
}
.btn.custom-drop.dropdown-toggle:hover {
  background-color: #ffffff;
}

/* Styles to make the dropdown menu items larger */
.dropdown-menu {
    width: 20%;
    /* Full width to match the button */
}

.dropdown-item {
    padding: 10px 20px;
    /* Increased padding for larger, more clickable area */
    font-size: 15px;
    /* Larger text for readability */
}

/* Optional: hover effect for dropdown items */
.dropdown-item:hover {
    background-color: #ffffff;
    /* Light gray background on hover */
}

/* More specific selector */
div.col-md-4>#searchInput {
    background-color: #ffffff !important;
    /* Ensuring white background */
    border: none !important;
    /* Ensuring no border */
    outline: none !important;
    /* Removing outline to keep UI clean */
    box-shadow: none !important;
    /* Removing box shadow */
    padding: 16px 15px !important;
    /* Comfortable padding, ensure it matches your design */
}

/* Adjust placeholder color if needed */
div.col-md-4>#searchInput::placeholder {
    color: #888 !important;
    /* Light grey, adjust if necessary */
}
/* Extend the width of the dropdown button and change its color */
.dropdown-toggle {
    background-color: #ffffff;
    /* White background */
    width: 100%;
    /* Make it full width within its container */
    color: #333;
    /* Dark color for text */
    border: 1px solid #ccc;
    /* Light gray border for better definition */
}


/* Change background color on hover for dropdown items for better user experience */
.dropdown-item:hover {
    background-color: #f8f9fa;
    /* Very light gray for hover */
}
.justified-text {
    text-align: justify;
}
/* rest of buttons */
.btn-warning {
    background-color: #FFC107;
    /* Custom blue color */
    border: 1px solid #FFC107;
    /* Border color */
    color: #ffffff;
    /* White text for better contrast */
}

.btn-warning:hover {
    background-color: #ffffff;
    /* Darker shade for hover effect */
    border-color: #FFC107;
    /* Even darker border on hover */
    color: #FFC107;
    /* White text for better contrast */
}
#searchInput {
  background-color: #f4f4f4; /* Couleur de fond */
  border: none; /* Supprimer la bordure */
  outline: none; /* Supprimer le contour de focus */
  box-shadow: none; /* Supprimer l'ombre */
}

/* Style de base pour l'icône de cœur */
.heart-icon {
    font-size: 24px;
    color: #ccc;
}

/* Style lorsque l'annonce est ajoutée aux favoris */
.heart-icon.active {
    color: red; /* Couleur rouge pour indiquer que l'annonce est dans les favoris */
}

.paging {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.paging a {
    text-decoration: none;
    color: #333;
    padding: 5px 10px;
    margin: 0 3px;
    border-radius: 3px;
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
}

.paging a:hover {
    background-color: #ddd;
}

.page-square {
    width: 30px; /* Largeur du carré */
    height: 30px; /* Hauteur du carré */
    text-align: center;
    line-height: 30px; /* Centrer le texte verticalement */
    margin: 0 3px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #f0f0f0;
}

.page-square a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
}

.page-square.current {
    background-color: #007bff;
    color: #fff;
}

.paging-info {
    margin-left: 10px;
    color: #777;
}




@media (min-width: 992px) {
    .header {
        margin-top: -120px;
    }
}

.header-carousel .owl-nav {
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
}

.header-carousel .owl-nav .owl-prev,
.header-carousel .owl-nav .owl-next {
    margin: 7px 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: var(--primary);
    border-radius: 40px;
    font-size: 20px;
    transition: .5s;
}

.header-carousel .owl-nav .owl-prev:hover,
.header-carousel .owl-nav .owl-next:hover {
    background: var(--dark);
}

@media (max-width: 768px) {
    .header-carousel .owl-nav {
        left: 25px;
    }
}

.breadcrumb-item + .breadcrumb-item::before {
    color: #DDDDDD;
}

</style>