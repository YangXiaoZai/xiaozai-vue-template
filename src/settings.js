module.exports = {
  title: '后台管理系统',

  // 右侧setting是否展示
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  // 页面整体风格
  /**
   * @type {string} "light" | "dark"
   * @description Switch light or dark pageStyle
   */
  pageStyle: 'light',

  // 主题色
  themeColor: '#1890FF',

  // 导航模式
  /**
   * @type {string} "inline" | "horizontal"
   * @description Toggle vertical or horizontal navigation bar
   */
  navigationMode: 'inline',

  // LOGO
  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  // 内容区域
  /**
   * @type {boolean} true | false
   * @description Switch fixed or fluid in content width
   */
  contentWidth: true,

  // 固定Header
  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  // 固定侧边栏
  /**
   * @type {boolean} true | false
   * @description Whether fix the side
   */
  fixedSide: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'development'],
};
