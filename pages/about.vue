<template>
  <div>关于页面</div>
</template>

<script>
import axios from 'axios'
import config from '~/config'
export default {
  name: 'About',
  layout: '',
  data () {
    return {
    }
  },
  async fetch ({ store, params }) {
    // 获取网站基本信息
    const baseData = await axios.get(
      `${config.BASE_URL}api/blog/v1/base/base`
    )
    store.commit('setBase', baseData.data.data)
  },
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
  }
}
</script>

<style >
</style>
