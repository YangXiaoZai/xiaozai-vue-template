import { getToken, setToken } from '@/utils/auth';
import { login } from '@/api/user';

const state = {
  token: getToken(),
};
const mutations = {
  SET_TOEK: (state, token) => {
    state.token = token;
  },
};
const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then((response) => {
        const { data } = response;
        const { token } = data;
        commit('SET_TOEK', token);
        setToken(token);
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
