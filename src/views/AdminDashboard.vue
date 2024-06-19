<template>
  <AdminNavbar />
  <SideBar />
  <div>
    <router-view />
  </div>

  <body id="page-top">


    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <br><br>
        <!-- Main Content -->
        <div id="content" class="content-container">
          <!-- Begin Page Content -->
          <div class="container-fluid">
            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              <div class="input-group rounded" style="max-width: 350px; margin-right: 10px;">
                <!-- Augmenté max-width -->
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                  aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div>
              <!-- Content Row -->
              <div class="row">
                <!-- Annonces publiées -->
                <div class="col-xl-4 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <i class="fas fa-home fa-2x" style="color: #2c3e50;"></i>
                        </div>
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Annonces publiées
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800"><strong style="color: #2c3e50;">{{
                              totalAnnonces }}</strong></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Nombre des agences immobilières -->
                <div class="col-xl-4 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <i class="fas fa-users fa-2x" style="color: #2c3e50;"></i>
                        </div>
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Nombre des agences immobilières
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800"><strong style="color: #2c3e50;">{{
                              totalAgencies }}</strong></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Nombre des utilisateurs abonnés -->
                <div class="col-xl-4 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <i class="fas fa-user fa-2x" style="color: #2c3e50;"></i>
                        </div>
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Nombre des utilisateurs abonnés
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800"><strong style="color: #2c3e50;">{{
                              totalUsers }}</strong></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





              <!-- Content Row -->

              <div class="row">
                <!-- Area Chart -->
                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 p-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Nombre d'Annonces par Mois</h6>
                      <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink">
                          <div class="dropdown-header">Dropdown Header:</div>
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                      <BarChart :chartData="barChartData" />
                    </div>
                  </div>
                </div>

                <!-- Pie Chart -->
                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4"> <!-- Added card and shadow classes -->
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 class="m-0 font-weight-bold text-primary">Répartition des Annonces par Catégorie
                      </h6>
                      <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink">
                          <div class="dropdown-header">Dropdown Header:</div>
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                      <PieChart :chartData="pieChartData" />
                    </div>
                  </div>
                </div>
              </div>



              <div class="row my-5">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 --bs-success-bg-subtle">Annonces</h1>
                  <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuLink"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Trier Selon
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Récents</a></li>
                      <li><a class="dropdown-item" href="#">Nouveaux</a></li>
                      <li><a class="dropdown-item" href="#">À vendre</a></li>
                      <li><a class="dropdown-item" href="#">À louer</a></li>
                      <li><a class="dropdown-item" href="#">Tous</a></li>
                    </ul>
                  </div>


                </div>
                <div class="col">
                  <table class="table bg-white rounded shadow-sm table-hover">
                    <thead>
                      <tr>
                        <th scope="col" width="50">#</th>
                        <th scope="col">Annonce</th>
                        <th scope="col">Image</th>
                        <th scope="col">Property Type</th>
                        <th scope="col">Prix(DT)</th>
                        <th scope="col">Détails</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">1</td>
                        <td>Appartement moderne à louer</td>
                        <td><img src="..\Assets\img\property-6.jpg" alt="Image Annonce 1" width="100">
                          <span class="badge bg-secondary">5</span> <!-- Nombre d'images -->
                        </td>
                        <td>Appartement</td>
                        <td>200,000</td>
                        <td>Bel appartement situé au centre-ville avec vue sur la rivière. 3 chambres, 2
                          salles de bains.</td>
                        <td>
                          <div class="btn-group">
                            <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                            <div class="mx-2"></div> <!-- Ajouter un espace -->
                            <button type="button" class="btn btn-danger btn-sm"><i
                                class="fas fa-trash-alt"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td scope="row">2</td>
                        <td>Maison familiale spacieuse à vendre</td>
                        <td><img src="../Assets/img/property-1.jpg" alt="Image Annonce 2" width="100">
                          <span class="badge bg-secondary">3</span>
                        </td>
                        <td>Maison</td>
                        <td>200,000</td>
                        <td>Grande maison avec jardin et piscine. Parfait pour une famille nombreuse.</td>
                        <td>
                          <div class="btn-group">
                            <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                            <div class="mx-2"></div> <!-- Ajouter un espace -->
                            <button type="button" class="btn btn-danger btn-sm"><i
                                class="fas fa-trash-alt"></i></button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td scope="row">3</td>
                        <td>Terrain à vendre</td>
                        <td><img src="..\Assets\terr.webp" alt="Image Annonce 3" width="100">
                          <span class="badge bg-secondary">1</span>
                        </td>
                        <td>Terrain</td>
                        <td>300,000</td>
                        <td>Terrain à vendre</td>
                        <td>
                          <div class="btn-group">
                            <button type="button" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                            <div class="mx-2"></div> <!-- Ajouter un espace -->
                            <button type="button" class="btn btn-danger btn-sm"><i
                                class="fas fa-trash-alt"></i></button>
                          </div>
                        </td>
                      </tr>


                      <!-- Ajoutez d'autres annonces ici -->
                    </tbody>
                  </table>
                </div>
              </div>








            </div>
            <!-- /.container-fluid -->

          </div>
          <!-- End of Main Content -->
        </div>

      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import AdminNavbar from '@/components/AdminNavbar.vue';
