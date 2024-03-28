import { defineStore } from 'pinia';
import { fetchWrapper } from '../helpers/fetchWrapper';
import { useAlertStore } from './alert.store';
import { router } from '../router'

const baseUrl = `${import.meta.env.VITE_API_URL}`;


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('User')),
    returnUrl: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/login`, {
          email,
          password,
        });

        // update pinia state
        this.user = user;
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('User', JSON.stringify(user));
        // redirect to previous url or default to home page
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
      } finally {
        router.push(this.returnUrl || '/');
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem('User');
      router.push('/login');
    },
  },
});
