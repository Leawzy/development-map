<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Заголовок страницы',
  meta: [
    { name: 'description', content: 'Описание страницы' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>
<template>
  <main class="content">
    <div class="main-wrapper">
      <div class="main-block">
        <h1>
          Развивайтесь <span class="text-orange">осознанно</span> и
          <span class="text-orange">эффективно</span>
        </h1>
        <p>
          Создавайте цели, отслеживайте прогресс и развивайтесь вместе с
          опытными наставниками на нашей платформе
        </p>
        <div class="main-button">
          <a href="" class="btn-register">Зарегистрироваться</a>
          <a href="" class="btn-login">Войти</a>
        </div>
      </div>
    </div>
    <div class="feature-block">
      <h2>Ключевые возможности</h2>
      <p>Инструменты для вашего профессионального развития в компании</p>
      <div class="goals-block">
        <div class="goals-item bg-orange">
          <div class="goals-image">img</div>
          <h3>Управление целями</h3>
          <p>
            Создавайте и отслеживайте цели развития. Разбивайте их на конкретные
            задачи и следите за прогрессом.
          </p>
          <a href="http://">Войти для доступа</a>
        </div>
        <div class="goals-item bg-green">
          <div class="goals-image">img</div>
          <h3>Аналитика прогресса</h3>
          <p>
            Анализируйте свой рост с помощью детальной статистики и визуальных
            графиков прогресса.
          </p>
          <a href="http://">Войти для доступа</a>
        </div>
        <div class="goals-item bg-blue">
          <div class="goals-image">img</div>
          <h3>Личный кабинет</h3>
          <p>
            Настраивайте свой профиль, управляйте уведомлениями и отслеживайте
            личные достижения.
          </p>
          <a href="http://">Войти для доступа</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-block h1 {
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 700;
}

.main-block p {
  font-size: 1.25rem;
  line-height: 1.625;
}

.main-block .text-orange {
  color: rgb(253 186 116);
}

.main-wrapper {
  margin-left: calc((100% - 99vw) / 2);
  margin-right: calc((100% - 99vw) / 2);
  background-color: rgb(234 88 12);
}

.main-block {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: white;
}

.main-block p {
  width: 700px;
}

.main-button {
  display: flex;
  justify-content: space-around;
  width: 400px;
}

.btn-register {
  width: 225px;
  background-color: white;
  color: rgb(234 88 12);
}

.btn-login {
  width: 120px;
  background-color: rgb(194 65 12);
  color: white;
}

.btn-login,
.btn-register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.btn-login:hover,
.btn-register:hover {
  transform: scale(1.02);
}

.feature-block {
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.feature-block h2 {
  font-size: 2.25rem;
  font-weight: 700;
}

.feature-block p {
  color: rgb(75 85 99);
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.goals-block {
  padding-top: 80px;
  gap: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.goals-block .bg-orange {
  background-color: #f97316;
}
.goals-block .bg-blue {
  background-color: #22c55e;
}
.goals-block .bg-green {
  background-color: #3b82f6;
}

.goals-item {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 1rem;
  width: 350px;
  height: 350px;
  gap: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.goals-item:hover {
  transform: translateY(-10px);
}

.goals-item h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: white;
}

.goals-item p {
  font-size: 16px;
  color: rgb(255 255 255 / 0.9);
  line-height: 1.625;
}

.goals-item a {
  color: white;
}

@media screen and (max-width: 1200px) {
  .goals-block {
    flex-direction: column;
    gap: 50px;
  }
}

@media screen and (max-width: 768px) {
  .main-block p {
    width: 100%;
  }

  .feature-block h2 {
    text-align: center;
  }

  .feature-block p {
    text-align: center;
    width: 90vw;
  }

  .goals-item p {
    width: auto;
  }
}

@media screen and (max-width: 425px) {
  .main-block h1 {
    font-size: 2.25rem;
  }

  .main-block p {
    font-size: 18px;
  }

  .main-button {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .goals-item {
    width: 300px;
  }
}
</style>
