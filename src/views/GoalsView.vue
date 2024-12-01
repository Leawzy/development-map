<script setup lang="ts">
import StatisticsLayout from '@/components/statisticsBlock/statisticsLayout.vue';
import GoalsLayout from '@/components/goalsBlock/goalsLayout.vue';
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
