<template>
  <CChartBar :data="data" />
</template>

<script setup>
import { CChartBar } from '@coreui/vue-chartjs';

const data = {
  labels: [
     'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
     'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ],
  datasets: [
     {
        label: 'Tunis',
        backgroundColor: '#A8DADC', // Teal clair
        data: [65, 59, 80, 81, 72, 88, 90, 95, 85, 78, 82, 89],
     },
     {
        label: 'Sousse',
        backgroundColor: '#FFD166', // Jaune clair
        data: [28, 48, 40, 19, 35, 46, 50, 55, 40, 32, 30, 45],
     },
     {
        label: 'Monastir',
        backgroundColor: '#A8E6CF', // Vert clair
        data: [30, 90, 40, 19, 44, 38, 35, 45, 32, 25, 29, 48],
     },
     {
        label: 'Djerba',
        backgroundColor: '#FFABAB', // Rose clair
        data: [30, 30, 60, 10, 25, 20, 35, 40, 25, 18, 22, 30],
     },
     {
        label: 'Nabeul',
        backgroundColor: '#D4A5A5', // Mauve clair
        data: [90, 30, 50, 10, 40, 35, 42, 48, 39, 30, 33, 40],
     },
  ],
};
</script>

