<script setup lang="ts">
import { ref, watch } from 'vue';

let blockFalse = ref(true);

const magicChange = () => {
  if (blockFalse.value == true) {
    blockFalse.value = false;
  } else {
    blockFalse.value = true;
  }
};

let itemCount = ref(4);
const magicPlus = () => {
  itemCount.value++;
};

const magicMinus = () => {
  itemCount.value--;
};

const goals = ref(Array(itemCount.value).fill({}));

watch(itemCount, (newCount) => {
  goals.value = Array(newCount).fill({});
});
</script>

<template>
  <div class="magic-btn">
    <p>Кол-во: {{ itemCount }}</p>
    <button style="width: 100px" @click="magicPlus()">+</button>
    <button style="width: 100px" @click="magicMinus()">-</button>
    <p>И еще волшебная кнопка</p>
    <button @click="magicChange()">True/False</button>
  </div>
  <section class="goals-block-empty" v-if="!blockFalse">
    <div class="goals-img-empty"><img src="" alt="Изображение" /></div>
    <div class="goals-text-empty">
      <p>У вас пока нет целей</p>
      <p class="goals-description-empty">
        Начните свой путь развития, создав первую цель
      </p>
    </div>
    <button class="btn-create-goal">Создать первую цель</button>
  </section>
  <section class="goals-block" v-else>
    <article class="goals-item" v-for="(goal, index) in goals" :key="index" :style="{ width: itemCount === 1 ? '100%' : '' }">
      <div class="goals-item-top">
        <div class="goals-item-title">
          <p>Изучить Go</p>
          <p class="development-area">Back-end</p>
        </div>
        <div class="goals-item-info">
          <p class="info-high">High</p>
          <p class="info-professional">Professional</p>
        </div>
      </div>
      <div class="goals-item-statusBar">
        <div class="goals-item-statusBar-fill"></div>
      </div>
      <div class="goals-item-statusBar-info">
        <p>75.0% выполнено</p>
        <p>01.12.2024</p>
      </div>
      <div class="goals-item-status">Not Started</div>
      <div class="goals-item-btn">
        <button class="btn-edit">Редактировать</button>
        <button class="btn-remove">Удалить</button>
      </div>
    </article>
  </section>
</template>

<style scoped>
.goals-block-empty {
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  background-color: white;
}

.btn-create-goal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  border-radius: 12px;
  transition: transform 0.3s ease;
  width: 368px;
  background-color: rgb(249 115 22);
  color: white;
  border: none;
}

.btn-create-goal:hover {
  transform: scale(1.01);
}

.goals-block-empty p {
  color: rgb(17 24 39);
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.goals-block-empty .goals-description-empty {
  color: rgb(75 85 99);
  font-weight: normal;
  font-size: 16px;
}

.goals-block {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.goals-item {
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 10px;
  padding: 20px;
  height: 280px;
  width: 572px;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.goals-item-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.goals-item-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.goals-item-title p {
  color: rgb(17 24 39);
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.goals-item-title .development-area {
  color: rgb(107 114 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.goals-item-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.goals-item-info p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  height: 28px;
  border-radius: 1rem;
}

.info-high {
  color: rgb(185 28 28);
  background-color: rgb(254 242 242);
}

.info-professional {
  color: rgb(126 34 208);
  background-color: rgb(243 232 255);
}

.goals-item-statusBar {
  height: 0.75rem;
  width: 100%;
  background-color: rgb(243 244 246);
  border-radius: 1rem;
}

.goals-item-statusBar-fill {
  height: 0.75rem;
  width: 75%;
  background-color: #22c55e;
  border-radius: 1rem;
}

.goals-item-statusBar-info {
  display: flex;
  justify-content: space-between;
}

.goals-item-status {
  display: flex;
}

.goals-item-status p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  height: 28px;
  border-radius: 1rem;
  background-color: rgb(243 244 246);
  color: rgb(55 65 81);
}

.goals-item-btn {
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid rgb(243 244 246);
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-edit,
.btn-remove {
  height: 46px;
  width: 256px;
  border: none;
  border-radius: 1rem;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 14px;
}

.btn-edit {
  color: rgb(55 65 81);
}

.btn-remove {
  background-color: rgb(254 242 242);
  color: rgb(220 38 38);
}

.btn-edit:hover {
  background-color: rgb(229 231 235);
}

.btn-remove:hover {
  background-color: rgb(254 202 202);
}

@media screen and (max-width: 1300px) {
  .goals-block {
    align-items: center;
  }

  .goals-item {
    width: 100%;
  }

  .btn-edit,
  .btn-remove {
    width: 50%;
  }
}

@media screen and (max-width: 375px) {
  .goals-item {
    height: 350px;
  }

  .goals-item-top {
    flex-direction: column;
    gap: 10px;
  }

  .goals-item-title {
    order: 2;
  }

  .goals-item-info {
    justify-content: normal;
    order: 1;
  }

  .goals-item-btn {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn-edit,
  .btn-remove {
    width: 100%;
  }
}
</style>
