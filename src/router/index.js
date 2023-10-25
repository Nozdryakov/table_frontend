import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";
import Department from "@/views/Department.vue";
import Area from "@/views/Area.vue";
import HeadOfDepartment from "@/views/HeadOfDepartment.vue";


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/department',
    name: 'department',
    component: Department
  },
  {
    path: '/area',
    name: 'area',
    component: Area
  },
  {
    path: '/head-of-dep',
    name: 'head-of-dep',
    component: HeadOfDepartment
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

