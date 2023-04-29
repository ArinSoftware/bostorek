import axios from 'axios'

const state = {
  status: ''
}

const mutations = {
  SET_STATUS: (state, status) => {
    state.status = status
  }
}

const actions = {
  async register({ commit }, user) {
    commit('SET_STATUS', 'loading')

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', user)

      const data = response.data

      console.log('data===>', data)

      commit('SET_STATUS', 'success')
      return data
    } catch (error) {
      console.log('ERR===>', error)
      commit('SET_STATUS', 'error')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
