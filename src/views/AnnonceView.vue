<template>

    <MyNavbar />
    <div id="contents" class="contents-container">
        <div class="contents-container d-flex justify-content-end align-items-center">

            <div class="input-group rounded" style="max-width: 400px;">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" v-model="searchQuery" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <div class="btn-group btn-group-sm mx-2" role="group">
                <button type="button" class="btn btn-secondary annonce-button-color"
                    @click="setFilter('Tous')">Tous</button>
                <button type="button" class="btn btn-secondary annonce-button-color" @click="setFilter('Vendre')">À
                    vendre</button>
                <button type="button" class="btn btn-secondary annonce-button-color" @click="setFilter('Louer')">À
                    louer</button>
            </div>
            <!-- New Dropdown for Type de bien -->
            <div class="dropdown sm  mx-2">
                <button class="btn annonce-button btn-sm dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Type
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('')">Tous</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('maison')">Maison</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('appartement')">Appartement</a>
                    </li>
                    <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('villa')">Villa</a></li>
                    <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('terrain')">Terrain</a></li>
                    
                </ul>
            </div>

            <div class="d-flex justify-content-end align-items-center">
                <button type="button" class="btn annonce-button btn-sm" data-bs-toggle="modal"
                    data-bs-target="#annonceModal"> Ajouter une annonce
                </button>
            </div>
            <div class="modal fade" id="annonceModal" tabindex="-1" aria-labelledby="annonceModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="annonceModalLabel">Ajouter une annonce</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submitAnnonce">
                                <div class="mb-3">

                                    <input v-model="annonce.title" type="text" class="form-control input-smaller"
                                        id="title" placeholder="Titre" required>
                                </div>
                                <div class="mb-3">

                                    <textarea v-model="annonce.description" class="form-control input-smaller"
                                        id="description" placeholder="Description" required></textarea>
                                </div>
                                <div class="mb-3">

                                    <input v-model="annonce.price" type="number" class="form-control input-smaller"
                                        id="price" placeholder="Prix" required>
                                </div>
                                <div class="mb-3">

                                    <input type="file" @change="handleFileUpload" class="form-control input-smaller"
                                        id="image" placeholder="Image" required>
                                </div>
                                <div class="mb-3">

                                    <input v-model="annonce.area" type="number" class="form-control input-smaller"
                                        id="area" placeholder="Surface" required>
                                </div>
                                <div class="mb-3">

                                    <input v-model="annonce.rooms" type="number" class="form-control input-smaller"
                                        id="rooms" placeholder="Nombre de pièces" required>
                                </div>
                                <div class="mb-3">

                                    <input v-model="annonce.city" type="text" class="form-control input-smaller"
                                        id="city" placeholder="Ville" required>
                                </div>
                                <div class="mb-3">

                                    <select v-model="annonce.type" class="form-select" id="type">
                                        <option value="maison">Maison</option>
                                        <option value="appartement">Appartement</option>
                                        <option value="villa">Villa</option>
                                        <option value="terrain">Terrain</option>
                                        <option value="autres">Autres</option>
                                    </select>
                                </div>
                                <div class="mb-3">

                                    <select v-model="annonce.status" class="form-select" id="status">
                                        <option value="Vendre">À vendre</option>
                                        <option value="Louer">À louer</option>
                                    </select>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary btn-sm"
                                        data-bs-dismiss="modal">Fermer</button>
                                    <button type="submit" class="btn annonce-button btn-sm">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            <div v-for="(annonce, index) in filteredAnnonces" :key="annonce._id"
                                class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="property-item rounded overflow-hidden h-100">
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
                                    <div class="p-4 pb-0">
                                        <h5 class="text-primary mb-1">{{ annonce.title }}</h5>
                                        <h5 class="text-secondary mb-3">{{ annonce.price }} DT</h5>
                                        <small class="flex-fill text-center"><i
                                                class="fa fa-ruler-combined text-primary me-2"
                                                style="color: #5c6060;"></i>{{ annonce.area }}
                                            m²</small>
                                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ annonce.city }}</p>
                                        <p>Description: {{ annonce.description }}</p>
                                        <button type="button" class="btn btn-outline-primary btn-sm annonce-button">Voir
                                            annonce</button>
                                        <a href="#" class="btn btn-link pull-right btn-sm"
                                            @click.prevent="deleteAnnonce(index)"><i class="fa fa-trash"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyNavbar from '@/components/MyNavbar.vue';
