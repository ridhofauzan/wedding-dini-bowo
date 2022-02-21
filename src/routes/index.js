import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "DINI & BOWO | Wedding Invitation"
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
     next();
    
});

export default router