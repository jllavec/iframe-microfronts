import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import resize from './directives/iframeResizer'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('resize', resize)

app.mount('#app')
