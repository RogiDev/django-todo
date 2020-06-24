import Vue from "vue";
import Vuex from "vuex";
import AuthModule from './modules/Auth.module.js'
import TaskModule from './modules/Task.module.js'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loading: false
  },
  modules: {
    AuthModule,
    TaskModule
  }
});
export default store;
