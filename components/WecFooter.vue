<template>
  <div class="wec-footer">
    <p class="footer-content" v-html="$store.state.base.footer"></p>
    <div class="bg-cover"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    const base = this.$store.state.base
    // 百度统计代码
    if (base && base.baidu_tongji) {
      // const hm = document.createElement('script')
      // hm.src = `https://hm.baidu.com/hm.js?${base.baidu_tongji}`
      // const s = document.getElementsByTagName('script')[0]
      // s.parentNode.insertBefore(hm, s)
    }
  },
  methods: {}
}
</script>
<style>
.wec-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 60px;
  text-align: center;
}
.footer-content {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 3;
  font-size: 14px;
  white-space: pre-wrap;
  margin: 8px 0 0 0;
}
.bg-cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.15;
  z-index: 2;
  background-image: url('../assets/imgs/footer_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
