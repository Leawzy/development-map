<script setup lang="ts">
import ModalLayout from '@/components/modalWindows/ModalLayout.vue';
import { ref } from 'vue';

const modalRef = ref();

const openModal = () => {
  modalRef.value?.openModal();
};

const closeModal = () => {
  modalRef.value?.closeModal();
};

defineExpose({
  openModal,
  closeModal,
});
</script>

<template>
  <ModalLayout ref="modalRef">
    <form class="goal-form">
      <div class="flex-goal">
        <div class="flex-wrap">
          <label for="goalName">Название цели</label>
          <input
            type="text"
            placeholder="Например: Изучить Python"
            name="goalName"
          />
        </div>
        <div class="flex-wrap">
          <label for="developmentArea">Область развития</label>
          <input
            type="text"
            placeholder="Например: Программирование"
            name="developmentArea"
          />
        </div>
      </div>
      <div class="flex-goal">
        <div class="flex-wrap">
          <label for="goalCategory">Категория</label>
          <select name="goalCategory" id="goalCategory">
            <option value="professional">Профессиональные навыки</option>
            <option value="soft_skills">Гибкие навыки</option>
            <option value="leadership">Лидерские качества</option>
            <option value="technical">Технические навыки</option>
            <option value="language">Языковые навыки</option>
            <option value="other">Другое</option>
          </select>
        </div>
        <div class="flex-wrap">
          <label for="goalPriority">Приоритет</label>
          <select name="goalPriority" id="goalPriority">
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </select>
        </div>
      </div>
      <div class="flex-wrap">
        <label for="goalTask">Задачи</label>
        <textarea name="goalTask" id="goalTask" rows="3"></textarea>
      </div>
      <div class="flex-wrap">
        <label for="goalPlan">План действий</label>
        <textarea name="goalPlan" id="goalPlan" rows="3"></textarea>
      </div>
      <div class="flex-goal">
        <div class="flex-wrap">
          <label for="goalSuccessCriteria">Критерии успеха</label>
          <textarea
            name="goalSuccessCriteria"
            id="goalSuccessCriteria"
            rows="3"
          ></textarea>
        </div>
        <div class="flex-wrap">
          <label for="goalResources">Необходимые ресурсы</label>
          <textarea name="goalResources" id="goalResources" rows="3"></textarea>
        </div>
      </div>
      <div class="flex-goal">
        <div class="flex-wrap">
          <label for="goalDeadline">Дедлайн</label>
          <input type="datetime-local" />
        </div>
        <div class="flex-wrap">
          <label for="goalStatus">Статус</label>
          <select name="goalStatus" id="goalStatus">
            <option value="NOT_STARTED">В очереди</option>
            <option value="IN_PROGRESS">В работе</option>
            <option value="PAUSED">На паузе</option>
            <option value="ON_REVIEW">На проверке</option>
            <option value="COMPLETED">Завершено</option>
            <option value="APPROVED" disabled>Подтверждено ментором</option>
          </select>
        </div>
      </div>
      <div class="flex-wrap">
        <label for="goalComments">Комментарии</label>
        <textarea name="goalComments" id="goalComments" rows="3"></textarea>
      </div>
      <div class="goal-btn-wrap">
        <div class="goal-btn">
          <button class="btn-cancel">Отмена</button>
          <button class="btn-submit" type="submit">Создать цель</button>
        </div>
      </div>
    </form>
  </ModalLayout>
</template>

<style scoped>
.goal-form {
  width: 896px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.flex-goal {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.flex-goal .flex-wrap {
  flex: 1 1 50%;
}

.flex-wrap {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-size: 0.875rem;
  color: rgb(55 65 81);
  font-weight: 500;
  line-height: 1.25rem;
}

input,
select,
textarea {
  padding: 0 20px 0 20px;
  height: 52px;
  width: 100%;
  border: 2px solid rgb(229 231 235);
  border-radius: 12px;
  font-size: 0.875rem;
  color: black;
  transition: transform 0.3s ease;
}

textarea {
  resize: vertical;
}

input:hover,
select:hover,
textarea:hover,
input:focus,
select:focus,
textarea:focus {
  border: 2px solid rgb(249 115 22);
  outline: none;
}

.goal-btn-wrap {
  padding: 20px;
  border-top: 1px solid rgb(229 231 235);
  display: flex;
  flex-direction: column;
}

.goal-btn {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-submit {
  height: 46px;
  border-radius: 1rem;
  transition: all 0.2s ease;
  width: 180px;
  border: none;
  background-color: rgb(249 115 22);
  color: white;
}

.btn-cancel {
  height: 46px;
  border-radius: 1rem;
  transition: all 0.2s ease;
  width: 80px;
  border: none;
  background-color: rgb(243 244 246);
  color: rgb(55 65 81);
}

.btn-submit:hover {
  background-color: rgb(234 88 12);
}

.btn-cancel:hover {
  background-color: rgb(229 231 235);
}

@media screen and (max-width: 1200px) {
  .goal-form {
    max-width: 100%;
  }
  .flex-goal {
    flex-direction: column;
  }
}
</style>
