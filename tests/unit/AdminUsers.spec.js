import { shallowMount } from '@vue/test-utils';
import AdminUtilisateurView from '@/views/AdminUtilisateurs.vue';
import axios from 'axios';
import { mockUsers } from './mockData';

jest.mock('axios');

describe('AdminUtilisateurs.vue', () => {
  it('fetches users on mount', async () => {
    axios.get.mockResolvedValueOnce({ data: mockUsers });
    const wrapper = shallowMount(AdminUtilisateurView);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.users.length).toBeGreaterThan(0);
  });

  

  
});



