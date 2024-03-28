<script setup>
import { useAuthStore } from '../../stores/auth.store'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()
if (authStore.user) {
  router.push('/')
}
</script>

<template>
  <div>
    <div>
      <router-view />
    </div>
  </div>
</template>
