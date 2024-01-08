<template>
  <a-layout class="layout">
    <a-layout-sider style="width: 68px">
      <PageSider />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <PageHeader />
      </a-layout-header>
      <a-layout-content>
        <PageLayout />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import PageLayout from "./page-layout.vue"
import PageHeader from "./page-header.vue"
import PageSider from "./page-sider.vue"



</script>

<style scoped lang="less">
.layout {
  height: 100vh;
}
</style>
