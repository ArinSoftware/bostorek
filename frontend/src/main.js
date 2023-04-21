import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLinkedin)
library.add(faTwitter)
library.add(faInstagram)
library.add(faYoutube)

const app = createApp(App)

app.use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
