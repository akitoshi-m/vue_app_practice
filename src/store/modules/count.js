const state = {
  count: 2
};
const getters = {
  doubleCount: state => state.count * 2
};
const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  }
};
export default {
  state,
  getters,
  mutations
};
