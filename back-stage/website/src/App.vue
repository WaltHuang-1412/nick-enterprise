<template lang="pug">
component(:is="layout")
  <router-view />
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
// body {
//   background-color: red;
// }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
