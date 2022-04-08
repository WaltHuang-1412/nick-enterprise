<template lang="pug">
.sidebar
  a-menu(v-model:openKeys='openKeys'
        v-model:selectedKeys='selectedKeys'
        mode='inline'
        @click='handleClick'
        theme="dark")
    a-menu-item(:key="routesName.dashboard")
      template(#icon)
        DashboardTwoTone
      span Dashboard
    a-sub-menu(:key="routesName['ci-cd']" title="CI/CD")
      template(#icon)
        QqOutlined
      a-menu-item(:key="routesName['ci-cd-qat-setting-tickets']") QAT
      a-menu-item(:key="routesName['ci-cd-stg']") STG
      a-menu-item(:key="routesName['ci-cd-prod']") PROD
      a-menu-item(:key="routesName['ci-cd-preprod']") PREPROD
</template>
<script lang="ts">
import { defineComponent, computed, ref, ComputedRef } from 'vue'
import { QqOutlined, DashboardTwoTone } from '@ant-design/icons-vue'
import { useRoute, useRouter, RouteRecordName, LocationQuery } from 'vue-router'
import type { MenuProps } from 'ant-design-vue'
import { routesName } from '@/router/index'

export default defineComponent({
  name: 'Sidebar',
  components: {
    QqOutlined,
    DashboardTwoTone
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const routeName: ComputedRef<RouteRecordName | null | undefined> = computed(
      () => route.name
    )
    const routePath = computed(() => route.path)
    const selectedKeys = ref<RouteRecordName[]>([])
    const openKeys = ref<string[]>([])

    const handleClick: MenuProps['onClick'] = (event: any) => {
      const { key } = event
      router.push({ name: key })
    }
    const init = () => {
      if (routeName.value) {
        selectedKeys.value.push(routeName.value)
      }
      if (routePath.value) {
        openKeys.value.push(
          ...routePath.value
            .toString()
            .split('/')
            .filter((item) => !!item)
        )
      }
    }

    init()
    return {
      selectedKeys,
      openKeys,
      routesName,
      route,
      handleClick
    }
  }
})
</script>
<style lang="sass">
.sidebar
  width: 256px
  height: 100%
</style>
