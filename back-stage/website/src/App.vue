<template lang="pug">
component(:is="layout")
  <router-view v-slot="{Component}" />
    transition(name="fade")
      component(:is="Component")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/transition';
@import '@/assets/styles/_reboot';

#app {
  width: 100vw;
  height: 100vh;
}
</style>
