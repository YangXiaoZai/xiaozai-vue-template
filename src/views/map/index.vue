<!-- map页面 -->
<template>
  <div class="container" id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  // import amap
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  methods: {
    initAMapLoader() {
      AMapLoader.load({
        key: '8874e729f49784e4e9aead1d833125ba', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // AMapUI: { // 是否加载 AMapUI，缺省不加载
        //   version: '1,1', // AMapUI 缺省 1.1
        //   plugins: [], // 需要加载的 AMapUI ui插件
        // },
        Loca: {
          version: '2.0',
        },
      }).then((AMap) => {
        this.setMap(AMap);
      });
    },
    setMap(AMap) {
      // eslint-disable-next-line no-unused-vars
      const map = new AMap.Map('container', {
        zooms: [4, 18],
        zoom: 4,
        showLabel: true, // 是否展示地图上的文字，默认为true
        viewMode: '3D',
        center: [116.397428, 39.90923], // PC端 中心点坐标
        // center: [106.44966, 36.441223], // 移动端 中心点坐标
        mapStyle: 'amap://styles/ac6e4970dc57bef1070500383f9baa31',
        resizeEnable: true,
      });

      const loca = new Loca.Container({
        map,
        opacity: 1,
      });

      const geo = new Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/cuisine.json',
      });

      const pl = window.pl = new Loca.PointLayer({
        zIndex: 10,
        blend: 'lighter',
      });

      const style = {
        radius: 3.5,
        unit: 'px',
        color: '#3C1FA8',
        borderWidth: 0,
        blurWidth: 3.5,
      };
      pl.setSource(geo);
      pl.setStyle(style);
      loca.add(pl);

      const dat = new Loca.Dat();
      dat.addLayer(pl);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initAMapLoader();
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
