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
    <div class="list-container">
      <a-row :gutter="[40, 24]">
        <a-col v-for="(item, index) in listData" :key="index" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <a-skeleton active :loading="skeletonLoading">
            <a-card hoverable @click="$router.push(`/article/preview/${item.id}`)">
              <img slot="cover" alt="封面" :src="fileBaseUrl + item.cover" />
              <a-card-meta :title="item.title">
                <template slot="description">{{ item.createAt }}</template>
              </a-card-meta>
            </a-card>
          </a-skeleton>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { getArticleType, getArticle } from '@/api/article';
export default {
  components: {},
  data() {
    return {
      articleType: [],
      form: {
        title: null,
        type: undefined,
      },
      listData: null,
      skeletonLoading: true,
      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
    };
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getArticleType();
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
    async getArticleType() {
      const { data } = await getArticleType();
      this.articleType = data;
    },
    async getArticle() {
      this.skeletonLoading = true;
      const params = this.form;
      const { data } = await getArticle(params);

      console.log(data);
      this.listData = data.rows;
      this.skeletonLoading = false;
    },
    reset() {
      // TODO优化
      this.form.title = null;
      this.form.type = undefined;
      this.getArticle();
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .list-container {
    margin-top: 24px;
  }
}
</style>
