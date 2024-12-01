<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

const openModal = () => {
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

onMounted(() => {
  window.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isVisible.value && target.classList.contains('modal')) {
      closeModal();
    }
  });
});

defineExpose({
  openModal,
  closeModal,
});
</script>

<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-items">
      <div class="close-button" @click="closeModal">&times;</div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-items {
  position: relative;
  width: auto;
}

.modal-content {
  border-radius: 1rem;
  border: 1px solid rgb(229 231 235);
  background-color: white;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: -30px;
  right: -20px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close-button:hover {
  color: black;
}

@media screen and (max-width: 1200px) {
  .modal-items {
    max-width: 90%;
  }
}
</style>
