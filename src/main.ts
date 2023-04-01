import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import "./assets/base.css"
import App from './App.vue'
const app = createApp(App)

const routes = [
    {
        path: '/',
        component: () => import("./views/Home.vue"),
        meta: {
            title: "Домашняя"
        }
    },
    {
        path: '/about',
        component: () => import("./views/About.vue"),
        meta: {
            title: "О моде"
        }
    },
    {
        path: '/beta-testing',
        component: () => import("./views/OBT.vue"),
        meta: {
            title: "ОБТ"
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    setTimeout(() => {
        document.title = `${to.meta.title} | Artifact Mod`
    }, 100);
});


app.use(router)
app.mount('#app')