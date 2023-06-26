export default {
  namespaced: true,
  state: {
    books: [],
    userBooks: []
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books
    },
    SET_USER_BOOKS(state, userBooks) {
      state.userBooks = userBooks
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
    },
    async fetchUserBooks({ commit, rootGetters }) {
      try {
        const userId = rootGetters['auth/currentUser']._id
        const response = await fetch(`http://localhost:3000/api/v1/books/user/${userId}`, {
          credentials: 'include'
        })
        const result = await response.json()

        const sortedBooks = result.books.sort((a, b) => {
          const aDate = new Date(a.createdAt)
          const bDate = new Date(b.createdAt)

          return aDate > bDate ? -1 : 1
        })

        console.log('sortedBooks', sortedBooks)

        commit('SET_USER_BOOKS', sortedBooks)
      } catch (error) {
        console.log('Error fetching user books:', error)
      }
    }
  },
  getters: {
    getBooks: (state) => state.books,
    getUserBooks: (state) => state.userBooks
  }
}
