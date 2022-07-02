<template lang="pug">
.qat
  .qat__jira
    a-radio-group(v-model:value='jiraIndex' buttonStyle='solid' @change="handleRadioChange")
      template(v-for="item in jiraTicketOptions")
        a-radio-button(:value='item.id') {{item.name}}
  .qat__flow
    a-tabs(v-model:activeKey='activeKey' size="large" @change="handleTabChange")
      a-tab-pane(:key="routesName['ci-cd-qat-setting-tickets']" tab="Setting Tickets")
      a-tab-pane(:key="routesName['ci-cd-qat-deployment-information']" tab="Deployment Info")
      a-tab-pane(:key="routesName['ci-cd-qat-deploy']" tab="Deploy")
      a-tab-pane(:key="routesName['ci-cd-qat-list-apps']" tab="List Apps")
      a-tab-pane(:key="routesName['ci-cd-qat-list-nginx']" tab="List Nginx")
      a-tab-pane(:key="routesName['ci-cd-qat-fluent-id']" tab="List Fluent Id")
      a-tab-pane(:key="routesName['ci-cd-qat-list-static-file']" tab="List Static File")
  .qat__content
    router-view
</template>
<script lang="ts">
import { defineComponent, ref, ComputedRef, computed, Ref } from 'vue'
import { jiraTicketOptions } from '@/models'
import { useRouter, useRoute, RouteRecordName, LocationQuery } from 'vue-router'
import { routesName } from '@/router'
import { toNumber } from 'lodash'
export default defineComponent({
  name: 'CiCdQat',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const routeName: ComputedRef<RouteRecordName | null | undefined> = computed(
      () => route.name
    )
    const routeQuery: ComputedRef<LocationQuery | undefined> = computed(
      () => route.query
    )
    const activeKey = ref<RouteRecordName>()
    const jiraIndex: Ref<string | number | null> = ref<string | number | null>(
      jiraTicketOptions[0].id
    )
    const handleRadioChange = (event: any) => {
      const { target } = event
      router.push({
        query: {
          jiraId: target.value
        }
      })
    }
    const handleTabChange = (key: any) => {
      router.push({ name: key, query: routeQuery.value })
    }
    const init = () => {
      if (routeName.value) {
        activeKey.value = routeName.value
      }
      if (routeQuery.value?.jiraId) {
        jiraIndex.value = toNumber(routeQuery.value.jiraId)
      }
    }
    init()

    return {
      activeKey,
      jiraIndex,
      jiraTicketOptions,
      routesName,
      handleRadioChange,
      handleTabChange
    }
  }
})
</script>
<style lang="sass">
.qat
  display: grid
  width: 100%
  height: 100%
  padding: 20px
  grid-template-rows: auto auto 1fr
  // &__jira
  //   border: 1px solid red
  &__flow
    color: white
  &__content
    border-left: 1px solid white
    border-right: 1px solid white
    border-bottom: 1px solid white
</style>
