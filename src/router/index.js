import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinUs from '../views/JoinUs.vue' 
import profilView from '../views/profilView.vue' 
import InscrireView from '@/views/InscrireView.vue' 
import AcheterView from '@/views/AcheterView.vue' 
import LouerView from '@/views/LouerView.vue' 
import ContactView from '@/views/ContactView.vue'
import resetpwdView from '@/views/resetpwdView.vue'
import AnnonceView from '@/views/AnnonceView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profilView',
    component: profilView
  },
  {
    path: '/Annonces',
    name: 'AnnonceView',
    component:AnnonceView
  },
  {
    path: '/ProfilConnexion',
    name: 'JoinUs',
    component: JoinUs
  },
  
  {
    path: '/register',
    name: 'InscrireView',
    component: InscrireView
  },
  {
    path: '/resetpwd',
    name: 'resetpwdView',
    component: resetpwdView
  },
  {
    path: '/Acheter', // Définissez le chemin de la route
    name: 'AcheterView', // Donnez un nom à votre route
    component: AcheterView // Associez le chemin à votre composant AcheterView
  },
  
  {
    path: '/Louer', // Définissez le chemin de la route
    name: 'LouerView', // Donnez un nom à votre route
    component: LouerView // Associez le chemin à votre composant AcheterView
  },
  {
    path: '/Contact', // Définissez le chemin de la route
    name: 'ContactView', // Donnez un nom à votre route
    component: ContactView // Associez le chemin à votre composant AcheterView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
