<script setup lang="ts">
import StatisticsLayout from '@/components/statisticsBlock/statisticsLayout.vue';
import GoalsLayout from '@/components/goalsBlock/goalsLayout.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Цели | Карта развития',
  meta: [
    { name: 'description', content: 'Цели' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>

<template>
  <main class="content">
    <div class="goals-wrapper">
      <h1>Индивидуальный план развития</h1>
      <StatisticsLayout />
      <GoalsLayout />
    </div>
  </main>
</template>

<style scoped>
.goals-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
