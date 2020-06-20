import * as axios from 'axios';

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
const UserModule = {
  state: {

    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem('token') || null,
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'https://127.0.0.1:8000/api/login/',
      refreshJWT: 'https://127.0.0.1:8000/api/auth/refresh_token/',
      baseUrl: 'https://127.0.0.1:8000/api/'
    }

  },
  mutations: {
    login: (state, user, isAuth) => {
      state.authUser = user;
      state.isAuthenticated = isAuth;
    },
    updateToken: (state, newToken) => {
      localStorage.setItem('token', newToken);
      state.jwt = newToken
    },
    removeToken: (state) => {
      localStorage.removeItem('token');
      state.jwt = null;
    }
  },
  getters: {
    username: state => state.authUser
  },
  actions: {
     loginUser({},user){
            axios.post("http://127.0.0.1:8000/api/login",
              user
            ).then(res => {
                if(res.data.token){
                    localStorage.setItem(
                        "token",
                        res.data.token
                    );
                }
            });
        },
        addUser: ({commit},user) => {
            commit('login',user);
        }
  },
};

export default UserModule;
