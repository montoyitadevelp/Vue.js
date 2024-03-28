<script setup>
import { useAuthStore } from './stores/auth.store'

import Navbar from './components/Navbar.vue';

const authStore = useAuthStore()
</script>

<template>
  <main :class="authStore.user && 'bg-light'">
    <Navbar />
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: 'Onest Variable', sans-serif;
}
</style>
