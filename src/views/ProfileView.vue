<script setup lang="ts">
import { useHead } from '@vueuse/head';

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
      <section class="statistics-block">
        <article class="statistics-item">
          <div class="statistics-logo">
            <img src="" alt="Статистика" />
          </div>
          <div class="statistics-info">
            <span class="statistics-name">Всего целей</span>
            <span class="statistics-count">0</span>
          </div>
        </article>
        <article class="statistics-item">
          <div class="statistics-logo">
            <img src="" alt="Статистика" />
          </div>
          <div class="statistics-info">
            <span class="statistics-name">Выполнено</span>
            <span class="statistics-count">0</span>
          </div>
        </article>
        <article class="statistics-item">
          <div class="statistics-logo">
            <img src="" alt="Статистика" />
          </div>
          <div class="statistics-info">
            <span class="statistics-name">В процессе</span>
            <span class="statistics-count">0</span>
          </div>
        </article>
        <article class="statistics-item">
          <div class="statistics-logo">
            <img src="" alt="Статистика" />
          </div>
          <div class="statistics-info">
            <span class="statistics-name">Средний прогресс</span>
            <span class="statistics-count">0</span>
          </div>
        </article>
      </section>
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

.statistics-block {
  display: flex;
  justify-content: space-between;
}

.statistics-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 1rem;
  background-color: white;
  width: 274px;
  height: 100px;
  padding: 20px;
}

.statistics-logo {
  width: 48px;
}

.statistics-info {
  display: flex;
  width: 200px;
  flex-direction: column;
  text-align: right;
}

.statistics-name {
  font-size: 0.875rem;
  color: rgb(75 85 99);
  line-height: 1.25rem;
}

.statistics-count {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(17 24 39);
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

  .profile-btn-block {
    display: flex;
    justify-content: center;
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

@media screen and (max-width: 425px) {
  .statistics-item {
    width: 100%;
  }
}
</style>
