<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <nav>
    <ul>
      <li v-if="user" class="home">
        <router-link to="/">Home </router-link>
        <router-link to="/users/all">Users</router-link>
      </li>
      <li v-else>
        <router-link to="/">Home </router-link>

      </li>
      <div class="links" v-if="user">
        <li>Hi {{ user?.info_user?.name }} {{ user?.info_user?.lastname }}</li>
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
nav {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

ul {
  display: flex;
  flex-direction: row;

}

li {
  list-style-type: none;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #6d6c6c;
}

.home {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  justify-content: end;
  padding-right: 1rem;
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
  width: 10%;
}
</style>
