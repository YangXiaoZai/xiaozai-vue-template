<!--  -->
<template>
  <div class="container">
    <h1>test page</h1>
    <input v-model="id" type="text" />
    <button @click="getData(id)">查询</button>
    <button @click="handleCreateClick">新增</button>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <span>{{ item.name }} - {{ item.class }}</span>
        <button @click="handleUpdateClick(item.id)">更新</button>
        <button @click="handleDeleteClick(item.id)">删除</button>
      </li>
    </ul>
    <a-modal ref="form" v-model="modalVisible" @ok="handleModalOK" @cancel="handleModalClose">
      <a-form-model-item label="姓名">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="班级">
        <a-input v-model="form.class" />
      </a-form-model-item>
    </a-modal>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      id: null,
      data: [],
      modalVisible: false,
      form: {
        name: '',
        class: '',
        id: null,
      },
      url: process.env.VUE_APP_BASE_URL + '/class',
    };
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getData();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  methods: {
    async getData(id = '', key = 'data') {
      let res;
      if (id) {
        res = await fetch(`${this.url}/${id}`);
      } else {
        res = await fetch(this.url);
      }
      const { data } = await res.json();
      this[key] = data;
    },
    async handleDeleteClick(id) {
      await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      });
      this.getData();
    },
    async add() {
      await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(this.form),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      this.getData();
      this.modalVisible = false;
    },
    async update(id) {
      await fetch(`${this.url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(this.form),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      this.getData();
      this.modalVisible = false;
    },
    handleCreateClick() {
      this.modalVisible = true;
    },
    async handleUpdateClick(id) {
      await this.getData(id, 'form');
      this.form = this.form[0];
      this.form.id = id;
      this.modalVisible = true;
    },
    async handleModalOK() {
      let id = this.form.id;
      if (id) {
        await this.update(id);
      } else {
        await this.add();
      }
      this.handleModalClose();
    },
    handleModalClose() {
      this.form = {
        name: '',
        class: '',
        id: null,
      };
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  color: @commonWidth;
}
</style>
