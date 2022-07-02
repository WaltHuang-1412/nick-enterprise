<template lang="pug">
.layout-default
  .layout-default__header
    Header
  .layout-default__sidebar
    Sidebar
  .layout-default__content
    slot
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: {},
  setup() {
    return {}
  }
})
</script>
<style lang="sass">
.layout-default
  display: grid
  width: 100%
  height: 100%
  border: 1px solid green
  grid-auto-rows: auto 1fr
  grid-template-columns: auto 1fr
  grid-template-areas: "header header" "sidebar content"
  background-color: #22272e

  &__sidebar
    grid-area: sidebar
    background-color: #22272e
    border-right: 1px solid #444c56
    border-bottom: 1px solid #444c56

  &__header
    grid-area: header
    background-color: var(--color-header-bg)

  &__content
    grid-area: content
</style>
