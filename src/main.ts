import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import "./assets/base.css"
import App from './App.vue'
const app = createApp(App)

const routes = [
    {
        path: '/',
        component: () => import("./views/Home.vue")
    },
    {
        path: '/about',
        component: () => import("./views/About.vue")
    },
    {
        path: '/beta-testing',
        component: () => import("./views/OBT.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


app.use(router)
app.mount('#app')