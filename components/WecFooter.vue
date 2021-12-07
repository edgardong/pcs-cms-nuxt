<template>
  <div class="wec-footer">
    <p class="footer-content" v-html="footerContent" />
    <div class="bg-cover" />

    <!-- Clarity tracking code for https://www.quzhaota.cn/ -->
    <script>
  /* eslint-disable */
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt";
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "71dd1y9nn9");
  /* eslint-enable */
    </script>
  </div>
</template>
<script>
export default {
  data () {
    return {
      footerContent: ''
    }
  },
  computed: {},
  mounted () {
    /* eslint-enable */
    const base = this.$store.state.base
    if (base) {
      this.footerContent = base.footer
    }
    // 百度统计代码
    if (base && base.baidu_tongji && location.hostname !== 'localhost') {
      const hm = document.createElement('script')
      hm.src = `https://hm.baidu.com/hm.js?${base.baidu_tongji}`
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    }
    /* eslint-enable */
  },
  methods: {}
}
</script>
<style>
.wec-footer {
  position: relative;
  /* bottom: 0; */
  /* left: 0; */
  /* right: 0; */
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
  margin: 8px auto 0 auto;
  max-width: 960px;
}
.bg-cover {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.15;
  z-index: 2;
  background-image: url("../assets/imgs/footer_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
