<template>
  <div class="container-fluid nav-bar bg-transparent">
    <nav class="navbar fixed-top navbar-expand-lg bg-white navbar-light py-0 px-4">
      <router-link to="/" class="navbar-brand d-flex align-items-center text-center">
        <img class="img-fluid" src="../Assets/swimmo.png" alt="Icon" style="width: 70px; height: 70px;">
      </router-link>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav me-auto">
          <router-link to="/" class="nav-item nav-link" exact>Accueil</router-link>
          <router-link to="/Acheter" class="nav-item nav-link">Acheter</router-link>
          <router-link to="/Louer" class="nav-item nav-link">Louer</router-link>
          <router-link to="/Agent" class="nav-item nav-link">Agent</router-link>
        </div>
        <div class="d-flex align-items-center position-relative mx-2">
          <li class="nav-item pe-3">
            <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-bell"></i></router-link>
          </li>
          <li class="nav-item pe-3">
            <router-link to="/favoriteList" class="nav-item nav-link"><i class="fas fa-heart"></i></router-link>
          </li>
          <li class="nav-item dropdown pe-3">
            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <i class="fas fa-user"></i> <!-- Icône du profil -->
              <span class="d-none d-md-block dropdown-toggle ps-2">Rejoignez nous</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li><router-link to="/profil" class="dropdown-item"><i class="fas fa-user"></i> Mon profil</router-link>
              </li>
              <li><router-link to="/connexion" class="dropdown-item"><i class="fas fa-sign-in-alt"></i>
                  Connexion</router-link></li>
              <li><router-link to="/Annonces" class="dropdown-item"><i class="fas fa-newspaper"></i> Mes
                  Annonces</router-link></li>
              <li>
                <a class="dropdown-item" @click="logout">
                  <i class="fas fa-sign-out-alt"></i> Se Déconnecter
                </a>
              </li>

            </ul>
          </li>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import router from '../router';  // Ensure you import your router

export default {
  name: 'MyNavbar',

  methods: {
    async logout() {
      // Clear all relevant local storage items
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData'); // Assuming you store user data here based on your router code

      // Print to console for debugging (you can remove this later)
      console.log("User logged out");

      // Redirect user to the login page
      await router.push({ name: 'ConnexionView' });
    }
  }
}
</script>

<style scoped>
.fa-heart {
  color: rgb(56, 55, 55)
}
body {
  padding-top: 80px;
  /* Adjust based on the height of your navbar */
}

.navbar.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1020;
  /* Higher z-index to ensure the navbar is above other content */
}

.nav-item {
  list-style: none;
  margin-right: 10px;
}

.nav-link .fas:hover {
  color: #FFC107 !important;
  /* Couleur jaune de Bootstrap */
}
</style>
