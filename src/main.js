// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPaperPlane, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueParticles from 'vue-particles'
import '~/assets/fonts/inter.css'
import '~/assets/css/main.css'

library.add(faFacebook, faEnvelope, faPaperPlane, faTimesCircle)

export default function(Vue, { router, head, isClient }) {
	Vue.use(VueParticles)
	Vue.component('Layout', DefaultLayout)
	Vue.component('fa', FontAwesomeIcon)
}
