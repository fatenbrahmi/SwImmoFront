<template>
    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
  <a class="navbar-brand" href="#">
    <img class="img-fluid" src="../Assets/swimmo.png" alt="Icon" style="width: 70px; height: 70px;">
    
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav d-flex align-items-center"> <!-- Added d-flex and align-items-center classes -->
      
      <li class="nav-item">
        <router-link to="/DashboardAgent" class="nav-item nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Events" class="nav-item nav-link">Events</router-link>
      </li>
       <!-- Nav Item - Alerts -->
                          <li class="nav-item">
                          <router-link to="/Alerts" class="nav-link">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                              </router-link>
                              </li>         
      <li class="nav-item">
  <router-link to="/Messages" class="nav-link">
    <i class="fas fa-envelope"></i> 
  </router-link>
</li>


<li class="nav-item dropdown pe-3">
  <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
    <i class="fas fa-user"></i> <!-- Icône du profil -->
    <span class="d-none d-md-block dropdown-toggle ps-2">Join Us Now</span>
  </a>

  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
    <li class="dropdown-header">
      <i class="fas fa-user"></i>
    </li>
    <li><hr class="dropdown-divider"></li>

    <li><router-link to="/profil" class="dropdown-item"><i class="fas fa-user"></i> <span>My Profile</span></router-link></li>
    <li><router-link to="/connexion" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> <span>Se connecter</span></router-link></li>
    <li><router-link to="/settings" class="dropdown-item"><i class="fas fa-cog"></i> Paramètres</router-link></li>
    <li><router-link to="/deconnexion" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> <span>Se Déconnecter</span></router-link></li>
  </ul>
</li>


     

    </ul>
  </div>
</nav>

  </template>
  
  <script>
  export default {
    name: 'NavAgent',
    mounted() {
      this.updateNavbarClass();
  
      // Ajouter un écouteur pour gérer les mises à jour du scroll
      window.addEventListener('scroll', this.updateNavbarClass);
    },
    methods: {
      updateNavbarClass() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
          if (window.scrollY > 45) {
            navbar.classList.add('sticky-top');
          } else {
            navbar.classList.remove('sticky-top');
          }
        }
      }
    },
    // Supprimer l'écouteur d'événement lorsque le composant est détruit
    beforeUnmount() {
      window.removeEventListener('scroll', this.updateNavbarClass);
    }
  }
  </script>
  
  
