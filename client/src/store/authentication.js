// import HTTP from '../http';
import axios from 'axios';
import router from '../router';

export default {
  namespaced: true,
  state: {
    registerEmail: 'test',
    registerPassword: '2122',
    registerError: null,
    token: null,
  },
  actions: {
    register({ commit, state }) {
      return axios.post('/api/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      }).then(({ data }) => {
        commit('setToken', data.token);
        router.push('/');
      }).catch(() => {
        commit('setRegisterError', 'An error occured trying to create your account');
      });
    },
  },
  mutations: {
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setToken(state, token) {
      state.token = token;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
  },
};
