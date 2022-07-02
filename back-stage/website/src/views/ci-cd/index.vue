<template lang="pug">
.ci-cd
  router-view
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CiCd',
  setup() {
    console.log('ci-cd :>> ')
  }
})
</script>
<style lang="sass">
.ci-cd
  width: 100%
  height: 100%
</style>
