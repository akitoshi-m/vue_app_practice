import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersProfile from './views/UsersProfile.vue';
import UsersPosts from './views/UsersPosts.vue';

// プラグインを適用する
Vue.use(Router);

// Routerの中身をVue.jsに適用させる
export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home}, 
    { 
      path: "/users/:id",
      component: Users,
      props: true,
      children: [
        { path: "profile", component: UsersProfile, name: "users-id-profile" },
        { path: "posts", component: UsersPosts }
      ]
    }
  ]
});
