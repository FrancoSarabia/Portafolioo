import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/curriculum',
        component: import(/* webpackChunkName: "CV" */ '../../public/CVFrancoSarabia.pdf')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router