<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Авторизация | Карта развития',
  meta: [
    { name: 'description', content: 'Авторизация' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>

<template>
  <main class="content">
    <div class="auth-block">
      <div class="auth-info">
        <img src="" alt="Логотип" />
        <h2>Добро пожаловать</h2>
        <p>Войдите в свой аккаунт</p>
      </div>
      <form>
        <div class="auth-email">
          <label for="email">Email</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <div class="auth-password">
          <div class="password-form-control">
            <label for="password">Пароль</label>
            <router-link to="/forgot">Забыли пароль?</router-link>
          </div>
          <input type="password" placeholder="••••••••" />
        </div>
        <div class="auth-remember" style="display: none">
          <input type="checkbox" />
          <p>Запомнить меня</p>
        </div>
        <button type="submit">Войти</button>
      </form>
      <div class="create-account">
        <p>
          Нет аккаунта?
          <router-link to="/register">Зарегистрироваться</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.auth-block {
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

.auth-info {
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

.auth-email,
.auth-password {
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

.auth-remember {
  display: inline-block;
}

input[type='checkbox'] {
  height: auto;
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

.password-form-control {
  display: flex;
  justify-content: space-between;
}

.create-account {
  width: 100%;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid rgb(229 231 235);
}

a:visited {
  color: blue;
}
</style>
