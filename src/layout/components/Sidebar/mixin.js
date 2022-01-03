export default {
  data() {
    // 用户处理只有一个children
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    // 判断是否只有一个children 或者 没有children
    hasOneShowingChild(children = [], parent) {
      // 过滤出item.hidden为false
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        }
        this.onlyOneChild = item;
        return true;
      });
      if (showingChildren.length === 0) {
        // 无children
        // noShowingChildren
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      if (showingChildren.length === 1) {
        // 只有一个children
        return true;
      }

      return false;
    },
  },
};
