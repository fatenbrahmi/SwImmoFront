<template>
    <MyNavbar />
    <div class="container-fluid bg-warning mb-4 wow fadeIn d-flex justify-content-center align-items-center"
        data-wow-delay="0.1s" style="padding: 35px;">

        <div class="container">
            <div class="row g-2">
                <div class="col-md-10">
                    <div class="row g-2">
                        <div class="col-md-4">
                            <button class="btn custom-but dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Ville
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Tunis')">Tunis</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Sousse')">Sousse</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Monastir')">Monastir</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Sfax')">Sfax</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Gabès')">Gabès</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Bizerte')">Bizerte</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Kairouan')">Kairouan</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Gafsa')">Gafsa</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Nabeul')">Nabeul</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'La Marsa')">La Marsa</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Kelibia')">Kelibia</a></li>
                                <li><a class="dropdown-item" href="#" @click.prevent="setFilter(undefined, 'Le Kef')">Le
                                        Kef</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Zaghouan')">Zaghouan</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Tozeur')">Tozeur</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Djerba')">Djerba</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Zarzis')">Zarzis</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Mahdia')">Mahdia</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Tataouine')">Tataouine</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Mednine')">Mednine</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Sidi Bouzid')">Sidi Bouzid</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, 'Gasrin')">Gasrin</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <button class="btn custom-but dropdown-toggle" type="button" id="dropdownMenuButton2"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <li><a class="dropdown-item" href="#" @click.prevent="setFilter('', undefined)">Tous</a>
                                </li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter('maison', undefined)">Maison</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter('appartement', undefined)">Appartement</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter('villa', undefined)">Villa</a></li>
                                
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <button class="btn custom-but dropdown-toggle" type="button" id="dropdownMenuButton3"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Nombre de Chambres
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, undefined, '1')">1</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, undefined, '2')">2</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, undefined, '3')">3</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, undefined, '4')">4</a></li>
                                <li><a class="dropdown-item" href="#"
                                        @click.prevent="setFilter(undefined, undefined, '5+')">5+</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3 custom-input"
                                placeholder="Budget Max(DT)" v-model="maxBudget">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3 custom-input"
                                placeholder="Superficie Max(m²)" v-model="maxArea">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3 custom-input"
                                placeholder="Superficie Min(m²)" v-model="minArea">
                        </div>

                    </div>
                </div>



            </div>
        </div>

    </div>
    <div class="col-lg-6 custom-padding x">
        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
            <h1 class="mb-3">Annonces à Louer </h1>
        </div>
    </div>
    <div class="row g-4 custom-padding">
        <div v-for="annonce in filteredAnnonces" :key="annonce.id" class="col-lg-4 col-md-6">
            <div class="property-item rounded overflow-hidden h-100">
                <div class="position-relative overflow-hidden">
                    <a :href="annonce.link || '#'">
                        <img :src="'http://localhost:3000/' + annonce.image || '../Assets/img/default-property.jpg'"
                            class="img-fluid" alt="Image de l'annonce">
                    </a>
                    <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                        {{ annonce.status }}</div>
                    <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                        {{ annonce.type }}</div>
                </div>
                <div class="p-4 pb-0">
                    <h5 class="text-primary mb-1">{{ annonce.title }}</h5>
                    <h5 class="text-primary mb-3">{{ annonce.price }} DT</h5>
                    <small class="flex-fill text-center"><i class="fa fa-ruler-combined text-primary me-2"></i>{{
                        annonce.area }} m²</small>
                    <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ annonce.city }}</p>
                    <p>Déscription: {{ annonce.description }}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center px-4 pb-3">
                    <button type="button" class="btn btn-warning btn-sm">Voir Annonce</button>
                    <i class="bi bi-heart heart-icon"></i>
                </div>
            </div>
        </div>



        <div class="paging">
            <a href="#" class="disabled">Pev</a>
            <div class="page-square current">1</div>
            <div class="page-square"> <a href="/page/2">2</a></div>
            <div class="page-square"><a href="/page/3">3</a></div>
            <div class="page-square"><a href="/page/4">4</a></div>
            <div class="page-square"><a href="/page/5">5</a></div>
            <a href="/page/2">Next</a>
            <span class="paging-info">Page 1 of X</span>
        </div>

    </div>





</template>


<script>
import MyNavbar from '@/components/MyNavbar.vue';
import axios from 'axios';  // Assurez-vous d'avoir installé axios

