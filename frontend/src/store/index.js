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
      try {
        const response = await fetch('http://localhost:3000/api/v1/books')
        const result = await response.json()

        const sortedBooks = result.books.sort((a, b) => {
          const aDate = new Date(a.createdAt)
          const bDate = new Date(b.createdAt)

          return aDate > bDate ? -1 : 1
        })

        commit('setBooks', sortedBooks)
      } catch (error) {
        console.log('Error fetching books:', error)
      }
    }
  }
})

export default store
