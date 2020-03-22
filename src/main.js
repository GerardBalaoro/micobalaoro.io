// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '~/assets/fonts/inter.css'
import '~/assets/css/main.css'

library.add(faFacebook, faEnvelope, faPaperPlane)

export default function(Vue, { router, head, isClient }) {
	Vue.component('Layout', DefaultLayout)
	Vue.component('fa', FontAwesomeIcon)
}
