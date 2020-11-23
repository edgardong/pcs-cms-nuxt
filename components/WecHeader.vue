<template>
  <div class="wec-header">
    <div class="header-container">
      <div class="wec-logo" @click="handleIndexClick">
        <img v-if="$store.state.base" :src="$store.state.base.logo" class="wec-logo_img" alt="logo">
        <img v-else src="~/assets/imgs/logo.png" class="wec-logo_img" alt="logo">
      </div>
      <a-menu v-model="current" class="wec-menu" mode="horizontal" @click="handleMenuClick">
        <a-menu-item key="main">
          <nuxt-link to="/">
            <a-icon type="home" />首页
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="feeling">
          <nuxt-link to="/test">
            <a-icon type="smile" />随笔
          </nuxt-link>
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
        <a-menu-item key="sharing">
          <a-icon type="share-alt" />分享
        </a-menu-item>
        <a-menu-item key="tools">
          <a href="http://tools.quzhaota.cn/" target="_blank">
            <a-icon type="tool" />工具
          </a>
        </a-menu-item>
        <a-menu-item key="about">
          <a href="/about.html">
            <a-icon type="deployment-unit" />关于
          </a>
        </a-menu-item>
        <a-menu-item key="sitemap">
          <a href="/sitemap.xml">
            <a-icon type="deployment-unit" />地图
          </a>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// import '@/node_modules/ant-design-vue/lib/menu/style/index.css'
// import '@/node_modules/ant-design-vue/lib/icon/style/index.css'
export default {
  name: 'WecHeader',
  data () {
    return {
    }
  },
  computed: {
    current: {
      get () {
        return [this.$store.state.menu.index]
      },
      set (value) {

      }
    }
  },
  methods: {
    handleIndexClick () {
      location.href = '/'
    },
    handleMenuClick (e) {
      this.$store.commit('menu/setIndex', e.key)
    },
    ...mapMutations({
      setIndex: 'menu/setIndex'
    })
  }
}
</script>

<style>
.wec-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  background-color: #fff;
}

.wec-header .header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 6px 0;
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
  cursor: pointer;
  max-width: 90px;
}
</style>
