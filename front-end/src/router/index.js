import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import Contact from '../views/Contact'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            meta: {
                enterClass: 'animate__animated animate__fadeInLeft',
                leaveClass: 'animate__animated animate__fadeOutRight'
            }
        },
        {
            path: "/projetos",
            component: Projects,
            meta: {
                enterClass: 'animate__animated animate__fadeInLeft',
                leaveClass: 'animate__animated animate__fadeOutLeft'
            }
        },
        {
            path: "/contato",
            component: Contact,
            meta: {
                enterClass: 'animate__animated animate__fadeInRight',
                leaveClass: 'animate__animated animate__fadeOutRight'
            }
        }
    ]
})

export default router