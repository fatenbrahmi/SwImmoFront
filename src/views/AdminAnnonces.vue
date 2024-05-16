<template>

   <AdminNavbar />
   <SideBar />
   <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
   </div>
   <MyNavbar />
   <div id="content" class="content-container" > <!-- Modification de la marge à gauche -->
      <div class="content-container d-flex justify-content-end align-items-center">
         <div class="input-group rounded" style="max-width: 400px;">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
               aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
            </span>
         </div>
         
         <button type="button" class="btn btn-outline-primary mx-2">A vendre</button>
         <button type="button" class="btn btn-outline-warning">A louer</button>
      </div>
      <div class="container-xxl py-5">
         <div class="container">
            <div class="tab-content">
               <div id="tab-1" class="tab-pane fade show p-0 active">
                  <div class="row g-4">
                     <div class="col-lg-4 col-md-6">
                        <div class="property-item rounded overflow-hidden h-100">
                           <div class="position-relative overflow-hidden">
                              <a href=""><img class="img-fluid" src="../Assets/img/property-1.jpg" alt=""></a>

                              <div
                                 class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                 Appartment</div>
                           </div>
                           <div class="p-4 pb-0">
                              <h5 class="text-primary mb-3">299 000 DT</h5>
                              <small class="flex-fill text-center"><i
                                    class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                              <p>Description: Un Appartment à vendre, spacieux, contient...</p>
                           </div>
                        </div>
                     </div>

                     <!-- Annonce 2 -->
                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="property-item rounded overflow-hidden h-100">
                           <div class="position-relative overflow-hidden">
                              <a href=""><img class="img-fluid" src="../Assets/img/property-2.jpg" alt=""></a>

                              <div
                                 class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                 Villa</div>
                           </div>
                           <div class="p-4 pb-0">
                              <h5 class="text-primary mb-3">299 000 DT</h5>
                              <small class="flex-fill text-center "><i
                                    class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                              <p>Description: Une villa à vendre, spacieuse, contient...</p>
                           </div>
                        </div>
                     </div>

                     <!-- Annonce 3 -->
                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="property-item rounded overflow-hidden h-100">
                           <div class="position-relative overflow-hidden">
                              <a href=""><img class="img-fluid" src="../Assets/terr.jpg" alt=""></a>

                              <div
                                 class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                 Terrain</div>
                           </div>
                           <div class="p-4 pb-0">
                              <h5 class="text-primary mb-3">299 000 DT</h5>
                              <small class="flex-fill text-center "><i
                                    class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                              <p>Description: Une terrain à vendre...</p>
                           </div>
                        </div>
                     </div>

                     <!-- Annonce 4 -->
                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="property-item rounded overflow-hidden">
                           <div class="position-relative overflow-hidden">
                              <a href=""><img class="img-fluid" src="../Assets/img/property-4.jpg" alt=""></a>

                              <div
                                 class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                 Villa</div>
                           </div>
                           <div class="p-4 pb-0">
                              <h5 class="text-primary mb-3">299 000 DT</h5>
                              <small class="flex-fill text-center "><i
                                    class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                              <p>Description: Une villa à vendre, spacieuse, contient...</p>
                           </div>
                        </div>
                     </div>

                     <!-- Annonce 5 -->
                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="property-item rounded overflow-hidden">
                           <div class="position-relative overflow-hidden">
                              <a href=""><img class="img-fluid" src="../Assets/img/property-5.jpg" alt=""></a>

                              <div
                                 class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                 Maison</div>
                           </div>
                           <div class="p-4 pb-0">
                              <h5 class="text-primary mb-3">299 000 DT</h5>
                              <small class="flex-fill text-center "><i
                                    class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                              <p>Description: Un maison à vendre, spacieux, contient...</p>
                           </div>
                        </div>
                     </div>

                     <!-- Annonce 6 -->
                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="property-item rounded overflow-hidden">
                           <div class="position-relative overflow-hidden">
                              <a href=""><img class="img-fluid" src="../Assets/img/property-6.jpg" alt=""></a>

                              <div
                                 class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                 Maison</div>
                           </div>
                           <div class="p-4 pb-0">
                              <h5 class="text-primary mb-3">299 000 DT</h5>
                              <small class="flex-fill text-center "><i
                                    class="fa fa-ruler-combined text-primary me-2"></i>1000 m²</small>
                              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>Sfax 4.1 Km du centre</p>
                              <p>Description: Un maison à vendre, spacieux, contient...</p>
                           </div>
                        </div>
                     </div>

                     <div class="paging">
                        <a href="#" class="disabled">Previous</a>
                        <div class="page-square current">1</div>
                        <div class="page-square"> <a href="/page/2">2</a></div>
                        <div class="page-square"><a href="/page/3">3</a></div>
                        <div class="page-square"><a href="/page/4">4</a></div>
                        <div class="page-square"><a href="/page/5">5</a></div>
                        <a href="/page/2">Next</a>
                        <span class="paging-info">Page 1 of 51</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Property List End -->
   </div>
</template>


<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import SideBar from '@/components/Sidebar/SideBar.vue';
import { sidebarWidth } from '@/components/Sidebar/state'

export default {
   components: { AdminNavbar, SideBar },
   setup() {
      return { sidebarWidth }
   },
   
   
}
</script>

<style>
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

.breadcrumb-item+.breadcrumb-item::before {
   color: #DDDDDD;
}
.content-container {
   margin-left: 190px;
   /* Ajustez cette valeur en fonction de la largeur de votre sidebar */
   margin-top: 0;
   margin-right: 20px;
}
</style>
