<!-- 指令权限 -->
<template>
  <div class="container">
    <a-space direction="vertical" size="middle">
      <a-space align="start">
        <a-card title="权限为admin按钮可见">
          <pre><code> v-permission="['admin']" </code></pre>
          <a-button v-permission="['admin']" type="primary">操作</a-button>
        </a-card>
        <a-card title="权限为editor按钮可见">
          <pre><code> v-permission="['editor']" </code></pre>
          <a-button v-permission="['editor']" type="primary">操作</a-button>
        </a-card>
        <a-card title="权限为admin或editor按钮可见">
          <pre><code> v-permission="['admin','editor']" </code></pre>
          <a-button v-permission="['admin', 'editor']" type="primary">操作</a-button>
        </a-card>
      </a-space>

      <template>
        <a-alert message="大多数情况下，我们均可以直接使用v-permission" banner />
        <a-alert message="但是诸如table、tab以及其动态渲染DOM的情况下，只能通过v-if来处理" banner />
      </template>

      <a-tabs type="card">
        <a-tab-pane v-if="checkPermission(['admin'])" key="Admin" tab="Admin">
          <p>权限为admin可见</p>
          <pre><code> v-if="checkPermission(['admin'])" </code></pre>
        </a-tab-pane>
        <a-tab-pane v-if="checkPermission(['editor'])" key="Editor" tab="Editor">
          <p>权限为editor可见</p>
          <pre><code> v-if="checkPermission(['editor'])" </code></pre>
        </a-tab-pane>
        <a-tab-pane v-if="checkPermission(['admin', 'editor'])" key="Admin or Editor" tab="Admin or Editor">
          <p>权限为admin或editor可见</p>
          <pre><code> v-if="checkPermission(['admin', 'editor'])" </code></pre>
        </a-tab-pane>
      </a-tabs>
    </a-space>
  </div>
</template>

<script>
import permission from '@/directive/permission/index'; //权限判断指令
import checkPermission from '@/utils/permission.js'; // 权限判断函数

export default {
  directives: { permission },
  data() {
    return {};
  },
  methods: {
    checkPermission,
  },
};
</script>
<style lang="less" scoped></style>
