<template>
  <div class="wec-slider">

    <div class="item" v-if="type==1">
      <div class="title">
        简介
      </div>
      <div
        class="content"
      >
        本博客系统使用 vue + nuxt + koa2 + mysql 搭建，由于本人不太勤快，所以历经九九八十一难终于出来第一版，目前仅有博客/作品/地图模块可使用，其他随笔/相册/分享等功能模块还在开发中。如果有什么问题，欢迎大家来稍扰哦～
      </div>
    </div>

    <div class="item">
      <div class="title">
        🎖️作者榜
      </div>
      <div class="content">
        系统管理员
      </div>
    </div>

    <div class="item" v-if="type==1">
      <div class="title">
        最近文章
      </div>
      <div class="content">
        系统管理员
      </div>
    </div>

    <div class="item">
      <div class="title">
        热门文章
      </div>
      <div class="content">
        系统管理员
      </div>
    </div>

    <div class="item" v-if="type==2">
      <div class="title">
        相关文章
      </div>
      <div class="content">
        系统管理员
      </div>
    </div>

    <ul v-if="menus.length>0 && type==2" class="item menu">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="menu-item"
        :style="{marginLeft:(menu.type-1)*8 +'px'}"
        @click="handleMenuClick(menu)"
      >
        {{ menu.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    menus: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    },
    type: {
      // 1. 首页 2. 文章详情页
      type: Number,
      required: false,
      default: 1
    }
  },
  data () {
    return {}
  },
  methods: {
    handleMenuClick (menu) {
      this.$emit('menu', menu)
    }
  }
}
</script>
<style scoped>
.wec-slider {
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
}

.item {
  background-color: #fff;
  padding: 0 15px 15px 15px;
  margin-bottom: 20px;
}
.item .title {
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}
.item .content {
  font-size: 14px;
  color: #666;
  letter-spacing: 0;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3; /*要显示的行数*/
  -webkit-box-orient: vertical;
  margin-top: 6px;
}
.item.menu {
  padding: 15px;
}
.item .menu-item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  cursor: pointer;
}
</style>
