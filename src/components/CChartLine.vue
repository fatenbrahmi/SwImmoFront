<script setup>
import { CChartLine } from '@coreui/vue-chartjs'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: 'rgba(228,102,81,0.9)',
      borderColor: 'rgba(228,102,81,1)',
      data: [30, 39, 10, 50, 30, 70],
    },
    {
      label: 'Data Two',
      backgroundColor: 'rgba(0,216,255,0.9)',
      borderColor: 'rgba(0,216,255,1)',
      data: [39, 80, 40, 35, 40, 20],
    },
  ],
}
</script>

<template>
  <CChartLine :data="data" />
</template>
