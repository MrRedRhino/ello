// src/router/index.js
import {createRouter, createWebHistory} from 'vue-router'
import Playerinfo from "@/pages/playerInfo/Playerinfo.vue";
import Home from "@/pages/Home.vue";
import Bans from "@/pages/Bans.vue";
import Leaderboard from "@/pages/leaderboard/Leaderboard.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/bans', component: Bans},
    {path: "/players/:playerName?", component: Playerinfo},
    {path: "/leaderboard", component: Leaderboard}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router
