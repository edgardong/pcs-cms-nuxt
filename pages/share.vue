<template>
<div class="wec-share">
   <p>
      不管现在在做什么行业的你，肯定都有一个财富自由的理想。
   </p>
</div>
</template>
<script>
import axios from 'axios'
import config from '~/config'
export default {
  head () {
    const base = this.$store.state.base
    return {
      title: `${base.name}${base.split || '-'}${base.title}`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: base.keywords },
        { hid: 'description', name: 'description', content: base.description }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: base.ico
        }
      ]
    }
  },
  async fetch ({ store, params }) {
    // 获取网站基本信息
    const baseData = await axios.get(
      `${config.BASE_URL}api/blog/v1/base/base`
    )
    store.commit('setBase', baseData.data.data)
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
  .wec-share {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
