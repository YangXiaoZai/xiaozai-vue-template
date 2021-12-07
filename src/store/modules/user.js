import { getToken, setToken } from '@/utils/auth';
import { login, getInfo } from '@/api/user';

const state = {
  token: getToken(),
  roles: ['admin'],
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },

};
const actions = {
  login({ commit }, userInfo) {
    const { user, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ user: user.trim(), password }).then((res) => {
        const { data } = res;
        const { token } = data;
        commit('SET_TOKEN', token);
        setToken(token);
        resolve();
      }).catch((err) => {
        reject(err);
      });
    });
  },
  getInfo({ state, commit }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then((res) => {
        // 拿roles
        const {
          roles, name, avatar, introduction,
        } = res?.data;

        if (!roles || roles.length <= 0) {
          reject(new Error('getInfo接口roles必须为数组'));
        }

        commit('SET_ROLES', roles);
        commit('SET_NAME', name);
        commit('SET_AVATAR', avatar);
        commit('SET_INTRODUCTION', introduction);

        resolve(roles);
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
