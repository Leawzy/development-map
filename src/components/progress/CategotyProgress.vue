<script setup lang="ts"></script>

<template>
  <section class="category-progress-block">
    <p class="category-progress-title">Прогресс по категориям</p>
    <div class="category-progress-wrap">
      <article class="category-progress-item">
        <div class="progress-item-title">
          <p>Professional</p>
          <p>75.0%</p>
        </div>
        <div class="progress-item-bar">
          <div class="progress-item-bar-fill"></div>
        </div>
      </article>
      <article class="category-progress-item">
        <div class="progress-item-title">
          <p>Professional</p>
          <p>50.0%</p>
        </div>
        <div class="progress-item-bar">
          <div class="progress-item-bar-fill"></div>
        </div>
      </article>
      <article class="category-progress-item">
        <div class="progress-item-title">
          <p>Professional</p>
          <p>20.0%</p>
        </div>
        <div class="progress-item-bar">
          <div class="progress-item-bar-fill"></div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.category-progress-block {
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 1rem;
  background-color: white;
}

.category-progress-title {
  color: rgb(17 24 39);
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.category-progress-wrap {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.category-progress-item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.progress-item-title {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: rgb(55 65 81);
  font-weight: 500;
  line-height: 1.25rem;
}

.progress-item-bar {
  height: 0.5rem;
  width: 100%;
  background-color: rgb(229 231 235);
  border-radius: 1rem;
}

.progress-item-bar-fill {
  height: 0.5rem;
  width: 75%;
  background-color: #22c55e;
  border-radius: 1rem;
}

@media screen and (max-width: 425px) {
  .category-progress-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
