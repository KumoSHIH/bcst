import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './index.css'
// import './assets/main.css'


const app = createApp(App)

app.use(router).use(VueAxios, axios)

app.mount('#app')
