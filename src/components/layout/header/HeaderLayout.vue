<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="header-list">
        <div class="header-item">
          <img src="" alt="Логотип" />
          <nav>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
        <div class="header-item">
          <button>И</button>
          Илья
        </div>
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
</style>
