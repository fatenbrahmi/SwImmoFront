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
          <router-link to="/Annonces" class="nav-item nav-link">Mes Annonces</router-link>
        </div>
        <div class="d-flex align-items-center position-relative mx-2">


          
          <router-link to="/DeposerAnnonce" class="btn btn-info px-3 me-lg-4 d-none d-lg-flex">Déposer une Annonce</router-link>




    <img class="img-fluid me-lg-2" src="../Assets/profil.jpg" alt="Icon" style="width: 30px; height: 30px;">

  <div class="nav-item dropdown">
    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"></a>
    <div class="dropdown-menu rounded-0 m-0 position-absolute start-0">
      <router-link to="/profil" class="dropdown-item">Mon Profil</router-link>
      <router-link to="/Connexion" class="dropdown-item">Se connecter</router-link>
      <router-link to="/profil-list" class="dropdown-item">Mes alerts</router-link>
      <router-link to="/profil-list" class="dropdown-item">Mes favoris</router-link>
      <router-link to="/profil-list" class="dropdown-item">Se Déconnecter</router-link>
    </div>
  </div>
</div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'MyNavbar'
 
}
</script>


