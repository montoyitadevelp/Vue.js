<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <nav>
    <ul>
      <li class="home">
        <router-link to="/">Home </router-link>
      </li>
      <div class="links" v-if="user">
        <li>{{ user?.info_user?.name }} {{ user?.info_user?.lastname }}</li>
        <button class="logout" @click="authStore.logout()">Logout</button>
      </div>
      <div v-else class="links">
        <li>
          <router-link to="/users/login">Login </router-link>
        </li>
        <li>
          <router-link to="/users/register">Register </router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style>
ul {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: rgb(209 213 219 / 0.6);
}

li {
  list-style-type: none;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #111;
}

a:hover {
  color: #6d6c6c;
}

.home {
  display: flex;
  flex-direction: column;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  justify-content: flex-end;
}

.logout {
  color: rgb(255, 255, 255);
  background-color: rgb(78, 78, 243);
  font-weight: 500;
  border-radius: 0.5rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  text-align: center;
  cursor: pointer;
  width: 20%;
}
</style>
