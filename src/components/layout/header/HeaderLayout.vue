<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);

const windowWidth = ref(window.innerWidth);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  menuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="header-list">
        <div class="header-item">
          <a href="/"><img src="" alt="Логотип" /></a>
          <nav>
            <RouterLink to="/goals">Мои цели</RouterLink>
            <RouterLink to="/progress">Мой прогресс</RouterLink>
            <RouterLink to="/profile">Профиль</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
        <div class="header-item">
          <div id="user-info">
            <button>И</button>
            Илья
          </div>
          <div
            v-if="windowWidth <= 768"
            @click="toggleMenu"
            class="burger-menu"
          >
            ☰
          </div>
        </div>
      </div>
      <div class="hamburger-menu" v-if="menuOpen">
        <nav class="hamburger-menu" v-if="menuOpen">
          <RouterLink to="/goals">Мои цели</RouterLink>
          <RouterLink to="/progress">Мой прогресс</RouterLink>
          <RouterLink to="/profile">Профиль</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.header-wrapper {
  max-width: 1300px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
}

.header-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

nav {
  display: flex;
  gap: 20px;
}

.hamburger-menu {
  display: block;
  position: fixed;
  top: 62px;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 200px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.hamburger-menu nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hamburger-menu nav a {
  border-bottom: 1px solid rgb(229 231 235);
}

button {
  height: 35px;
  background: limegreen;
  color: #fff;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  width: 35px;
  border-radius: 35px;
  border: 1px solid white;
}

a {
  color: black;
}

@media screen and (max-width: 1300px) {
  .header-list {
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  nav {
    display: none;
  }
}
</style>
