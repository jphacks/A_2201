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
        path: "/room/:id",
        name: "BookmarkList",
        component: () => import("../views/BookmarkList.vue"),
        props: true
    },
    {
        path: "/room/:id/add-bookmark",
        name: "AddBookmark",
        component: () => import("../views/AddBookmark.vue"),
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;