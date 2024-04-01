import { defineStore } from 'pinia';
import { fetchWrapper } from '../helpers/fetchWrapper.js';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: {},
    user: {},
  }),
  actions: {
    async register(user) {
      await fetchWrapper.post(`${baseUrl}/users/`, user);
    },
    async getAll() {
      this.users = { loading: true };
      try {
        this.users = await fetchWrapper.get(`${baseUrl}/users`);
      } catch (error) {
        this.users = { error };
      }
    },
    async getById(id) {
      this.user = { loading: true };
      try {
        this.user = await fetchWrapper.get(`${baseUrl}/users/${id}`);
      } catch (error) {
        this.user = { error };
      }
    },
  },
});
