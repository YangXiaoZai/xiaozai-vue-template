<!-- 列表页 -->
<!-- TODO 此页面为demo，实际项目中需要考虑交互 -->
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
            <a-button type="primary" @click="search">搜索</a-button>
          </a-space>
        </a-form-item>
      </a-form>
      <a-button icon="plus" type="primary" @click="$router.push('/article/create')">创建文章</a-button>
    </div>

    <a-spin :spinning="loading && !busy">
      <div class="container-shadow">
        <div
          v-show="listData.length > 0"
          v-infinite-scroll="loadMore"
          :infinite-scroll-disabled="busy"
          :infinite-scroll-distance="10"
          class="list-container"
        >
          <a-row :gutter="[40, 24]" class="row-container">
            <a-col v-for="(item, index) in listData" :key="index" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
              <a-card hoverable @click="$router.push(`/article/preview/${item.id}`)">
                <img slot="cover" alt="封面" :src="fileBaseUrl + item.cover" />
                <a-card-meta :title="item.title">
                  <template slot="description">{{ item.createAt }}</template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <a-empty v-show="listData.length == 0"></a-empty>
      </div>
    </a-spin>
  </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll';
import { getArticleType, getArticle } from '@/api/article';
export default {
  components: {},
  directives: { infiniteScroll },
  data() {
    return {
      articleType: [],
      form: {
        title: null,
        type: undefined,
      },
      pagination: {
        current: 1,
        pageSize: 24,
      },
      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
      listData: [],
      busy: false,
      loading: false,
    };
  },
  created() {
    this.getArticleType();
  },
  methods: {
    async getArticleType() {
      const { data } = await getArticleType();
      this.articleType = data;
    },
    async getArticle() {
      const params = {
        ...this.pagination,
        ...this.form,
      };
      const { data } = await getArticle(params);
      if (data.rows.length == 0) {
        this.$message.info('已经没有数据了');
        this.busy = true;
        this.loading = false;
        return;
      }
      this.listData = this.listData.concat(data.rows);
      this.loading = false;
    },
    reset() {
      this.form.title = null;
      this.form.type = undefined;
      this.search();
    },
    search() {
      this.pagination.current = 1;
      this.pagination.pageSize = 24;
      this.listData = [];
      this.getArticle();
      this.pagination.current++;
    },
    async loadMore() {
      this.loading = true;
      await this.getArticle();
      this.pagination.current++;
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .container-shadow {
    margin-top: 24px;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    border-radius: 6px;
    cursor: pointer;
    transition: 0.5s;
    min-height: 500px;
    &:hover {
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.65);
    }
    .list-container {
      overflow: auto;
      overflow-x: hidden;
      .row-container {
        overflow: auto;
      }
    }
  }
}
</style>
