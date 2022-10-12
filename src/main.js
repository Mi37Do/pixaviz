import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import 'aos/dist/aos.css'
import 'tw-elements'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(createPinia()).use(router).use(autoAnimatePlugin).mount('#app')
