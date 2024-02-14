import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/IndexView.vue'),
  },

  {
    path: '/menu',
    component: () => import('pages/MenuView.vue'),
  },

  {
    path: '/notes',
    component: () => import('pages/NotesView.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
