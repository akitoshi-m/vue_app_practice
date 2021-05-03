import Vue from "vue";
import Vuex from "vuex";

// 指定したプラグインをVue全体の中で使用する宣言
Vue.use(Vuex);

// Storeはデータを置いておく場所のようなもの
export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    doubleCount: state => state.count * 2
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
  }
});
