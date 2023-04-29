import { createStore } from 'vuex'

import book from '@/store/modules/book.js'
import auth from '@/store/modules/auth.js'

export default createStore({
  modules: {
    book,
    auth
  }
})
