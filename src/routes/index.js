import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => console.log(error));
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => console.log(error));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => console.log(error));
      },
    },
    {
      path: '/user/:userId',
      component: UserView,
      beforeEnter: (to, from, next) => {
        store.commit('RESET_USER');
        store
          .dispatch('FETCH_USER', to.params.userId)
          .then(() => next())
          .catch((error) => console.log(error));
      },
    },
    {
      path: '/item/:itemId',
      component: ItemView,
      beforeEnter: (to, from, next) => {
        store.commit('RESET_ITEM');
        store
          .dispatch('FETCH_ITEM', to.params.itemId)
          .then(() => next())
          .catch((error) => console.log(error));
      },
    },
  ],
});
