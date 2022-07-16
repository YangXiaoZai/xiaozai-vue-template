<!-- 预览 -->
<template>
  <div class="container">
    <a-row type="flex" justify="center">
      <a-col :span="20" class="detail-container">
        <h3 class="title">{{ article.title }}</h3>
        <div class="desc">
          <span>
            {{ article.updatedAt }}
          </span>
        </div>
        <div class="rich-text-detail-content" v-html="article.content"></div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getArticle } from '@/api/article';
export default {
  components: {},
  data() {
    return {
      article: {},
    };
  },
  created() {
    console.log(this.$route);
    const params = {
      id: Number(this.$route.params.id),
    };
    this.getArticle(params);
  },
  methods: {
    async getArticle(params) {
      const { data } = await getArticle(params);
      this.article = data;
    },
  },
};
</script>
<style lang="less" scoped>
.detail-container {
  padding: 36px 50px 24px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: left;
    opacity: 0.5;
    text-align: center;
  }
  .rich-text-detail-content {
    min-height: 750px;
    // overflow-y: scroll;
    margin-top: 15px;
    /deep/ img {
      max-width: 100%;
    }
  }
}
</style>
