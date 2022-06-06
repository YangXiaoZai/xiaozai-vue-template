<!-- 列表页 -->
<template>
  <div class="container">
    <div class="search-container flex-between">
      <a-form layout="inline" :form="form">
        <a-form-item label="文章标题">
          <a-input v-model="form.title" placeholder="请输入文章标题"> </a-input>
        </a-form-item>

        <a-form-item label="文章类型">
          <a-select v-model="form.type" placeholder="请选择文章类型" style="min-width: 150px">
            <a-select-option v-for="(item, index) in articleType" :key="index" :value="item.code">{{
              item.name
            }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button @click="reset">重置</a-button>
            <a-button type="primary" @click="getArticle">搜索</a-button>
          </a-space>
        </a-form-item>
      </a-form>
      <a-button icon="plus" type="primary" @click="$router.push('/article/create')">创建文章</a-button>
    </div>
    <div class="table-container">
      <a-table
        :columns="columns"
        :data-source="tableData"
        :row-key="(row, index) => index"
        :pagination="pagination"
        :loading="tableLoading"
        @change="handleTableChange"
      >
        <div slot="cover" slot-scope="text">
          <img :src="fileBaseUrl + text" alt="封面" width="50" />
        </div>
        <!-- 操作栏 -->
        <div slot="action" slot-scope="text, record">
          <a-button type="link" @click="$router.push(`/article/preview/${record.id}`)">查看详情</a-button>
          <a-divider type="vertical" />
          <a-button type="link" @click="$router.push(`/article/edit/${record.id}`)">编辑</a-button>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除？" @confirm="handleDelete(record)">
            <a-button type="link">删除</a-button>
          </a-popconfirm>
        </div>
      </a-table>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'center',
    customRender: (text, record, index) => `${index + 1}`,
    width: 80,
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '封面',
    dataIndex: 'cover',
    key: 'cover',
    align: 'center',

    scopedSlots: { customRender: 'cover' },
  },
  {
    title: '更新日期',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    align: 'center',
  },
  {
    title: '发布日期',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    scopedSlots: { customRender: 'action' },
  },
];
import { getArticleType, getArticle, destroyArticle } from '@/api/article';
export default {
  components: {},
  data() {
    return {
      columns,
      tableData: [],
      articleType: [],
      form: {
        title: null,
        type: undefined,
      },
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total) => `共${total}条`,
      },
      tableLoading: false,
      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
    };
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    await this.getArticleType();
    this.getArticle();
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
    // 获取文章类型
    async getArticleType() {
      const { data } = await getArticleType();
      this.articleType = data;
    },
    // 获取文章列表
    async getArticle() {
      this.tableLoading = true;
      const params = {
        current: this.pagination.current,
        pageSize: this.pagination.pageSize,
        ...this.form,
      };
      const {
        data: { rows, count },
      } = await getArticle(params);
      // 处理类型 （有时候会后台会处理，有时候需前端处理）
      this.tableData = rows.map((item) => {
        item.type = this.articleType.find((type) => item.type == type.code)['name'];
        return item;
      });
      this.pagination.total = count;
      this.tableLoading = false;
    },
    // 切换分页
    handleTableChange(pagination) {
      this.pagination = pagination;
      this.getArticle();
    },
    // 重置
    reset() {
      this.form.title = null;
      this.form.type = undefined;
      this.pagination.current = 1;
      this.pagination.pageSize = 10;
      this.getArticle();
    },
    async handleDelete({ id }) {
      try {
        await destroyArticle(id);
        this.$message.success('删除成功');
        this.getArticle();
      } catch (error) {
        console.log('删除文章失败', error);
        throw error;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .table-container {
    margin-top: 24px;
  }
}
</style>
