<template>
    <div class="blue-background">
      <div class="container">
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlueFrame',
    data() {
    return {
      message: `SWIMMO plateforme innovante dans le domaine de l'immobilier, offrant une expérience 
révolutionnaire tant pour les acheteurs que pour les vendeurs. 
Notre plateforme propose une interface intuitive et des fonctionnalités avancées pour 
simplifier la recherche et la vente de biens immobiliers. 
Grâce à nos outils complets, les utilisateurs peuvent comparer facilement les propriétés
filtrer les résultats selon leurs préférences et bénéficier d'analyses objectives
 pour prendre des décisions éclairées. 
Que vous cherchiez votre maison de rêve ou que vous souhaitiez vendre votre propriété 
notre plateforme est votre partenaire idéal dans votre parcours immobilier.`
    };
  }
  };
  </script>
  
  <style scoped>
  .blue-background {
    background-color: #065E90; /* Couleur bleue */
    padding: 150px; /* Espacement intérieur du cadre */
    border-radius: 0%; /* Coins arrondis du cadre */
    color: #fff; /* Couleur du texte */
  }
  .text-right {
  text-align: right; /* Alignement du texte à droite */
}
  </style>
  