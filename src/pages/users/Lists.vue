<script setup>
import { storeToRefs } from 'pinia';
import { useUsersStore } from '../../stores/users.store';

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
  <h2>List of Users</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 30%">ID</th>
        <th style="width: 30%">First Name</th>
        <th style="width: 30%">Last Name</th>
        <th style="width: 30%">Email</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="users.length">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </template>
    </tbody>
  </table>
  <div v-if="users.loading">
    <div class="loading" colspan="4"><van-loading size="64px" /></div>
  </div>
  <div v-if="users.error">
    <div colspan="4">Error loading users: {{ users.error }}</div>
  </div>
</template>

<style>
table {
  width: 100%;
}

table,
th,
td {
  padding: 10px;
  border: 1px solid black;
  border-collapse: collapse;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
