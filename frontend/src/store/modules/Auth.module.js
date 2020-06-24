import axios from 'axios';
import router from "../../router";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
const AuthModule = {
  state: {

    authUser:null,
    isAuthenticated: false,
    jwt: localStorage.getItem('token') || null,

  },
  mutations: {
    login: (state, username) => {
      state.authUser = username;
      state.isAuthenticated = !state.isAuthenticated;
    },
    logout: (state) => {
      state.jwt = '';
      state.authUser = null;
      state.isAuthenticated = !state.isAuthenticated
    }
  },
  getters: {
    username: state => state.authUser,
    isAuth: state => state.isAuthenticated,
    token: state => state.jwt
  },
  actions: {
    loginUser({commit}, user) {
      axios.post('http://localhost:8000/api/login', user)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem(
              "token",
              res.data.token
            );
            localStorage.setItem("user_id",
              res.data.user_id
            );
          }
          commit("login",
            {authUser: res.data, isAuthenticated: true})
          router.push('/')
        })
    },
    registerUser({commit, state}, user) {
      axios.post('http://localhost:8000/api/users/', user).then(res => {
          router.push('/login')
        }
      )

    },
    logoutUser({commit, state}) {
      commit('logout');
    }
  }
};

export default AuthModule;
