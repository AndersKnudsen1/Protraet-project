import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Assignments from './views/Assignments.vue'
import Assignment from './components/Assignment'
import assign from './components/assign.vue'
import CV from './views/CV.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Assignments',
            name: 'Assignments',
            component: Assignments
        },
        {
            path: '/Assignment',
            name: 'Assignment',
            component: Assignment
        },
        {
            path: '/assign:id',
            name: 'assign',
            component: assign
        },
        {
            path: '/CV',
            name: 'CV',
            component: CV
        },
        
    ]
})