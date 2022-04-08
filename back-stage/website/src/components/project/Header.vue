<template lang="pug">
header.header
  .header__avatar
    a-avatar(shape="square" size="large")
      UserOutlined
  .header__name
    a-dropdown-button
      | TestName
      template(#overlay='')
        a-menu
          a-menu-item(key='1') Logout
      template(#icon)
        DownOutlined
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  UserOutlined,
  DownOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'
export default defineComponent({
  name: 'Header',
  components: {
    UserOutlined,
    DownOutlined,
    LogoutOutlined
  },
  setup() {
    console.log('hi :>> ')
  }
})
</script>
<style lang="sass">
.header
  width: 100%
  padding: 10px
  display: grid
  grid-template-columns: auto 1fr
  column-gap: 5px
  align-items: center
</style>
