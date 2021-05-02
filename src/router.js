import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

// プラグインを適用する
Vue.use(Router)

// Routerの中身をVue.jsに適用させる
export default new Router({
  mode: "history",
  routes: [{ path: "/", component: Home}, { path: "/users", component: Users }]
});
