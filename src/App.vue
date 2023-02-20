<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Cursor from './components/Cursor.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import './assets/scss/index.scss';
</script>

<template>
  <!-- <Cursor /> -->
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>

<style lang="scss">
</style>