import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Department from '@/components/Department.vue';
import Employee from '@/components/Employee.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/department', component: Department },
  { path: '/employee', component: Employee },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
