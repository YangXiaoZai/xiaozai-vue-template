<!-- 创建文章 -->
<template>
  <div class="container">
    <a-form-model ref="form" :model="form" :rules="rules" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-model-item label="文章标题" prop="title">
        <a-input v-model="form.title" placeholder="请输入文章标题"> </a-input>
      </a-form-model-item>
      <a-form-model-item label="文章类型" prop="type">
        <a-select v-model="form.type" placeholder="请选择文章类型">
          <a-select-option v-for="(item, index) in articleType" :key="index" :value="item.code">{{
            item.name
          }}</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="封面" prop="cover">
        <div class="cover-container" @click="modal.visible = true">
          <img v-if="form.cover" class="cover" :src="fileBaseUrl + form.cover" />
          <a-icon v-else type="plus" class="cover-hover" />
        </div>
      </a-form-model-item>
      <a-form-model-item label="内容" prop="content">
        <RichTextEditor ref="RichTextEditor" :content="form.content"></RichTextEditor>
      </a-form-model-item>
      <a-form-model-item>
        <div class="text-center">
          <a-space size="large">
            <a-button type="primary" @click="saveArticle">确定</a-button>
            <a-button @click="$router.go(-1)">返回</a-button>
          </a-space>
        </div>
      </a-form-model-item>
    </a-form-model>

    <!-- 图片裁剪 -->
    <Cropper :modal="modal" :crop-width="300" :border-radius="false" @getCorpImg="getCorpImg"> </Cropper>
  </div>
</template>

<script>
import Cropper from '@/components/Cropper/index.vue';
import RichTextEditor from '@/components/RichTextEditor/index.vue';
import { getArticleType, getArticle, createArticle, updateArticle } from '@/api/article';
import { required } from '@/utils/formValidation';

export default {
  components: { Cropper, RichTextEditor },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: {
        title: '裁剪封面',
        visible: false,
        cover: '',
      },
      form: {
        title: '',
        type: undefined,
        cover: '',
        content: '',
      },
      rules: {
        title: [required('请输入标题')],
        type: [required('请选择文章类型', 'change')],
        cover: [required('请上传封面')],
        content: [required('请输入内容')],
      },
      articleType: [],
      id: null,
      fileBaseUrl: process.env.VUE_APP_FILE_BASE_URL,
    };
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getArticleType();
    if (this.isEdit) {
      this.id = this.$route.params.id;
      this.getArticle({ id: this.id });
    }
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
    async getCorpImg({ path }) {
      this.form.cover = path;
    },
    // 获取文章类型
    async getArticleType() {
      const { data } = await getArticleType();
      this.articleType = data;
    },
    // 获取文章详情
    async getArticle(id) {
      const { data } = await getArticle(id);
      this.form = data;
    },
    // 保存文章
    saveArticle() {
      this.form.content = this.$refs.RichTextEditor.editor.getHtml();
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.isEdit ? this.updateArticle() : this.createArticle();
        } else {
          return false;
        }
      });
    },
    // 创建文章
    async createArticle() {
      const params = this.form;
      await createArticle(params);
      this.$message.success('创建成功');
      setTimeout(() => {
        this.$router.go(-1);
      }, 1000);
    },
    // 更新文章
    async updateArticle() {
      const params = { id: this.id, ...this.form };
      await updateArticle(params);
      this.$message.success('更新成功');
      setTimeout(() => {
        this.$router.go(-1);
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .cover-container {
    width: 300px;
    height: 200px;
    border-radius: 6px;
    position: relative;
    border: 2px dashed #dadada;
    .cover {
      width: 100%;
      height: 100%;
    }
    .cover-hover {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 46px;
      color: @primaryColor;
    }
  }
}
</style>
