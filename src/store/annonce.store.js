import Vue from 'vue'
import Vuex from 'vuex'
import { annonceService } from '@/services/annonce.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    annonces: []
  },
  mutations: {
    setAnnonces(state, annonces) {
      state.annonces = annonces
    },
    addAnnonce(state, nouvelleAnnonce) {
      state.annonces.push(nouvelleAnnonce)
    },
    updateAnnonce(state, annonceModifiee) {
      const index = state.annonces.findIndex(annonce => annonce.id === annonceModifiee.id)
      if (index !== -1) {
        Vue.set(state.annonces, index, annonceModifiee)
      }
    },
    deleteAnnonce(state, id) {
      state.annonces = state.annonces.filter(annonce => annonce.id !== id)
    }
  },
  actions: {
    async fetchAnnonces({ commit }) {
      try {
        const response = await annonceService.getAnnonces()
        commit('setAnnonces', response.data)
      } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error)
      }
    },
    async createAnnonce({ commit }, annonceData) {
      try {
        const response = await annonceService.createAnnonce(annonceData)
        commit('addAnnonce', response.data)
      } catch (error) {
        console.error('Erreur lors de la création de l\'annonce:', error)
      }
    },
    async updateAnnonce({ commit }, { id, annonceData }) {
      try {
        const response = await annonceService.updateAnnonce(id, annonceData)
        commit('updateAnnonce', response.data)
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'annonce:', error)
      }
    },
    async deleteAnnonce({ commit }, id) {
      try {
        await annonceService.deleteAnnonce(id)
        commit('deleteAnnonce', id)
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'annonce:', error)
      }
    }
  },
  getters: {
    getAnnonceById: (state) => (id) => {
      return state.annonces.find(annonce => annonce.id === id)
    }
  }
})
