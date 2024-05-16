<template>
  <CChartPie :data="data" />
</template>

<script setup>
import { CChartPie } from '@coreui/vue-chartjs';

const data = {
  labels: ['Maison', 'Appartement', 'Villa', 'Terrain'], 


  datasets: [
     {
        backgroundColor: ['#A8DADC', '#FFD166', '#A8E6CF', '#FFABAB', '#D4A5A5'], // Specified pastel colors
        data: [80, 20, 40, 10, 5], // Adjust data to match the number of labels
     },
  ],
};
</script>

  