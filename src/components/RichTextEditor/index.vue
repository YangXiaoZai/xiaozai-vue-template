<!-- 富文本编辑器 -->

<!-- https://github.com/wangeditor-team/wangEditor -->
<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :default-config="toolbarConfig" :mode="mode" />
    <Editor
      v-model="html"
      style="height: 500px; overflow-y: hidden"
      :default-config="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { message } from 'ant-design-vue';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { UPLOAD_FULL_URL, MAX_IMG_SIZE } from '@/api/upload';
import { getToken } from '@/utils/auth';

export default Vue.extend({
  components: { Editor, Toolbar },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
      html: '',
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        // excludeKeys: [ /* 隐藏哪些菜单 */ ],
      },
      editorConfig: {
        placeholder: '请输入内容...',
        MENU_CONF: {
          uploadImage: {
            server: UPLOAD_FULL_URL,
            // form-data fieldName ，默认值 'wangeditor-uploaded-image'
            fieldName: 'file',
            // 单个文件的最大体积限制，默认为2M
            maxFileSize: MAX_IMG_SIZE,
            // 最多可上传几个文件，默认为 100
            maxNumberOfFiles: 20,
            // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['image/*'],
            // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
            meta: {
              // token: 'xxx',
              // otherKey: 'yyy'
            },
            // 将 meta 拼接到 url 参数中，默认 false
            metaWithUrl: false,
            // 自定义增加 http  header
            headers: {
              Authorization: 'Bear ' + getToken(),
            },
            // 跨域是否传递 cookie ，默认为 false
            withCredentials: false,
            // 超时时间，默认为 10 秒
            timeout: 5 * 1000, // 5 秒

            // 上传之前触发
            onBeforeUpload(file) {
              // file 选中的文件，格式如 { key: file }
              return file;

              // 可以 return
              // 1. return file 或者 new 一个 file ，接下来将上传
              // 2. return false ，不上传这个 file
            },
            // 上传进度的回调函数
            onProgress(progress) {
              // progress 是 0-100 的数字
              console.log('progress', progress);
            },
            // 单个文件上传成功之后
            onSuccess(file, res) {
              message.success('上传成功');
              console.log(`${file.name} 上传成功`, res);
            },
            // 单个文件上传失败
            onFailed(file, res) {
              message.warning('上传失败请联系管理员');
              console.log(`${file.name} 上传失败`, res);
            },
            // 上传错误，或者触发 timeout 超时
            onError(file, err, res) {
              if (file.size > MAX_IMG_SIZE) {
                message.warn(`上传失败，图片最大不超过${MAX_IMG_SIZE / 1024 / 1024}M`);
                return;
              }
              message.warning('上传出错请联系管理员');
              console.log(`${file.name} 上传出错`, err, res);
            },
            // 自定义插入图片
            customInsert(res, insertFn) {
              // res 即服务端的返回结果
              const fileBaseUrl = process.env.VUE_APP_FILE_BASE_URL;
              // 从 res 中找到 url alt href ，然后插图图片
              insertFn(fileBaseUrl + res.data.path);
            },
          },
        },
      },
      mode: 'default', // or 'simple'
    };
  },
  watch: {
    content: {
      handler(val) {
        this.html = val;
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
  },
});
</script>
<style lang="less" scoped>
.container {
}
</style>
