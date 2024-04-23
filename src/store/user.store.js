// store/user.js

import Axios from '../services/axios.service'

const state = {
  user: null,
  isAuthenticated: false
}

const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isAuthenticated
}

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await Axios.post('/auth/login', credentials)
      const { user, token } = response.data
      commit('setUser', user)
      commit('setToken', token)
      return user
    } catch (error) {
      throw error
    }
  },
  async logout({ commit }) {
    commit('setUser', null)
    commit('setToken', null)
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
    state.isAuthenticated = !!user
  },
  setToken(state, token) {
    Axios.setToken(token)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
