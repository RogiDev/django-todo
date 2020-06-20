import Vue from "vue";
import Vuex from "vuex";
import UserModule from './modules/User.module.js'
import TaskModule from './modules/Task.module.js'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loading: false
  },
  modules: {
    UserModule,
    TaskModule
   }
});
export default store;
