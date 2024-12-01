<script setup lang="ts">
import StatisticsLayout from '@/components/statisticsBlock/statisticsLayout.vue';
import { useHead } from '@vueuse/head';
import CategotyProgress from '@/components/progress/CategotyProgress.vue';
import ProgressUsers from '@/components/progress/ProgressUsers.vue';

useHead({
  title: 'Прогресс | Карта развития',
  meta: [
    { name: 'description', content: 'Прогресс' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>

<template>
  <main class="content">
    <div class="progress-main">
      <h1>Общий прогресс</h1>
      <RouterLink to="/goals" class="btn-goals">Мои цели</RouterLink>
    </div>
    <div class="progress-wrapper">
      <StatisticsLayout />
      <CategotyProgress />
      <ProgressUsers />
    </div>
  </main>
</template>

<style scoped>
.progress-main {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}

.btn-goals {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  border-radius: 1rem;
  transition: all 0.2s ease;
  width: 180px;
  border: none;
  background-color: rgb(249 115 22);
  color: white;
}

.btn-goals:hover {
  background-color: rgb(234 88 12);
}

.progress-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
