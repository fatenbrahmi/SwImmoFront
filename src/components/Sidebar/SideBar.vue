<template>
   <div class="sidebar" :style="{ width: sidebarWidth }">
      <h1>
         <span v-if="collapsed">
            <div></div>
            <div></div>
         </span>

      </h1>

      <SidebarLink to="/AdminDashboard" icon="fas fa-columns">Dashboard</SidebarLink>
      <br />
      <SidebarLink to="/AdminUtilisateurs" icon="fas fa-users">Utilisateurs</SidebarLink>
      <br />
      <SidebarLink to="/AdminAnnonces" icon="fas fa-image">Annonces</SidebarLink>
      <br />
      <SidebarLink to="/AdminAgents" icon="fas fa-user-tie">Agences</SidebarLink>
      <br><br><br><br><br><br><br><br><br>
      <SidebarLink to="/Déconnexion" icon="fas fa-sign-out-alt">Déconnexion</SidebarLink>


      <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
         <i class="fas fa-angle-double-left" />
      </span>
   </div>
</template>
 
 <script>
 import SidebarLink from '@/components/Sidebar/SidebarLink.vue'
 import { collapsed, toggleSidebar, sidebarWidth } from './state'
 
 export default {
    props: {},
    components: { SidebarLink },
    setup() {
       return { collapsed, toggleSidebar, sidebarWidth }
    }
 }
 </script>
 
 
 
 <style>
 :root {
    --sidebar-bg-color: #2d6078; /* Light Teal Pastel */
    --sidebar-item-hover: #508198; /* Hover color, slightly darker pastel teal */
    --sidebar-item-active: #6b97af; /* Active color, darker blue pastel */
 }
 
 </style>
 
 <style scoped>
 .sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
 
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
 
    transition: 0.3s ease;
 
    display: flex;
    flex-direction: column;
 }
 
 .sidebar h1 {
    height: 2.5em;
 }
 
 .collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
 
    color: rgba(255, 255, 255, 0.7);
 
    transition: 0.2s linear;
 }
 
 .rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
 }
 
 </style>