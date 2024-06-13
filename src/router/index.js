import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue' 
import ConnexionView from '../views/ConnexionView.vue'
import ResetPassword from '@/views/ResetPassword'
import profilView from '../views/profilView.vue' 
import ContactView from '@/views/ContactView.vue'
import AcheterView from '@/views/AcheterView.vue' 
import LouerView from '@/views/LouerView.vue'
import AnnonceView from '@/views/AnnonceView.vue'
import DeposerAnnonce from '@/views/DeposerAnnonce.vue'
import agenceDashboard from '@/views/AdminAgence/agenceDashboard'
import annoncesAgents from '@/views/AdminAgence/annoncesAgents'
import agentsImmo from '@/views/AdminAgence/agentsImmo.vue';
import EventsView from '@/views/EventsView.vue'
//Admin interfaces
import AdminAnnonces from '@/views/AdminAnnonces.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import AdminUtilisateurs from '@/views/AdminUtilisateurs.vue'
import AdminProfile from '@/views/AdminProfile';
import favoriteList from '@/views/favoriteList';





const routes = [
  //routes pour ces vues ne spécifient aucune restriction, ce qui signifie qu'elles sont déjà accessibles par tous les utilisateurs, même non connectés.
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  { path: '/SignUp', name: 'SignUpView', component: SignUpView },
  { path: '/Connexion', name: 'ConnexionView', component: ConnexionView },
  { path: '/reset-password/:token', name: 'ResetPassword', component: ResetPassword },
  { path: '/favoriteList', name: 'favoriteList', component: favoriteList },
  //routes avec des restrictions à d'autres pages à l'avenir, vous pourriez ajouter une métadonnée 'roles' qui inclut les rôles(profil)
  { path: '/profil', name: 'ProfilView', component: profilView, meta: { requiresAuth: true, roles: ['agentImmobilier', 'internaute', 'delegue','superAdmin'] } },
  { path: '/Acheter', name: 'AcheterView', component: AcheterView, meta: { requiresAuth: true, roles:['superAdmin', 'agentImmobilier','internaute','delegue','adminAgence']} },
  { path: '/Louer', name: 'LouerView', component: LouerView, meta: { requiresAuth: true, roles:['superAdmin', 'agentImmobilier','internaute','delegue','adminAgence']}  },
  { path: '/DeposerAnnonce', name: 'DeposerAnnonce', component: DeposerAnnonce , meta: { requiresAuth: true, roles: ['agentImmobilier','delegue','adminAgence','superAdmin'] }},
  { path: '/profil', name: 'ProfilView', component: profilView, meta: { requiresAuth: true, roles: ['agentImmobilier', 'internaute', 'delegue'] } },
  { path: '/Acheter', name: 'AcheterView', component: AcheterView, meta: { requiresAuth: false, roles:['superAdmin', 'agentImmobilier','internaute','delegue','adminAgence']} },
  { path: '/Louer', name: 'LouerView', component: LouerView, meta: { requiresAuth: false, roles:['superAdmin', 'agentImmobilier','internaute','delegue','adminAgence']}  },
  { path: '/DeposerAnnonce', name: 'DeposerAnnonce', component: DeposerAnnonce , meta: { requiresAuth: true, roles: ['agentImmobilier','delegue','adminAgence'] }},
  { path: '/Contact', name: 'ContactView', component: ContactView },
  //Admins agences 
  { path: '/agenceDashboard', name: 'agenceDashboard', component: agenceDashboard, meta: { requiresAuth: true, roles: ['adminAgence']} },
  { path: '/annoncesAgents', name: 'agentsAnnonces', component: annoncesAgents, meta: { requiresAuth: true, roles: ['adminAgence'] } },
  { path: '/agentsImmo', name: 'agentsImmo', component: agentsImmo, meta: { requiresAuth: true, roles: ['adminAgence'] } },
  //Super admin
  { path: '/AdminAnnonces', name: 'AdminAnnonces', component: AdminAnnonces, meta: { requiresAuth: true, role: 'superAdmin' } },
  { path: '/AdminDashboard', name: 'AdminDashboard', component: AdminDashboard, meta: { requiresAuth: true, role: 'superAdmin' } },
  { path: '/AdminUtilisateurs', name: 'AdminUtilisateurs', component: AdminUtilisateurs, meta: { requiresAuth: true, role: 'superAdmin' } },
  { path: '/AdminProfile', name: 'AdminProfile', component: AdminProfile, meta: { requiresAuth: true, role: 'superAdmin' } },  

  { path: '/Annonces', name: 'AnnonceView', component: AnnonceView, meta: { requiresAuth: true, roles: ['superAdmin', 'agentImmobilier','internaute','delegue'] } },
  { path: '/Events', name: 'EventsView', component: EventsView, meta: { requiresAuth: true, roles:['superAdmin','adminAgence']} },  
  {
    path: '/Annonces/:id',
    name: 'AnnonceDetail',
    component: () => import('@/views/AnnonceDetail.vue'),
    props: true
  }
  
];
// Create and configure the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});


//1. Navigation guard: This function runs before every route change.
router.beforeEach((to, from, next) => {
  //2. Retrieve user data from localStorage and parse it to an object for every route change.
  const user = JSON.parse(localStorage.getItem('userData'));
  //3. Output the user's profile type to the console for debugging.
  console.log(user?.Profil);

  //4. Check if the target route requires authentication by looking for 'requiresAuth' in meta data.
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //5. If there is no user data (i.e., the user is not logged in),
    if (!user) {
      //6. Redirect the user to the 'ConnexionView' route for them to log in.
      next({ name: 'ConnexionView' });
    } else if (
      //7. Check if the route has a specific role requirement that doesn't match the user's profile.
      to.matched.some(record => record.meta.role && record.meta.role !== user.Profil)) {
      //7. If the role doesn't match, redirect to the Home page.
      next({ name: 'Home' });
    } else {
      //8. If the user is logged in and their role matches, or if no specific role is required, continue to the target route.
      next();
    }
  } else {
    //9. If the route does not require authentication, proceed without any checks.
    next();
  }
});


export default router;