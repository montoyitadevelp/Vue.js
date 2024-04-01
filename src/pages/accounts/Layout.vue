<script setup>
import { useAuthStore } from '../../stores/auth.store';
import { router } from '../../router';

// redirect home if already logged in
const authStore = useAuthStore();
if (authStore.user) {
  router.push('/');
}
</script>

<template>
  <div>
    <div>
      <router-view />
    </div>
  </div>
</template>
