import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/create",
        name: "CreateRoom",
        component: () => import("../views/CreateRoom.vue"),
    },
    {
        path: "/join",
        name: "JoinRoom",
        component: () => import("../views/JoinRoom.vue"),
    },
    {
        path: "/join/bookmark",
        name: "BookmarkList",
        component: () => import("../views/BookmarkList.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;