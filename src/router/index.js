import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import profilView from '../views/profilView.vue' 

import AcheterView from '@/views/AcheterView.vue' 
import LouerView from '@/views/LouerView.vue' 
import ContactView from '@/views/ContactView.vue'
import AnnonceView from '@/views/AnnonceView.vue'
import DeposerAnnonce from '@/views/DeposerAnnonce.vue'

import ConnexionView from '../views/ConnexionView.vue'

import AgentView from '@/views/AgentView.vue'
import DashboardAgent from '@/views/DashboardAgent.vue'
import AnnonceAgent from '@/views/AnnonceAgent.vue'
import EventsView from '@/views/EventsView.vue'
import SignUpView from '@/views/SignUpView.vue'

//Admin interfaces
import AdminAnnonces from '@/views/AdminAnnonces.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import AdminUtilisateurs from '@/views/AdminUtilisateurs.vue'
import AdminProfile from '@/views/AdminProfile';
import ResetPassword from '@/views/ResetPassword'


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
    component: AnnonceView
  },
  {
    path: '/SignUp',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/DashboardAgent',
    name: 'DashboardAgent',
    component: DashboardAgent
  },
  {
    path: '/Events',
    name: 'EventsView',
    component: EventsView
  },
  {
    path: '/AnnonceAgent',
    name: 'AnnonceAgent',
    component: AnnonceAgent
  },



  {
    path: '/Connexion',
    name: 'ConnexionView',
    component: ConnexionView
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
  {
    path: '/DeposerAnnonce',
    name: 'DeposerAnnoce',
    component: DeposerAnnonce
  },
  {
    path: '/Agent',
    name: 'AgentView',
    component: AgentView
  },
  // coté Super admin
  {
    path: '/AdminAnnonces',
    name: 'AdminAnnonces',
    component: AdminAnnonces
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/AdminUtilisateurs',
    name: 'AdminUtilisateurs',
    component: AdminUtilisateurs
  },
  {
    path: '/AdminProfile',
    name: 'AdminProfile',
    component: AdminProfile
  },
 {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;