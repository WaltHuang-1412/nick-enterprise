<template lang="pug">
.layout-login
  slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutLogin'
})
</script>
<style lang="scss">
.layout-login {
  width: 100%;
  height: 100%;
}
</style>
