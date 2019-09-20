<template>
  <div class="wec-slider">
    <div class="item">
      <div class="title">简介</div>
      <div class="content">说点什么好呢？还真的不知道说点什么好，哎，，，，，那就不说了吧</div>
    </div>
    <div class="item">
      <div class="title">🎖️作者榜</div>
      <div class="content">说点什么好呢？</div>
    </div>
    <ul class="item menu">
      <li class="menu-item" :style="{marginLeft:(menu.type-1)*8 +'px'}" v-for="(menu, index) in menus" :key="index" @click="handleMenuClick(menu)">{{ menu.title }}</li>
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
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleMenuClick (menu) {
      console.log(menu)
      this.$emit('menu', menu)
    }
  }
}
</script>
<style scoped>
  .wec-slider {
    position: absolute;
    top: 20px;
    right: 0;
    width: 240px;
  }

  .item {
    background-color: #fff;
    padding:0 15px;
    margin-bottom: 20px;
  }
  .item .title {
    border-bottom:1px solid hsla(0,0%,59.2%,.1);
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }
  .item .content {
    font-size: 14px;
    color: #666;
  }
  .item.menu {padding: 15px;}
  .item .menu-item {overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: #000;cursor: pointer;}
</style>
