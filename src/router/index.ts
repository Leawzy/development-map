import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ForgotVue from '@/views/ForgotVue.vue';
import GoalsView from '@/views/GoalsView.vue';
import ProgressView from '@/views/ProgressView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/goals',
      name: 'goals',
      component: GoalsView,
    },
    {
      path: '/progress',
      name: 'progress',
      component: ProgressView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForgotVue,
    },
  ],
});

export default router;
