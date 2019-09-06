<template>
  <div>
    <wec-header />
    <nuxt />
  </div>
</template>
<script>
import WecHeader from '~/components/WecHeader'
export default {
  components: {
    WecHeader
  }
}
</script>
<style>
.wec-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.ant-menu-item {
  padding: 0 30px !important;
}
.ant-menu-horizontal,
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu,
.ant-menu-horizontal > .ant-menu-item-selected {
  border-bottom: 0px !important;
}
</style>
