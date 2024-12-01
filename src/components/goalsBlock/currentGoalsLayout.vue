<script setup lang="ts"></script>

<template>
  <section class="current-goals-block">
    <div class="current-goals-top">
      <div class="current-goals-title">
        <p>Текущие цели</p>
      </div>
      <div class="current-goals-btn">
        <button class="btn-filter">Ф</button>
        <button class="btn-add-goal">Добавить цель</button>
      </div>
    </div>
    <article class="current-goal-item">
      <div class="current-goal-info">
        <div class="current-goal-title">
          <RouterLink to="">Изучить Go</RouterLink>
        </div>
        <div class="current-goal-detailInfo">
          <p class="info-professional">Professional</p>
          <p class="info-date">01.12.2024</p>
        </div>
      </div>
      <div class="current-goal-status">
        <div class="current-goal-status-progress">
          <div class="current-goal-status-info">
            <p class="text-gray">Прогресс</p>
            <p class="font-500">75.0%</p>
          </div>
          <div class="goals-item-statusBar">
            <div class="goals-item-statusBar-fill"></div>
          </div>
        </div>
        <p class="current-goal-status-item">Not started</p>
      </div>
    </article>
    <article class="current-goal-item">
      <div class="current-goal-info">
        <div class="current-goal-title">
          <RouterLink to="">Изучить Go</RouterLink>
        </div>
        <div class="current-goal-detailInfo">
          <p class="info-professional">Professional</p>
          <p class="info-date">01.12.2024</p>
        </div>
      </div>
      <div class="current-goal-status">
        <div class="current-goal-status-progress">
          <div class="current-goal-status-info">
            <p class="text-gray">Прогресс</p>
            <p class="font-500">75.0%</p>
          </div>
          <div class="goals-item-statusBar">
            <div class="goals-item-statusBar-fill"></div>
          </div>
        </div>
        <p class="current-goal-status-item">Not started</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.current-goals-block {
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 1rem;
}

.current-goals-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.current-goals-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(17 24 39);
  font-weight: 600;
}

.current-goals-btn {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

.btn-add-goal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  width: 180px;
  border: none;
  background-color: rgb(249 115 22);
  color: white;
}

.btn-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  width: 62px;
  border: none;
  background-color: rgb(229 231 235);
  color: rgb(55 65 81);
}

.btn-add-goal:hover {
  transform: scale(1.01);
}

.current-goal-item {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: rgb(249 250 251);
  transition: all 0.2s ease;
}

.current-goal-item:hover {
  background-color: rgb(229 231 235);
}

.current-goal-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.current-goal-title a {
  font-size: 1.17em;
  color: rgb(17 24 39);
  font-weight: 500;
}

.current-goal-detailInfo {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.current-goal-status {
  display: flex;
  align-items: center;
  gap: 30px;
}

.current-goal-status-progress {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.current-goal-status-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 20px;
}

.goals-item-statusBar {
  height: 0.5rem;
  width: 100%;
  background-color: rgb(229 231 235);
  border-radius: 1rem;
}

.goals-item-statusBar-fill {
  height: 0.5rem;
  width: 75%;
  background-color: #22c55e;
  border-radius: 1rem;
}

.current-goal-status-item {
  padding: 5px 10px;
  color: rgb(31 41 55);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: rgb(229 231 235);
  border-radius: 1rem;
}

.info-professional {
  padding: 3px 7px;
  color: rgb(31 41 55);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: rgb(229 231 235);
  border-radius: 1rem;
}

.info-date {
  font-size: 0.875rem;
  color: rgb(75 85 99);
  line-height: 1.25rem;
}

@media screen and (max-width: 768px) {
  .current-goals-block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
  }

  .current-goals-top {
    width: 100%;
  }

  .current-goal-item {
    flex-direction: column;
    width: calc(50% - 10px);
    gap: 20px;
  }

  .current-goal-info {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .current-goal-detailInfo {
    flex-direction: column;
    align-items: center;
  }

  .current-goal-status {
    flex-direction: column;
    align-items: flex-start;
  }

  .current-goal-status-progress {
    width: 100%;
  }
}

@media screen and (max-width: 560px) {
  .current-goals-top {
    flex-direction: column;
    gap: 20px;
  }

  .current-goals-btn {
    width: 100%;
    justify-content: space-between;
  }

  .current-goal-item {
    width: 100%;
  }
}
</style>
