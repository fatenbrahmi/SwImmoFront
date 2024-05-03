<script setup>
import { CChartBar } from '@coreui/vue-chartjs';

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Labels pour les trimestres
  datasets: [
    {
      label: 'Tunis', // Nom du premier quartier
      backgroundColor: '#36A2EB', // Couleur de fond pour le premier quartier
      data: [65, 59, 80, 81], // Données de vente pour le premier quartier par trimestre
    },
    {
      label: 'Sousse', // Nom du deuxième quartier
      backgroundColor: '#FFCE56', // Couleur de fond pour le deuxième quartier
      data: [28, 48, 40, 19], // Données de vente pour le deuxième quartier par trimestre
    },
    {
      label: 'Monastir', // Nom du deuxième quartier
      backgroundColor: '#1cc88a', // Couleur de fond pour le deuxième quartier
      data: [30, 90, 40, 19], // Données de vente pour le deuxième quartier par trimestre
    },
    {
      label: 'Djerba', // Nom du deuxième quartier
      backgroundColor: '#f6c23e', // Couleur de fond pour le deuxième quartier
      data: [30, 30, 60, 10], // Données de vente pour le deuxième quartier par trimestre
    },
    {
      label: 'Nabeul', // Nom du deuxième quartier
      backgroundColor: '#6f42c1', // Couleur de fond pour le deuxième quartier
      data: [90, 30, 50, 10], // Données de vente pour le deuxième quartier par trimestre
    },
    // Ajoutez plus de datasets pour d'autres quartiers si nécessaire
  ],
};
</script>

<template>
  <CChartBar :data="data" />
</template>
