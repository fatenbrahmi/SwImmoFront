<template>
  <div>
    <NavAgent/>
    
    <div class="container-fluid header bg-white p-0 background-image">
      <br><br><br><br><br><br>
      <!-- Header Start -->
      <div class="col-md-6 p-5 mt-lg-5">
        
        <router-link to="/Annonces" style="font-size: 1.25rem; padding: 1rem 2rem;" class="btn btn-warning">Create your events</router-link>
    
        <li class="nav-item">
          <div class="input-group rounded">
<input type="text" class="form-control rounded-pill" placeholder="Search" aria-label="Search" style="width: 500px; height: 50px;">

<div class="input-group-append">
  <span class="input-group-text bg-transparent border-0" style="margin-top: 10px;"> <!-- Ajoutez une marge supérieure -->
    <i class="fas fa-search"></i>
  </span>
</div>
</div>
</li>



      </div>
      
    </div>
  </div>
</template>

<script>
import NavAgent from '@/components/NavAgent.vue';

export default {
  components: {
    NavAgent,
  },
  name: 'MyAgent',
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 45) {
        document.querySelector('.navbar').classList.add('sticky-top');
      } else {
        document.querySelector('.navbar').classList.remove('sticky-top');
      }
    });
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../Assets/event.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Utilise la hauteur complète de la fenêtre */
}
.input-group-text {
position: absolute;
right: 0;
z-index: 3;
pointer-events: none;
border: none;
background: transparent;
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
  transition: 0.5s;
}

</style>
