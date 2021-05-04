import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count";

// 指定したプラグインをVue全体の中で使用する宣言
Vue.use(Vuex);

// Storeはデータを置いておく場所のようなもの
export default new Vuex.Store({
  modules: {
    count
  }
});
