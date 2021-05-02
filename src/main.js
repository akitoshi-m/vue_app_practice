import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';
import router from "./router";

// LikeNumberはグローバル登録されている
Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
Vue.directive("border", function(el, binding) {
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  el.style.borderStyle = binding.arg
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
