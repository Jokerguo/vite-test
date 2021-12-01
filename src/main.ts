import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Guo from './components/Guo.vue'
import Guo2 from './components/Guo2.vue'

const histroy = createWebHashHistory()
const router = createRouter({
  history: histroy,
  routes: [
    { path: '/', component: Guo },
    {path:'/guo',component: Guo2},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
