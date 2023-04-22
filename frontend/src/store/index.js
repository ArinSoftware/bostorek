import { createStore } from 'vuex'

// Create a new store instance with initial state
const store = createStore({
  state: {
    books: []
  },
  mutations: {
    setBooks(state, books) {
      state.books = books
    }
  },
  actions: {
    async fetchBooks({ commit }) {
      const response = await fetch('http://localhost:3000/api/v1/books')
      const result = await response.json()
      commit('setBooks', result.books)
    }
  }
})

export default store
