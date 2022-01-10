import defaultSettings from '@/settings.js';

const { title, pageStyle, themeColor, navigationMode, sidebarLogo, contentWidth, fixedHeader, fixedSide } =
  defaultSettings;

const state = {
  title,
  pageStyle,
  themeColor,
  navigationMode,
  sidebarLogo,
  contentWidth,
  fixedHeader,
  fixedSide,
  collapsed: false, //菜单栏是否折叠
};

const mutations = {
  CHANGE_SETTING(state, { key, value }) {
    // if (state.hasOwnProperty(key)) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
