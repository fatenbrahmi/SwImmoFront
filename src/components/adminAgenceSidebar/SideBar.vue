<template>
   <div class="sidebar" :style="{ width: sidebarWidth }">
      <h1>
         <span v-if="collapsed">
            <div></div>
            <div></div>
         </span>
      </h1>

      <SidebarLink to="/agenceDashboard" icon="fas fa-columns">Dashboard</SidebarLink>
      <br />
      <SidebarLink to="/agentsImmo" icon="fas fa-users">Mes agents</SidebarLink>
      <br />
      <SidebarLink to="/annoncesAgents" icon="fas fa-image">Annonces</SidebarLink>
      <br><br><br><br><br><br><br><br><br>
      <SidebarLink to="/Déconnexion" icon="fas fa-sign-out-alt">Déconnexion</SidebarLink>

      <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
         <i class="fas fa-angle-double-left"></i>
      </span>
   </div>
</template>

<script>
import SidebarLink from '@/components/Sidebar/SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
   components: { SidebarLink },
   setup() {
      return { collapsed, toggleSidebar, sidebarWidth }
   }
}
</script>

<style>
:root {
   --sidebar-bg-color: #4c658e;
   /* Light Teal Pastel */
   --sidebar-item-hover: #718bba;
   /* Hover color, slightly darker pastel teal */
   --sidebar-item-active: #6f84aa;
   /* Active color, darker blue pastel */
}

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
