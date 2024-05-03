<template>
    <div class="dashboard-overview">
      <h2>Vue d'ensemble du tableau de bord</h2>
      <div class="total-ads">
        <p>Nombre total d'annonces:</p>
        <span>{{ totalAds }}</span>
      </div>
      <div class="recent-ads">
        <h3>Annonces récemment ajoutées</h3>
        <ul>
          <li v-for="ad in recentAds" :key="ad.id">
            <h4>{{ ad.title }}</h4>
            <p>Agent: {{ ad.agentName }}</p>
            <p>Date: {{ ad.createdAt }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardOverview',
    data() {
      return {
        totalAds: 0,
        recentAds: [],
      };
    },
    mounted() {
      this.fetchTotalAds();
      this.fetchRecentAds();
    },
    methods: {
      async fetchTotalAds() {
        try {
          const response = await axios.get('/api/ads/count'); // Replace with your API endpoint
          const data = await response.data;
          this.totalAds = data.totalAds;
        } catch (error) {
          console.error('Error fetching total ads:', error);
        }
      },
      async fetchRecentAds() {
        try {
          const response = await axios.get('/api/ads/recent'); // Replace with your API endpoint
          const data = await response.data;
          this.recentAds = data.recentAds;
        } catch (error) {
          console.error('Error fetching recent ads:', error);
        }
      },
    },
  };
  </script>