<!-- 打赏页 -->
<template>
  <div class="container">
    <div class="donate-container">
      <h3>
        打赏作者
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
      </h3>
      <p>
        如果你觉着这个项目帮助到了你，你可以帮作者买一杯「杨枝甘露」以示鼓励！
        <a-space>
          <a-icon type="smile" theme="twoTone" />
          <a-icon type="smile" theme="twoTone" />
          <a-icon type="smile" theme="twoTone" />
        </a-space>
      </p>
    </div>
    <div class="author-container">
      <div class="pay-item">
        <p class="msg">微信</p>
        <img src="~@/assets/author/wechatPay.jpeg" class="img" alt="微信收款码" />
      </div>
      <div class="pay-item">
        <p class="msg">支付宝</p>
        <img src="~@/assets/author/alipay.jpeg" class="img" alt="支付宝收款码" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  .donate-container {
    border-left: 6px solid @primaryColor;
    background: #fff;
    padding: 10px 20px;
    line-height: 2;
  }
  .author-container {
    display: grid;
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(2, 300px);
    .pay-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .msg {
        margin-bottom: 10px;
        font-size: 20px;
      }
      .img {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>
