<template lang="pug">
.layout-default
  .layout-default__header
    a-button(type='primary' style='margin-bottom: 16px' @click='toggleCollapsed')
      MenuUnfoldOutlined(v-if='collapsed')
      MenuFoldOutlined(v-else)

  .layout-default__sidebar
    a-menu(v-model:openKeys='openKeys' v-model:selectedKeys='selectedKeys' mode='inline'  :inline-collapsed='collapsed')
      a-menu-item(key='1')
        template(#icon='')
          PieChartOutlined
        span Option 1
      a-menu-item(key='2')
        template(#icon='')
          DesktopOutlined
        span Option 2
      a-menu-item(key='3')
        template(#icon='')
          InboxOutlined
        span Option 3
      a-sub-menu(key='sub1')
        template(#icon='')
          MailOutlined
        template(#title='') Navigation One
        a-menu-item(key='5') Option 5
        a-menu-item(key='6') Option 6
        a-menu-item(key='7') Option 7
        a-menu-item(key='8') Option 8
      a-sub-menu(key='sub2')
        template(#icon='')
          AppstoreOutlined
        template(#title='') Navigation Two
        a-menu-item(key='9') Option 9
        a-menu-item(key='10') Option 10
        a-sub-menu(key='sub3' title='Submenu')
          a-menu-item(key='11') Option 11
          a-menu-item(key='12') Option 12
      a-sub-menu(key='sub2')
        template(#icon='')
          AppstoreOutlined
        template(#title='') Navigation Two
        a-menu-item(key='9') Option 9
        a-menu-item(key='10') Option 10
        a-sub-menu(key='sub3' title='Submenu')
          a-menu-item(key='11') Option 11
          a-menu-item(key='12') Option 12
      a-sub-menu(key='sub2')
        template(#icon='')
          AppstoreOutlined
        template(#title='') Navigation Two
        a-menu-item(key='9') Option 9
        a-menu-item(key='10') Option 10
        a-sub-menu(key='sub3' title='Submenu')
          a-menu-item(key='11') Option 11
          a-menu-item(key='12') Option 12
      a-sub-menu(key='sub2')
        template(#icon='')
          AppstoreOutlined
        template(#title='') Navigation Two
        a-menu-item(key='9') Option 9
        a-menu-item(key='10') Option 10
        a-sub-menu(key='sub3' title='Submenu')
          a-menu-item(key='11') Option 11
          a-menu-item(key='12') Option 12

  .layout-default__content
    slot
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  name: 'LayoutDefault',
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined
  },
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    })

    watch(
      () => state.openKeys,
      (_val: any, oldVal: any) => {
        console.log('_val :>> ', _val)
        console.log('oldVal :>> ', oldVal)
        state.preOpenKeys = oldVal
      }
    )
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed
      state.openKeys = state.collapsed ? [] : state.preOpenKeys
    }

    return {
      ...toRefs(state),
      toggleCollapsed
    }
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

  &__sidebar
    grid-area: sidebar
    border: 1px solid red
    overflow-y: scroll
    -ms-overflow-style: none

  &__header
    grid-area: header
    border: 1px solid green

  &__content
    grid-area: content
    border: 1px solid blue
    overflow-y: scroll
</style>
