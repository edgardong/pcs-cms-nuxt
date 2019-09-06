<template>
  <div class="wec-header">
    <div class="header-container">
      <div class="wec-logo">
        <img src="~/assets/imgs/logo.png" class="wec-logo_img" alt="logo">
      </div>
      <a-menu class="wec-menu" v-model="current" mode="horizontal">
        <a-menu-item key="main">
          <a-icon type="home" />首页
        </a-menu-item>
        <a-menu-item key="feeling">
          <a-icon type="smile" />随笔
        </a-menu-item>
        <a-menu-item key="album">
          <a-icon type="instagram" theme="filled" />相册
        </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="pushpin" />作品
          </span>
          <a-menu-item-group title="APP">
            <a-menu-item key="rn-store">
              <a-icon type="android" theme="filled" />破冰商城
            </a-menu-item>
            <a-menu-item key="rn-poker">
              <a-icon type="android" theme="filled" />破壳
            </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="WebApp">
            <a-menu-item key="mini-store">
              <a-icon type="wechat" theme="filled" />商城小程序
            </a-menu-item>
            <a-menu-item key="web-wecui">
              <a href="https://www.edgarhao.cn/wecui" target="_blank">
                <a-icon type="chrome" theme="filled" />WECUI
              </a>
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a-icon type="share-alt" />分享
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WecHeader',
  data () {
    return {
      current: ['main']
    }
  }
}
</script>

<style>
.wec-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 6px 0;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
}

.wec-header .header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}

.wec-menu {
  flex: 1;
}

.wec-logo {
  display: inline-block;
  padding-right: 40px;
}

.wec-logo_img {
  width: 90px;
  height: 30px;
}
</style>
