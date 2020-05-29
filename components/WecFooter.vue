<template>
  <div class="wec-footer">
    <div>这里是底部区域的内容</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    // 百度统计代码
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?a5eaf342b79c62c208566e75c999dfda'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
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
  height: 80px;
  text-align: center;
}
</style>
