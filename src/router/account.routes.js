import Layout from '../pages/accounts/Layout.vue';
import Register from '../pages/accounts/Register.vue';
import Login from '../pages/accounts/Login.vue';

export default {
  path: '/users',
  component: Layout,
  children: [
    { path: '', redirect: 'login' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
  ],
};
