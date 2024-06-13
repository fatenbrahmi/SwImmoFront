import { shallowMount } from '@vue/test-utils';
import AnnonceView from '@/views/AnnonceView.vue';
import axios from 'axios'; // Importez axios
import { mockAnnonces } from '../unit/mockData'; // Assurez-vous d'importer mockAnnonces

// Mockez axios avant de l'utiliser dans vos tests
jest.mock('axios');

describe('AnnonceView.vue', () => {
  it('fetches annonces on mount', async () => {
    // Simulez la réponse de l'API pour les annonces
    axios.get.mockResolvedValueOnce({ data: mockAnnonces });
    
    // Montez le composant
    const wrapper = shallowMount(AnnonceView);
    await wrapper.vm.$nextTick();

    // Assurez-vous que les annonces sont récupérées
    expect(wrapper.vm.annonces.length).toBeGreaterThan(0);
  });

  it('filters annonces based on search query', async () => {
    // Simulez la réponse de l'API pour les annonces
    axios.get.mockResolvedValueOnce({ data: mockAnnonces });

    // Montez le composant
    const wrapper = shallowMount(AnnonceView);
    await wrapper.vm.$nextTick();

    // Assurez-vous que les annonces sont filtrées correctement en fonction de la recherche
    // Ajoutez ici vos assertions de filtrage
  });

  it('submits a new annonce', async () => {
    // Simulez la réponse de l'API pour les annonces
    axios.get.mockResolvedValueOnce({ data: mockAnnonces });

    // Montez le composant
    const wrapper = shallowMount(AnnonceView);
    await wrapper.vm.$nextTick();

    // Assurez-vous que le formulaire d'annonce soumis est correctement traité
    // Ajoutez ici vos assertions de soumission d'annonce
  });
});


