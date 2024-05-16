<template>
    <div class="container-fluid nav-bar bg-transparent">
       <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <router-link to="/" class="navbar-brand d-flex align-items-center text-center">
             <img class="img-fluid" src="../Assets/swimmo.png" alt="Icon" style="width: 70px; height: 70px;">
          </router-link>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
             <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
             <div class="navbar-nav me-auto">
                <router-link to="/" class="nav-item nav-link" exact>Accueil</router-link>
                
             </div>
             <div class="d-flex align-items-center position-relative mx-2">
 
 
                <li class="nav-item pe-3">
                   <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-bell"></i> </router-link>
                </li>
 
                <li class="nav-item pe-3">
                   <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-heart"></i> </router-link>
                </li>
                
 
 
 
                <li class="nav-item dropdown pe-3">
                   <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                      <i class="fas fa-user"></i> <!-- Icône du profil -->
                      <span class="d-none d-md-block dropdown-toggle ps-2">Espace Admin</span>
                   </a>
 
                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                      
                      
 
                      <li><router-link to="/profil" class="dropdown-item"><i class="fas fa-user"></i> <span>Mon
                               Profil</span></router-link></li>
                      <li><router-link to="/connexion" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> <span>
                               A propos</span></router-link></li>
                      <li> <router-link to="/Annonces" class="dropdown-item"><i class="fas fa-newspaper"></i> Paramètres</router-link></li>
                      <li><router-link to="/deconnexion" class="dropdown-item"><i class="fas fa-sign-out-alt"></i>
                            <span>Se Déconnecter</span></router-link></li>
                   </ul>
                </li>
 
             </div>
          </div>
       </nav>
    </div>
 </template>
 
 
 <script>
 export default {
    name: 'MyNavbar',
 
 
 }
 </script>
 <style scoped>
 .nav-item {
    list-style: none;
    margin-right: 10px;
 }
 
 .nav-link .fas:hover {
    color: #73aac3 !important;
 }
 .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
 }
 </style>