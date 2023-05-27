import axios from 'axios'

const state = {
  registerError: null,
  registering: false,
  loginError: null,
  loggingIn: false
}

const mutations = {
  setRegisterError(state, error) {
    state.registerError = error
  },
  setRegistering(state, isRegistering) {
    state.registering = isRegistering
  },
  setLoginError(state, error) {
    state.loginError = error
  },
  setLoggingIn(state, isLoggingIn) {
    state.loggingIn = isLoggingIn
  }
}

const actions = {
  async register({ commit }, { username, email, password }) {
    console.log('action register')

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
      commit('setRegisterError', error.response.data.error.errors)
    }
  },

  async login({ commit }, { email, password }) {
    commit('setLoginError', null)
    commit('setLoggingIn', true)

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,
        password
      })

      if (response.status === 200) {
        // Handle successful login
      } else {
        const { error } = response.data
        throw new Error(error)
      }
    } catch (error) {
      commit('setLoggingIn', false)
      commit('setLoginError', error.response.data.error)
    }
  }
}

const getters = {
  registerError: (state) => state.registerError,
  isRegistering: (state) => state.registering,
  loginError: (state) => state.loginError,
  isLoggingIn: (state) => state.loggingIn
}

export default {
  namespaced: true, // Add the namespaced property
  state,
  mutations,
  actions,
  getters
}
