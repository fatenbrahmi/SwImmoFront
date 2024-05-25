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
                  <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-bell"></i></router-link>
               </li>
               <li class="nav-item pe-3">
                  <router-link to="/profil-list" class="nav-item nav-link"><i class="fas fa-heart"></i></router-link>
               </li>
               <li class="nav-item dropdown pe-3">
                  <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                     <i class="fas fa-user"></i> <!-- Profile icon -->
                     <span class="d-none d-md-block dropdown-toggle ps-2">Espace Admin</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                     <li><router-link to="/AdminProfile" class="dropdown-item"><i class="fas fa-user"></i> Mon
                           Profil</router-link></li>
                     <li><router-link to="/Apropos" class="dropdown-item"><i class="fas fa-sign-in-alt"></i> A
                           propos</router-link></li>
                     <li><router-link to="/Paramètres" class="dropdown-item"><i class="fas fa-newspaper"></i>
                           Paramètres</router-link></li>
                     <li><a class="dropdown-item" @click="logout"><i class="fas fa-sign-out-alt"></i> Se Déconnecter</a>
                        
                     </li>
                  </ul>
               </li>
            </div>
         </div>
      </nav>
   </div>
</template>

<script>
import axios from 'axios';  // Import axios directly

export default {
   name: 'AdminNavbar',
   methods: {
      logout() {
         console.log('Logout method called');
         axios.post('http://localhost:3000/auth/logout')
            .then(response => {
               console.log('Logout successful:', response);
               localStorage.removeItem('token');
               this.$router.push('/Connexion');
            })
            .catch(error => {
               console.error('Erreur lors de la déconnexion:', error);
            });
      }



   }
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
