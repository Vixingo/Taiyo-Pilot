import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import vix from "../views/vix.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: () =>
            import(
                /* webpackChunkName: "gallery" */ "../views/GalleryPage.vue"
            ),
    },
    {
        path: "/vix",
        name: "vix",
        component: vix,
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
