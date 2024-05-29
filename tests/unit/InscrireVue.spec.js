import { shallowMount } from '@vue/test-utils';
import SignUpView from '@/views/SignUpView.vue';
import axios from 'axios';
// Mock axios to intercept HTTP requests
jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('SignUpView.vue', () => {
  beforeAll(() => {
    // Mock the alert function
    global.alert = jest.fn();
  });
// Test the initial rendering of the component
  it('renders registration form', () => {
    const wrapper = shallowMount(SignUpView);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.find('input[type="file"]').exists()).toBe(true);
  });
// Test the registration function
  it('calls register API when form is submitted with correct data', async () => {
    const wrapper = shallowMount(SignUpView);
  // Set the user data
    await wrapper.setData({
      userData: {
        nom: 'Brahmi',
        prenom: 'Faten',
        email: 'brahmifaten999@gmail.com',
        telephone: '12345678',
        motDePasse: 'password123',
        Profil: 'Agent Immobilier',
        photoProfil: new File(['dummy content'], 'example.png', { type: 'image/png' }),
      },
    });
    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');
    // Check if the register API was called with the correct data
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/auth/register', expect.any(FormData));
  });
  // Test error handling in the registration function
  it('displays error message when registration API fails', async () => {
    // Simulate a failed API response
    axios.post.mockRejectedValue({ message: 'Internal Server Error' });
    const wrapper = shallowMount(SignUpView);
    // Set the user data
    await wrapper.setData({
      userData: {
        nom: 'Brahmi',
        prenom: 'Faten',
        email: 'brahmifaten999@gmail.com',
        telephone: '12345678',
        motDePasse: 'password123',
        Profil: 'Agent Immobilier',
        photoProfil: new File(['dummy content'], 'example.png', { type: 'image/png' }),
      },
    });
    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Check if the alert function was called with the correct error message
    expect(global.alert).toHaveBeenCalledWith("Une erreur s'est produite lors de l'inscription : Internal Server Error");
  });
});