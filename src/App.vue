<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/layout/header/HeaderLayout.vue';
import Footer from '@/components/layout/footer/FooterLayout.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
