<template>
  <div>
    <wec-header />
    <div class="wec-container">
      <nuxt />
    </div>
    <wec-footer />
  </div>
</template>
<script>
import WecHeader from '~/components/WecHeader'
import WecFooter from '~/components/WecFooter'
export default {
  components: {
    WecHeader,
    WecFooter
  }
}
</script>
<style>
ul li {list-style: none;}
</style>
