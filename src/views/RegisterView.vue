<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Регистрация | Карта развития',
  meta: [
    { name: 'description', content: 'Регистрация' },
    { property: 'og:title', content: 'Заголовок для Open Graph' },
    { property: 'og:description', content: 'Описание для Open Graph' },
  ],
});
</script>

<template>
  <main class="content">
    <div class="register-block">
      <div class="register-info">
        <img src="" alt="Логотип" />
        <h2>Создайте аккаунт</h2>
        <p>Начните свой путь развития</p>
      </div>
      <form>
        <div class="register-email">
          <label for="email">Email</label>
          <input type="email" placeholder="your@email.com" />
          <p>Мы отправим вам письмо для подтверждения</p>
        </div>
        <div class="register-name">
          <label for="name">Имя пользователя</label>
          <input type="text" placeholder="Ваше имя" />
          <p>Используйте буквы, цифры и символы _ -</p>
        </div>
        <div class="register-password">
          <label for="password">Пароль</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <div class="register-password-confirmation">
          <label for="password">Подтверждение пароля</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="submit">Войти</button>
      </form>
      <div class="auth-account">
        <p>
          Уже есть аккаунт?
          <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.register-block {
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

.register-info {
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

.register-email,
.register-password,
.register-name,
.register-password-confirmation {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.register-email,
.register-name p {
  font-size: 0.875rem;
  color: rgb(107 114 128);
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
