import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
    gitToken: "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",
 },
 mutations: {
    setToken(state, token) {
      state.token = token;
    },
 },
 actions: {},
 getters: {},
});
