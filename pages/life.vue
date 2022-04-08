<template>
<div class="wec-life">
   <p>
      不管现在在做什么，都要把生活过的好好的。
   </p>
</div>
</template>
<script>
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
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
  .wec-life {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
