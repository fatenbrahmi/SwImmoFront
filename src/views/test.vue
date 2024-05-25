<template>
   <div class="col-md-4">
      <button class="btn custom-button dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
         aria-expanded="false">
         Ville
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('Tunis')">Tunis</a></li>
         <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('Sousse')">Sousse</a></li>
         <li><a class="dropdown-item" href="#" @click.prevent="setTypeFilter('Monastir')">Monastir</a></li>
      </ul>
   </div>
</template>

<script></script>
<style></style>