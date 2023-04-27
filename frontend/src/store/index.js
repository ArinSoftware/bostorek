import { createStore } from 'vuex'

import book from '@/store/modules/book.js'

export default createStore({
  modules: {
    book
  }
})
