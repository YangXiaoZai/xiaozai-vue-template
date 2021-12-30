<!--  -->
<template>
  <div id='container'>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      // 省province，市city，区县county，乡镇town
      SOC: 'CHN',
      colors: {},
      GDPSpeed: {
        520000: 10, // 贵州
        540000: 10, // 西藏
        530000: 8.5, // 云南
        500000: 8.5, // 重庆
        360000: 8.5, // 江西
        340000: 8.0, // 安徽
        510000: 7.5, // 四川
        350000: 8.5, // 福建
        430000: 8.0, // 湖南
        420000: 7.5, // 湖北
        410000: 7.5, // 河南
        330000: 7.0, // 浙江
        640000: 7.5, // 宁夏
        650000: 7.0, // 新疆
        440000: 7.0, // 广东
        370000: 7.0, // 山东
        450000: 7.3, // 广西
        630000: 7.0, // 青海
        320000: 7.0, // 江苏
        140000: 6.5, // 山西
        460000: 7, // 海南
        310000: 6.5, // 上海
        110000: 6.5, // 北京
        130000: 6.5, // 河北
        230000: 6, // 黑龙江
        220000: 6, // 吉林
        210000: 6.5, // 辽宁
        150000: 6.5, // 内蒙古
        120000: 5, // 天津
        620000: 6, // 甘肃
        610000: 8.5, // 甘肃
        710000: 2.64, // 台湾
        810000: 3.0, // 香港
        820000: 4.7, // 澳门

      },
      disCountry: null, // 国家
      disProvinve: null, // 省份
      infoWindow: null, // 自定义弹框,
      depth: 0, // 0全国，1省，2市
      map: null,
      currentArea: {
        name: null,
        adcode: null,
      },
      level: 0,
    };
  },
  computed: {},
  methods: {
    initMap() {
      // eslint-disable-next-line no-unused-vars
      this.map = new AMap.Map('container', {
        viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
        zoom: 4, // 初始化地图层级
        center: [116.397428, 39.90923], // 初始化地图中心点
        mapStyle: 'amap://styles/whitesmoke',
      });
      this.initProvinceMap();
    },
    initProvinceMap() {
      this.disProvinve = new AMap.DistrictLayer.Province({
        depth: 0,
        styles: {
          'province-stroke': 'white',
          'city-stroke': 'rgba(255,255,255,0.5)',
          fill: '#ede1d9',
        },
      });
      this.disProvinve.setMap(this.map);
      // TODD 处理城市的点击
      this.map.on('click', this.handleMapClick);
      // this.map.on('mouseover', this.handleMapMouseover);
      // this.map.on('mouseout', this.handleMapMouseout);
    },
    initProvince() {
      if (this.disProvinve) {
        this.disProvinve.setMap(null);
      }
      // 设置中心
      // this.map.setCity(this.currentArea.name);

      this.disProvinve = new AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: [this.currentArea.adcode],
        depth: 1,
        styles: {
          fill: (properties) => {
            const { adcode } = properties;
            return this.getColorByAdcode(adcode);
          },
          'province-stroke': 'white',
          'city-stroke': 'rgba(255,255,255,0.5)',
        },
      });
      this.disProvinve.setMap(this.map);
      // this.map.off('click', this.handleMapClick);
      // this.map.on('click', this.handleCityClick, this.disProvinve);
    },
    handleMapClick(event) {
      // 设置点击的行政区
      const px = event.pixel;
      // 拾取所在位置的行政区

      // 获取所在省份
      const provinceProps = this.disProvinve.getDistrictByContainerPos(px);

      // // props存在，则为国内行政区域
      if (provinceProps) {
        console.log('provinceProps', provinceProps);
        const { NAME_CHN: name, adcode } = provinceProps;
        this.currentArea = { name, adcode };
        console.log('currentArea', this.currentArea);

        this.initProvince();

        // console.log('event', event);
        // console.log('provinceProps', provinceProps);

        // const cityProvince = this.disProvinve.getDistrictByContainerPos(px);
        // console.log('cityProvince', cityProvince);

        // if (this.disProvinve) {
        //   // const cityProvince = this.disProvinve.getDistrictByContainerPos(px);
        //   // console.log('cityProvince', cityProvince);
        //   // const { NAME_CHN: name, adcode } = provinceProps;
        //   // if (adcode.toFixed(2) === this.currentArea.adcode.toFixed(2)) {
        //   //   // 点击省内的某市区
        //   //   // console.log('cityProvince', cityProvince);
        //   //   // init
        //   //   this.disProvinve.setMap(null);
        //   //   this.map.setCity(name);
        //   //   this.disProvinve = new AMap.DistrictLayer.Province({
        //   //     zIndex: 12,
        //   //     adcode: [adcode],
        //   //     depth: 2,
        //   //     styles: {
        //   //       // fill: (properties) => {
        //   //       //   // properties为可用于做样式映射的字段，包含
        //   //       //   // NAME_CHN:中文名称
        //   //       //   // adcode_pro
        //   //       //   // adcode_cit
        //   //       //   // adcode
        //   //       //   const { adcode } = properties;
        //   //       //   return getColorByAdcode(adcode);
        //   //       // },
        //   //       fill: '#ebd4ef',
        //   //       // 'province-stroke': 'cornflowerblue',
        //   //       // 'city-stroke': 'white', // 中国地级市边界
        //   //       // 'county-stroke': 'rgba(255,255,255,0.5)', // 中国区县边界
        //   //     },
        //   //   });
        //   // }
        // }
      }
    },

    // TODO
    handleMapMouseover(event) {
      const px = event.pixel;
      // 拾取所在位置的行政区
      const props = this.disCountry.getDistrictByContainerPos(px);
      console.log('mouse', props);
      if (props) {
        const { NAME_CHN: name, adcode } = props;
        const DOM = `
      <div>
        <p><span>省份：</span><span class="cyan">${name}</span></p>
        <p><span>adcode：</span><span class="cyan">${adcode}</span></p>
      </div>
      `;
        this.infoWindow = new AMap.InfoWindow({
          content: DOM,
        });
        this.infoWindow.open(this.map);
      }
    },
    handleMapMouseout(event) {
      this.infoWindow?.close();
      console.log(event);
    },
    setInfoWindow() {

    },
    getColorByDGP(adcode) {
      if (!this.colors[adcode]) {
        const gdp = this.GDPSpeed[adcode];
        if (!gdp) {
          this.colors[adcode] = 'rgb(227,227,227)';
        } else {
          // eslint-disable-next-line no-mixed-operators
          const rg = 255 - Math.floor((gdp - 5) / 5 * 255);
          this.colors[adcode] = `rgb(${rg},${rg},255)`;
        }
      }
      return this.colors[adcode];
    },
    getColorByAdcode(adcode) {
      if (!this.colors[adcode]) {
        const gb = Math.random() * 155 + 50;
        this.colors[adcode] = `rgb(${gb},${gb},255)`;
      }

      return this.colors[adcode];
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initMap();
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
<style lang='scss' scoped>
#container{
  width: 100vw;
  height: 100vh;
}
.cyan{
  color: #1cbbb4;
}
</style>
