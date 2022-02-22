import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

createApp(App).use(Router, VueClipboard).mount('#app')
