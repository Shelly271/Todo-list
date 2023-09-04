import './assets/main.css'
import router from './Router/index'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
