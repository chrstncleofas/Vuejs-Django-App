import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home';
import Department from './components/Department';
import Employee from './components/Employee';

const routes = [
  { path: '/home', component: Home },
  { path: '/department', component: Department },
  { path: '/employee', component: Employee },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
