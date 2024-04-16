<template>
    <div class="container">
        <div>
      <h1 style="font-size: 24px;">TOUS LES PROS 
        TOUS LES BIENS POUR TROUVER VOTRE NID !</h1>
    </div>
    <br>
    <br>
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6">
          <!-- Champ pour choisir une ville -->
          <div class="mb-3">
            <select class="form-select" id="ville">
              <option selected disabled>Choisissez une Ville pour la Recherche</option>
              
                >
              <!-- Options pour toutes les villes de Tunisie -->
              <option value="tunis">Tunis</option>
              <option value="Carthage">Carthage</option>
              <option value="Sidi Bou Said">Sidi Bou Said</option>
              <option value="Hammamet">Hammamet</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Sousse">Sousse</option>
              <option value="Hammam Sousse">Hammam Sousse</option>
              <option value="Monastir">Monastir</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Sidi bouzied">Sidi bouzied</option>
              <option value="zaghouan">Zaghouan</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Djeba">Djeba</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Kelibia">Kelibia</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Medinine">Medinine</option>
              <!-- Ajoutez d'autres options pour les autres villes ici -->
            </select>
              <!-- Options pour toutes les villes de Tunisie -->
              <!-- Ajoutez d'autres options pour les autres villes ici -->
            
          </div>
          <br>
          <br>
          <br>
          
          <!-- Bouton Rechercher -->
          <button class="btn btn-primary mr-4" style="width: 200px; height: 40px; border-radius: 20px;">Rechercher</button>
          <!-- Bouton Voir Annonces -->
          <button class="btn btn-warning" style="width: 200px; height: 40px; border-radius: 20px;">Voir Annonces</button>
          <br>
          <br>
          <br>
         <br>

          <!-- Texte juste après les boutons -->
          <div>
            <h1 style="font-size: 24px;text-decoration: underline">QUI SOMMES-NOUS ?</h1>
          <p class="mt-7 text-align: left;" style="color:black">SWIMMO plateforme innovante dans le domaine de l'immobilier, offrant une expérience révolutionnaire tant pour les acheteurs que pour les vendeurs. Notre plateforme propose une interface intuitive et des fonctionnalités avancées pour simplifier la recherche et la vente de biens immobiliers. Grâce à nos outils complets, les utilisateurs peuvent comparer facilement les propriétés, filtrer les résultats selon leurs préférences et bénéficier d'analyses objectives pour prendre des décisions éclairées. Que vous cherchiez votre maison de rêve ou que vous souhaitiez vendre votre propriété, notre plateforme est votre partenaire idéal dans votre parcours immobilier.</p>
          </div>
          <button class="btn btn-warning" style="width: 200px; height: 40px;border-radius: 20px;">Rejoingez Nous</button>

        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .Button {

  }
  .container {
    /* Background image */
    background-image: url('../Assets/accueil.png');
    /* Centrer l'image de fond */
    background-position: center;
    /* Mettre l'image de fond en plein écran */
    background-size: cover;
    /* Hauteur minimale pour afficher le contenu */
    min-height: 100vh;
  }
  </style>
  