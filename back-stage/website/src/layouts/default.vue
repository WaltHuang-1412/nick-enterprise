<template lang="pug">
.layout-default
  .layout-default__menu
  .layout-default__content
    slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutDefault'
})
</script>
<style lang="sass">
.layout-default
  display: grid
  width: 100%
  height: 100%
  border: 1px solid green
  grid-template-columns: 1fr 1fr

  &__menu
    border: 1px solid red

  &__content
    border: 1px solid blue
    overflow-y: scroll
</style>
