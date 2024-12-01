<script setup lang="ts"></script>

<template>
  <section class="achievements-block">
    <p class="achievements-block-title">Достижения</p>
    <div class="achievements-wrapper">
      <article class="achievements-item">
        <div class="achievements-logo">
          <img src="" alt="Превью" />
        </div>
        <div class="achievements-info">
          <p class="achievements-title">Первые шаги</p>
          <p class="achievements-desc">Создайте свою первую цель</p>
          <p class="achievements-date">30.11.2024</p>
        </div>
      </article>
      <article class="achievements-item">
        <div class="achievements-logo">
          <img src="" alt="Превью" />
        </div>
        <div class="achievements-info">
          <p class="achievements-title">Первые шаги</p>
          <p class="achievements-desc">Создайте свою первую цель</p>
          <p class="achievements-date">30.11.2024</p>
        </div>
      </article>
      <article class="achievements-item">
        <div class="achievements-logo">
          <img src="" alt="Превью" />
        </div>
        <div class="achievements-info">
          <p class="achievements-title">Первые шаги</p>
          <p class="achievements-desc">Создайте свою первую цель</p>
          <p class="achievements-date">30.11.2024</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.achievements-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 1rem;
}

.achievements-block-title {
  color: rgb(17 24 39);
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.achievements-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.achievements-item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  border-radius: 1rem;
  background-color: rgb(249 250 251);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.achievements-info {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 10px;
}

.achievements-title {
  font-weight: 500;
  color: rgb(17 24 39);
}
.achievements-desc {
  font-size: 0.875rem;
  color: rgb(75 85 99);
  line-height: 1.25rem;
}
.achievements-date {
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(107 114 128);
}

@media screen and (max-width: 425px) {
  .achievements-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
