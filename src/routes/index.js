import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Event from '../pages/Event.vue'
import Maps from '../pages/Maps.vue'
import Gift from '../pages/Gift.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "DINI & BOWO | Wedding Invitation"
        }
    },
    {
        path: "/event",
        name: "Event",
        component: Event,
        meta: {
            title: "DINI & BOWO | Wedding Invitation"
        }
    },
    {
        path: "/maps",
        name: "Location",
        component: Maps,
        meta: {
            title: "DINI & BOWO | Wedding Invitation"
        }
    },
    {
        path: "/gift",
        name: "Gift",
        component: Gift,
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