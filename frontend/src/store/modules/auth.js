// store/modules/auth.js

import axios from 'axios'

const state = {
  registerError: null,
  registering: false
}

const mutations = {
  setRegisterError(state, error) {
    state.registerError = error
  },
  setRegistering(state, isRegistering) {
    state.registering = isRegistering
  }
}

const actions = {
  async register({ commit }, { username, email, password }) {
    commit('setRegisterError', null)
    commit('setRegistering', true)

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', {
        username,
        email,
        password
      })

      if (response.status === 201) {
        commit('setRegistering', false)
      } else {
        const { error } = response.data
        throw new Error(error)
      }
    } catch (error) {
      commit('setRegistering', false)
      commit('setRegisterError', error.message)
    }
  }
}

const getters = {
  registerError: (state) => state.registerError,
  isRegistering: (state) => state.registering
}

export default {
  state,
  mutations,
  actions,
  getters
}