import SideBar from '@/components/Sidebar/SideBar.vue';
import { sidebarWidth } from '@/components/Sidebar/state';
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';

export default {
  components: { AdminNavbar, SideBar, BarChart, PieChart },
  setup() {
    return { sidebarWidth }
  },

  data() {
    return {
      totalAnnonces: 0,
      totalAgencies: 0,
      totalUsers: 0,
      pieChartData: null,
      barChartData: null,
    };
  },
  mounted() {
    this.fetchTotalAnnonces();
    this.fetchTotalAgencies();
    this.fetchTotalUsers();
    this.fetchPieChartData();
    this.fetchBarChartData();
  },
  methods: {
    fetchTotalAnnonces() {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.get('http://localhost:3000/annonces/stats', config)
        .then(response => {
          this.totalAnnonces = response.data.totalAnnonces;
          alert("Total annonces fetched successfully.");
        })
        .catch(error => {
          console.error('Error fetching total annonces:', error);
        });
    },
    fetchTotalAgencies() {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.get('http://localhost:3000/auth/agencies/count', config)
        .then(response => {
          this.totalAgencies = response.data.totalAgencies;
        })
        .catch(error => {
          console.error('Error fetching total agencies:', error);
        });
    },
    fetchTotalUsers() {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.get('http://localhost:3000/auth/users/stats', config)
        .then(response => {
          this.totalUsers = response.data.totalUsers;
        })
        .catch(error => {
          console.error('Error fetching total users:', error);
        });
    },
    fetchPieChartData() {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.get('http://localhost:3000/annonces/listingPercentages', config)
        .then(response => {
          this.pieChartData = {
            labels: response.data.map(item => item.type),
            datasets: [{
              backgroundColor: ['#A8DADC', '#FFD166', '#D4A5A5', '#A8E6CF', '#FFABAB'],
              data: response.data.map(item => item.percentage)
            }]
          };
        })
        .catch(error => {
          console.error("Error fetching pie chart data:", error);
        });
    },
    fetchBarChartData() {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const pastelColors = [
        '#A8DADC', '#FFD166', '#D4A5A5', '#A8E6CF', '#FFABAB', '#B5EAD7', '#FFC0CB', '#FFDAB9', '#B0E0E6'
        // Add more pastel colors here if needed
      ];

      axios.get('http://localhost:3000/annonces/monthly-stats', config)
        .then(response => {
          const data = response.data;
          const cities = [...new Set(data.map(item => item.city))];
          const datasets = cities.map((city, index) => ({
            label: city,
            backgroundColor: pastelColors[index % pastelColors.length],
            data: Array(12).fill(0) // Initialize array for months
          }));

          data.forEach(item => {
            const cityIndex = cities.indexOf(item.city);
            const monthIndex = parseInt(item.month) - 1;
            datasets[cityIndex].data[monthIndex] = item.count;
          });

          this.barChartData = {
            labels: [
              'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
              'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
            ],
            datasets: datasets
          };
        })
        .catch(error => {
          console.error("Error fetching bar chart data:", error);
        });
    }


  }

};
</script>

<style>
.icon-big {
  font-size: 24px;
  /* ajustez cette taille selon vos préférences */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content-container {
  margin-left: 190px;
  /* Ajustez cette valeur en fonction de la largeur de votre sidebar */
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
  color: #ccc;
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
  background-color: #2e77c5;
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

.breadcrumb-item+.breadcrumb-item::before {
  color: #DDDDDD;
}

/* Style pour aligner le contenu des cartes à gauche */
.card-body .row .col-auto {
  margin-right: 5px;
  /* Réduit la marge à droite de l'icône pour pousser le texte à gauche */
}

/* Style pour aligner les icônes et le texte verticalement au centre */
.card-body .row {
  align-items: center;
  /* Assure que l'icône et le texte sont alignés verticalement au centre */
  display: flex;
}

.text-xs {
  text-align: left;
  /* Assure que le texte est aligné à gauche */
  width: 100%;
  /* Permet au texte de prendre toute la largeur disponible */
}

.card-body .text-xs {
  text-align: left !important;
}

/* Style pour les valeurs numériques dans les cartes */
.card-body .h5 {
  font-size: 24px;
  /* Augmente la taille de la police pour les valeurs numériques */

  text-align: left;
  /* Confirme que le texte est aligné à gauche */
}
</style>