import axios from 'axios';
export default {
    components: { MyNavbar},
    data() {
        return {
            annonces: [],
            annonce: {
                title: '',
                description: '',
                price: null,
                image: null,
                area: null,
                rooms: null,
                city: '',
                type: 'maison',
                status: 'Vendre'
            },
            searchQuery: '',
            currentFilter: 'Tous',
            currentTypeFilter: '' // New filter for Type de bien
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
                    (annonce.title.toLowerCase().includes(searchString) ||
                        annonce.description.toLowerCase().includes(searchString) ||
                        annonce.city.toLowerCase().includes(searchString));
            });
        }
    },
    methods: {
        fetchAnnonces() {
            //Retrieve the Authentication Token
            let token = localStorage.getItem('token')
            //Configure the HTTP Request Headers
            let config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.get('http://localhost:3000/annonces', config)    //Make an HTTP GET Request
                .then(response => {     //handles the response from the server
                    this.annonces = response.data;
                })
                .catch(error => console.error("Error fetching annonces:", error));    //Error Handling
        },
        submitAnnonce() {
            let formData = new FormData();
            formData.append('title', this.annonce.title);
            formData.append('description', this.annonce.description);
            formData.append('price', this.annonce.price);
            formData.append('area', this.annonce.area);
            formData.append('rooms', this.annonce.rooms);
            formData.append('city', this.annonce.city);
            formData.append('type', this.annonce.type);
            formData.append('status', this.annonce.status);
            formData.append('image', this.annonce.image);
            axios.post('http://localhost:3000/annonces/createAnnonce', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    this.annonces.push(response.data);
                    this.resetAnnonce();
                    this.hideModal();
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Erreur lors de l’ajout de l’annonce: ' + error.message);
                });
        },
        resetAnnonce() {
            this.annonce = {
                title: '',
                description: '',
                price: null,
                image: null,
                area: null,
                rooms: null,
                city: '',
                type: 'maison',
                status: 'Vendre'
            };
        },
        handleFileUpload(event) {
            this.annonce.image = event.target.files[0];
        },
        hideModal() {
            const modal = document.getElementById('annonceModal');
            if (modal) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.parentNode.removeChild(backdrop);
                }
            }
        },
        deleteAnnonce(index) {
            const annonce = this.annonces[index];
            axios.delete(`http://localhost:3000/annonces/${annonce._id}`)
                .then(() => {
                    this.annonces.splice(index, 1);
                })
                .catch(error => {
                    console.error('Error deleting annonce:', error);
                });
        },
        setFilter(filter) {
            this.currentFilter = filter;
        },
        setTypeFilter(type) {
            this.currentTypeFilter = type;
        }
    }
}
</script>


<style>
.input-smaller {
    padding: 5px 10px;
    /* Réduit le padding pour diminuer la hauteur */
    height: auto;
    /* S'assure que la hauteur s'adapte au padding et au contenu */
}
.property-item {
    position: relative;
}

.fa-trash {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #c6c8ca;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.3s;
}

.fa-trash:hover {
    color: #6a6a6b;
}

/* button group */
.annonce-button-color {
    background-color: #FFC107;
    /* Custom color */
    border-color: #FFC107;
    /* Matching border */
    color: #ffffff;
    /* White text for better contrast */
}

.annonce-button-color:hover {
    background-color: #ffffff;
    /* Darker shade for hover effect */
    border-color: #ffffff;
    color: #FFC107;
        /* White text for better contrast */
}

/* rest of buttons */
.annonce-button {
    background-color: #FFC107;
    /* Custom blue color */
    border: 1px solid #FFC107;
    /* Border color */
    color: #ffffff;
    /* White text for better contrast */
}

.annonce-button:hover {
    background-color: #ffffff;
    /* Darker shade for hover effect */
    border-color: #FFC107;
    /* Even darker border on hover */
    color: #FFC107;
    /* White text for better contrast */
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #f4f8fb;
}

#nav a.router-link-exact-active {
    color: #131832;
}

/* Style de base pour l'icône de cœur */
.heart-icon {
    font-size: 24px;
    color: #f2f2f2;
}

/* Style lorsque l'annonce est ajoutée aux favoris */
.heart-icon.active {
    color: red;
    /* Couleur rouge pour indiquer que l'annonce est dans les favoris */
}

.paging {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.paging a {
    text-decoration: none;
    color: #ebe6e6;
    padding: 5px 10px;
    margin: 0 3px;
    border-radius: 3px;
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
}

.paging a:hover {
    background-color: #eeecec;
}

.page-square {
    width: 30px;
    /* Largeur du carré */
    height: 30px;
    /* Hauteur du carré */
    text-align: center;
    line-height: 30px;
    /* Centrer le texte verticalement */
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

.page-square current {
    background-color: #88acd4;
    color: #fff;
}

.paging-info {
    margin-left: 10px;
    color: #f2f1f1;
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

.breadcrumb-item+.breadcrumb-item::before {
    color: #eeeeee;
}

.contents-container {
    margin-left: 0;
    /* Ajustez cette valeur en fonction de la largeur de votre sidebar */
    margin-top: 0;
    margin-right: 20px;
}
</style>
