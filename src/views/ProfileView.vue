<script setup lang="ts">
import { useHead } from '@vueuse/head';
import StatisticsLayout from '@/components/statisticsBlock/statisticsLayout.vue';
import CurrentGoalsLayout from '@/components/goalsBlock/currentGoalsLayout.vue';
import AchievementsLayout from '@/components/profile/achievementsLayout.vue';

useHead({
  title: 'Профиль | Карта развития',
  meta: [
    { name: 'description', content: 'Профиль' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>

<template>
  <main class="content">
    <div class="profile-wrapper">
      <section class="profile-block">
        <article class="profile-card">
          <div class="profile-info">
            <div class="profile-img">
              <img
                src="/src/assets/img/a8425381bf9bb3b20a91460bd7ca40c7.jpg"
                alt="Изображение профиля"
              />
            </div>
            <div class="profile-info-items">
              <span class="profile-name">Бабиджон</span>
              <a href="mailto:babidjon@examle.com" class="profile-email"
                >babidjon@examle.com</a
              >
              <span class="profile-role">Admin</span>
            </div>
          </div>
          <div class="profile-btn">
            <a href="#" class="profile-btn-edit">Редактировать профиль</a>
          </div>
        </article>
      </section>
      <StatisticsLayout />
      <div class="flex-wrap-blocks">
        <CurrentGoalsLayout />
        <AchievementsLayout />
      </div>
      <section class="profile-btn-block">
        <a href="#" class="btn-download">Скачать план развития</a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.profile-wrapper {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.profile-block {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  width: 100%;
  border-radius: 1rem;
  background-color: white;
}

.profile-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.profile-info {
  display: flex;
  gap: 20px;
}

.profile-img img {
  width: 128px;
  height: 128px;
  border-radius: 1rem;
}

.profile-info-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.profile-name {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.profile-email {
  color: rgb(75 85 99);
}

.profile-role {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 5px;
  color: rgb(154 52 18);
  font-weight: 500;
  font-size: 0.875rem;
  background-color: rgb(255 237 213);
  border-radius: 9999px;
}

.profile-btn-edit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  width: 225px;
  background-color: rgb(249 115 22);
  color: white;
}

.flex-wrap-blocks {
  display: grid;
  grid-template-columns: 768px auto;
  gap: 20px;
  align-items: start;
}

.btn-download {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  width: 368px;
  background-color: rgb(249 115 22);
  color: white;
}

.profile-btn-edit,
.btn-download {
  transition: transform 0.3s ease;
}

.profile-btn-edit:hover,
.btn-download:hover {
  transform: scale(1.01);
}

@media screen and (max-width: 1200px) {
  .profile-btn-block {
    display: flex;
    justify-content: center;
  }

  .flex-wrap-blocks {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 768px) {
  .profile-card,
  .profile-info,
  .profile-info-items {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
}
</style>
