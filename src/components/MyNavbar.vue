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
          <router-link to="/" class="nav-item nav-link" exact>Home</router-link>
          <router-link to="/Acheter" class="nav-item nav-link">Acheter</router-link>
          <router-link to="/Vendre" class="nav-item nav-link">Vendre</router-link>
          <router-link to="/Louer" class="nav-item nav-link">Louer</router-link>
          <router-link to="/Agent" class="nav-item nav-link">Agent</router-link>
        </div>
        <div class="d-flex align-items-center position-relative mx-2">


          <li class="nav-item pe-3">
  <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-bell"></i> </router-link>
</li>

<li class="nav-item pe-3">
  <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-heart"></i> </router-link>
</li>
          <router-link to="/DeposerAnnonce" class="btn btn-info px-3 me-lg-4 d-none d-lg-flex">Déposer une Annonce</router-link>



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
  <li><router-link to="/connexion" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> <span>Connexion</span></router-link></li>
  <li><router-link to="/Annonces" class="dropdown-item"><i class="fas fa-newspaper"></i> Mes Annonces</router-link></li>
  <li><router-link to="/deconnexion" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> <span>Se Déconnecter</span></router-link></li>

 
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
    color: #FFC107 !important; /* Couleur jaune de Bootstrap */
  }

</style>