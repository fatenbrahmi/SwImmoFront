// mockData.js

export const mockAnnonces = [
    { 
        title: 'Annonce 1', 
        description: 'Description 1', 
        price: 100,
        image: 'image1.jpg',
        area: 120,
        rooms: 3,
        city: 'Paris',
        type: 'Appartement',
        status: 'Vendre',
      },
      { 
        title: 'Annonce 2', 
        description: 'Description 2', 
        price: 200,
        image: 'image2.jpg',
        area: 150,
        rooms: 4,
        city: 'Lyon',
        type: 'Maison',
        status: 'Louer',
      },
  ];
  export const mockUsers = [
    { 
      _id: '1',
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@example.com',
      motDePasse: 'password123',
      telephone: '1234567890',
      Profil: 'internaute',
      ville: 'Paris'
    },
    { 
      _id: '2',
      nom: 'Smith',
      prenom: 'Jane',
      email: 'jane.smith@example.com',
      motDePasse: 'password456',
      telephone: '9876543210',
      Profil: 'agentImmobilier',
      ville: 'Lyon'
    },
    // Ajoutez d'autres utilisateurs selon vos besoins
  ];