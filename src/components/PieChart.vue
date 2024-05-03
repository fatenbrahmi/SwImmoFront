<script setup>
import { CChartPie } from '@coreui/vue-chartjs'

const data = {
  labels: ['Maison', 'Appartement', 'Terrain', 'Autres'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [80, 20, 40, 10],
    },
  ],
}
</script>

<template>
  <CChartPie :data="data" />
</template>
  