import { getToken, setToken, removeToken } from '@/utils/auth';
import { login, getInfo } from '@/api/user';

const state = {
  token: getToken(),
  roles: [],
  userInfo: null,
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_NAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo;
  },
};
const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username, password })
        .then((res) => {
          const { data } = res;
          const { token } = data;
          commit('SET_TOKEN', token);
          setToken(token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then((res) => {
          // 拿roles
          const { roles, nickname, avatar, introduction } = res?.data;
          if (!roles || roles.length <= 0) {
            reject(new Error('getInfo接口roles必须为数组'));
          }

          commit('SET_ROLES', roles);
          commit('SET_NAME', nickname);
          commit('SET_AVATAR', avatar);
          commit('SET_INTRODUCTION', introduction);

          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    commit('SET_TOKEN', null);
    commit('SET_ROLES', null);
    removeToken();
  },
  getUserInfo({ commit }) {
    commit('SET_USER_INFO', null);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
