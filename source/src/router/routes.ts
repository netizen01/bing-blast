import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/IndexPage.vue'),
  },
];

export default routes;
