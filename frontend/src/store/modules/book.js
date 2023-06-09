export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.items = books
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

        commit('SET_BOOKS', sortedBooks)
      } catch (error) {
        console.log('Error fetching books:', error)
      }
    }
  }
}
