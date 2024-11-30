<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Восстановление пароля | Карта развития',
  meta: [
    { name: 'description', content: 'Восстановление пароля' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>

<template>
  <main class="content">
    <div class="forgot-block">
      <div class="forgot-info">
        <img src="" alt="Логотип" />
        <h2>Восстановить пароль</h2>
        <p>Мы вам поможем восстановить его!</p>
      </div>
      <form>
        <div class="forgot-email">
          <label for="email">Email</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <button type="submit">Войти</button>
      </form>
      <div class="auth-account">
        <p>
          Вспомнили пароль?
          <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.forgot-block {
  padding: 20px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  width: 446px;
  border-radius: 1rem;
  background-color: white;
}

.forgot-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}

.forgot-email {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  padding: 0 20px 0 20px;
  height: 52px;
  width: 100%;
  border: 2px solid rgb(229 231 235);
  border-radius: 12px;
  font-size: 0.875rem;
  color: black;
  transition: transform 0.3s ease;
}

input:hover,
input:focus {
  border: 2px solid rgb(249 115 22);
  outline: none;
}

button {
  height: 46px;
  border-radius: 12px;
  background-color: rgb(249 115 22);
  border: none;
  color: white;
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.01);
}

.auth-account {
  width: 100%;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid rgb(229 231 235);
}

a:visited {
  color: blue;
}
</style>
