<template>
   <div>
      <CChartBar :data="chartData" />
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CChartBar } from '@coreui/vue-chartjs';
import axios from 'axios';

const chartData = ref({
   labels: [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
   ],
   datasets: []
});

const fetchData = async () => {
   try {
      const response = await axios.get('http://localhost:3000/annonces/monthly-stats');
      const data = response.data;
      const cities = [...new Set(data.map(item => item.city))];
      const datasets = cities.map(city => ({
         label: city,
         backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
         data: Array(12).fill(0) // Initialize array for months
      }));

      data.forEach(item => {
         const cityIndex = cities.indexOf(item.city);
         const monthIndex = parseInt(item.month) - 1;
         datasets[cityIndex].data[monthIndex] = item.count;
      });

      chartData.value.datasets = datasets;
   } catch (error) {
      console.error('Error fetching data for bar chart:', error);
   }
};

onMounted(fetchData);
</script>
