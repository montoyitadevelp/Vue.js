import Lists from '../pages/users/Lists.vue';
import Layout from '../pages/users/Layout.vue';

export default {
  path: '/users',
  component: Layout,
  children: [{ path: 'all', component: Lists }],
};
