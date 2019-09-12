<template>
  <div>
    <wec-header />
    <div class="wec-container">
      <nuxt />
    </div>
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
</style>