export default {
    components: {
        MyNavbar,
    },
    data() {
        return {
            annonces: [], // Stocke les annonces récupérées
            selectedType: '', // Variable to hold the selected property type
            selectedCity: '',  // Variable to hold the selected city
            selectedRooms: '',  // Add this for room number filter
            maxBudget: '', // Filter for maximum budget
            maxArea: '', // New data property for maximum area
            minArea: '', // New data property for minimum area
        };
    },
    computed: {
        filteredAnnonces() {
            return this.annonces.filter(annonce => {
                const matchesType = !this.selectedType || annonce.type === this.selectedType;
                const matchesCity = !this.selectedCity || annonce.city === this.selectedCity;
                const matchesRooms = !this.selectedRooms || annonce.rooms.toString() === this.selectedRooms;
                const withinBudget = !this.maxBudget || annonce.price <= parseInt(this.maxBudget);
                const withinMaxArea = !this.maxArea || annonce.area <= parseInt(this.maxArea);
                const aboveMinArea = !this.minArea || annonce.area >= parseInt(this.minArea);
                return matchesType && matchesCity && matchesRooms && withinBudget && withinMaxArea && aboveMinArea && annonce.status === 'Louer';
            });
        }
    },

    methods: {
        async fetchAnnonces() {
            try {
                const response = await axios.get('http://localhost:3000/annonces');
                this.annonces = response.data;
                console.log('Data Loaded:', this.annonces); // Debugging output
            } catch (error) {
                console.error('Error loading annonces:', error);
            }
        },
        setFilter(type, city, rooms) {
            if (type !== undefined) this.selectedType = type;
            if (city !== undefined) this.selectedCity = city;
            if (rooms !== undefined) this.selectedRooms = rooms;
            console.log('Current Filters:', this.selectedType, this.selectedCity, this.selectedRooms);
        }
    },
    mounted() {
      
        this.fetchAnnonces();  // Appel pour charger les annonces
        const heartIcons = document.querySelectorAll('.heart-icon');
        heartIcons.forEach((heartIcon) => {
            heartIcon.addEventListener('click', () => {
                heartIcon.classList.toggle('active');
            });
        });
      
    }


};
</script>

<style scoped>
.custom-input,
.custom-but {
    width: 100%;
    /* Assure que tous les contrôles prennent toute la largeur de leur conteneur */
    height: 50px;
    /* Hauteur uniforme */
    padding: 15 15px;
    /* Padding intérieur pour le texte */
    line-height: 50px;
    /* Alignement vertical du texte */
    border-radius: 20px;
    /* Bordures moins arrondies pour l'esthétique */
}

.dropdown-menu {
    width: 20%;
    /* Assure que le menu déroulant a la même largeur que le bouton */
    border-radius: 15px;
    /* Bordures moins arrondies pour les menus déroulants */
    color: #515151;
}

/* Styles spécifiques pour les boutons pour correspondre aux champs de texte */
.custom-but {
    background-color: #ffffff;
    /* Couleur de fond */
    color: #515151;
    /* Couleur du texte */
    border: 1px solid ffffff;
    /* Bordure légère */
    text-align: left;
    /* Alignement du texte à gauche */
}

.custom-but:hover {
    background-color: #ffffff;
    /* Darker shade for hover effect */
    border-color: #ffffff;
    /* Even darker border on hover */
    color: #515151;
    /* White text for better contrast */
}


.custom-padding {
    padding-left: 90px;
    padding-right: 90px;
}

.custom-padding.x {
    padding-top: 60px;
}

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

.custom-input {
    border-radius: 20px;

}

.custom-button {
    padding: 10px 100px;
    /* Espacement intérieur */
    background-color: #18a7fad2;
    /* Couleur de fond */
    color: #fff;
    /* Couleur du texte */
    border: none;
    /* Pas de bordure */
    border-radius: 10px;
    /* Bordure arrondie */
    cursor: pointer;
    /* Curseur pointer */
}

/* Style de base pour l'icône de cœur */
.heart-icon {
    font-size: 24px;
    color: #ccc;
}

/* Style lorsque l'annonce est ajoutée aux favoris */
.heart-icon.active {
    color: rgb(241, 4, 4);
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

.page-square.current {
    background-color: #007bff;
    color: #fff;
}

.paging-info {
    margin-left: 10px;
    color: #777;
}
</style>