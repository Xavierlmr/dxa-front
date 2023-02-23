import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/wallpaper/:id', name: 'wallpaper', component:  ()=>import('@/views/Wallpaper.vue')}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router