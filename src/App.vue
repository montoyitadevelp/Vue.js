<script setup>
import { useAuthStore } from './stores/auth.store';
import Navbar from './components/Navbar.vue';
import Alert from './components/Alert.vue';

const authStore = useAuthStore();
</script>

<template>
  <main :class="authStore.user && 'bg-light'">
    <Navbar />
    <Alert />
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: 'Onest Variable', sans-serif;
  background-color: #efefef;
}
</style>
