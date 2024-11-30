<script setup lang="ts"></script>

<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-block">
        <div class="footer-items">
          © 2024 Карта развития. Все права защищены.
        </div>
        <div class="footer-items">
          <a href="#">Помощь</a>
          <a href="#">Связаться с нами</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  background-color: white;
  border-top: 1px solid rgb(229 231 235);
}

.footer-wrapper {
  display: flex;
  align-items: center;
  max-width: 1300px;
  height: 62px;
  margin: 0 auto;
  background-color: white;
}

.footer-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.footer-items,
a {
  display: flex;
  gap: 20px;
  color: rgb(75 85 99);
  font-size: 0.875rem;
}

@media screen and (max-width: 1300px) {
  .footer-wrapper {
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .footer-block {
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
