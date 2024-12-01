<script setup lang="ts"></script>

<template>
  <section class="statistics-block">
    <article class="statistics-item bg-orange">
      <span class="statistics-name">Всего целей</span>
      <span class="statistics-count">0</span>
    </article>
    <article class="statistics-item bg-green">
      <span class="statistics-name">Выполнено</span>
      <span class="statistics-count">0</span>
    </article>
    <article class="statistics-item bg-blue">
      <span class="statistics-name">В процессе</span>
      <span class="statistics-count">0</span>
    </article>
    <article class="statistics-item bg-amber">
      <span class="statistics-name">Средний прогресс</span>
      <span class="statistics-count">0</span>
    </article>
  </section>
</template>

<style scoped>
.statistics-block {
  display: flex;
  justify-content: space-between;
}

.statistics-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 1rem;
  background-color: white;
  width: 274px;
  height: 100px;
  padding: 20px;
}

.statistics-name {
  font-size: 0.875rem;
  color: rgb(255 255 255 / 0.8);
  font-weight: 500;
  line-height: 1.25rem;
}

.statistics-count {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: white;
}

@media screen and (max-width: 1200px) {
  .statistics-block {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .statistics-item {
    width: calc(50% - 10px);
  }
}

@media screen and (max-width: 425px) {
  .statistics-item {
    width: 100%;
  }
}
</style>
