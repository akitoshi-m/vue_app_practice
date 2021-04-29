import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

// LikeNumberはグローバル登録されている
Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);

new Vue({
  render: h => h(App),
}).$mount('#app')
