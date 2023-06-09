import axios from 'axios'

const state = {
  user: null,
  registerError: null,
  registering: false,
  loginError: null,
  loggingIn: false
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
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
    commit('setRegisterError', null)
    commit('setRegistering', true)

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', {
        username,
        email,
        password
      })

      if (response.status === 201) {
        const { token } = response.data
        // Store the token in local storage or a cookie for future use
        localStorage.setItem('token', token)
        commit('setRegistering', false)
      } else {
        const { error } = response.data
        throw new Error(error)
      }
    } catch (error) {
      commit('setRegistering', false)
      commit('setRegisterError', error.response.data.message)
    }
  },

  async login({ commit }, { email, password }) {
    commit('setLoginError', null)
    commit('setLoggingIn', true)

    console.log('login - auth.js')

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/login',
        {
          email,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
            // Add any other headers you need
          },
          withCredentials: true
        }
      )

      if (response.status === 200) {
        const user = response.data.user // Assuming the backend response includes the user object
        commit('setUser', user) // Store the user details in the Vuex store
      } else {
        const { error } = response.data
        throw new Error(error)
      }
    } catch (error) {
      commit('setLoggingIn', false)
      commit('setLoginError', error.response.data.error)
    }
  },

  async logout({ commit }) {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/auth/logout', {
        headers: {
          'Content-Type': 'application/json'
          // Add any other headers you need
        },
        withCredentials: true
      })

      if (response.status === 200) {
        commit('setUser', null) // Clear the user details in the Vuex store
      } else {
        const { error } = response.data
        throw new Error(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  currentUser: (state) => state.user,
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
