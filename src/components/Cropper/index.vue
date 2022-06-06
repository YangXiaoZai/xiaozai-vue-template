<!-- 图片裁剪 -->
<template>
  <a-modal
    :title="modal.title"
    :visible="modal.visible"
    :footer="null"
    :mask-closable="false"
    :width="800"
    @cancel="modal.visible = false"
  >
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :md="12" :style="{ height: '350px' }">
        <vueCropper
          ref="cropper"
          :img="options.img"
          :info="true"
          :auto-crop="options.autoCrop"
          :auto-crop-width="cropWidth"
          :auto-crop-height="cropHeight"
          :fixed-box="options.fixedBox"
          :center-box="options.centerBox"
          @realTime="realTime"
        ></vueCropper>
      </a-col>
      <a-col :xs="24" :md="12" :style="{ height: '350px' }" class="avatar-upload-container">
        <div
          class="avatar-upload-preview"
          :style="{
            maxWidth: '300px',
            maxHeight: '200px',
            width: cropWidth + 'px',
            height: cropHeight + 'px',
            borderRadius: borderRadius ? '50%' : 'null',
          }"
        >
          <img :src="previews.url" :style="previews.img" />
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :xs="24" :md="12">
        <a-space>
          <a-upload name="file" :before-upload="beforeUpload" :show-upload-list="false">
            <a-button icon="upload">选择图片</a-button>
          </a-upload>
          <a-button icon="plus" @click="changeScale(1)" />
          <a-button icon="minus" @click="changeScale(-1)" />
          <a-button icon="undo" @click="rotateLeft" />
          <a-button icon="redo" @click="rotateRight" />
        </a-space>
      </a-col>

      <a-col :xs="24" :md="12" class="flex-center">
        <a-button type="primary" @click="saveImg">保存</a-button>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
import { VueCropper } from 'vue-cropper';
import { upload } from '@/api/upload';

export default {
  components: { VueCropper },
  props: {
    modal: {
      type: Object,
      default: () => {
        return {
          title: '裁剪图片',
          visible: false,
        };
      },
    },
    cropWidth: {
      type: Number,
      default: 200, //最大300
    },
    cropHeight: {
      type: Number,
      default: 200, //最大200
    },
    // 是否为圆
    borderRadius: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      options: {
        img: '',
        autoCrop: true,
        fixedBox: true,
        centerBox: true,
      },
      filename: '',
      previews: {},
    };
  },
  created() {},
  methods: {
    // 裁剪时移动移动图片
    realTime(data) {
      this.previews = data;
    },
    // 放大或缩小
    changeScale(num = 1) {
      this.$refs.cropper.changeScale(num);
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    beforeUpload(file) {
      this.filename = file.name;
      const reader = new FileReader();
      // 把Array Buffer转化为blob 如果是base64不需要
      // 转化为base64
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.options.img = reader.result;
      };
      return false;
    },
    // 上传图片（点击上传按钮）
    async saveImg() {
      this.$refs.cropper.getCropBlob(async (data) => {
        const formData = new FormData();
        formData.append('file', data, this.filename);
        try {
          const {
            data: { path, filename },
          } = await upload(formData);
          this.$message.success('上传成功');
          this.$emit('getCorpImg', { path, filename });
          this.modal.visible = false;
        } catch (error) {
          this.$message.success('上传失败');
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.avatar-upload-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar-upload-preview {
    box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    overflow: hidden;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
