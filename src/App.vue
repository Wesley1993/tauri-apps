<script setup lang="ts">
import {computed} from 'vue'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-CN'
import enUS from '@arco-design/web-vue/es/locale/lang/en-US'
import useLocale from '@/hooks/useLocale';
const {currentLocale} = useLocale();

const locale = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhCN;
    case 'en-US':
      return enUS;
    default:
      return zhCN;
  }
})
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
  <!-- <div class="container">
    <div data-tauri-drag-region class="titlebar">
  <div class="titlebar-button" id="titlebar-minimize" @click="handleMinimize">
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-maximize" @click="handleMaximize">
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-close" @click="handleClose">
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </div>
</div>
  </div> -->
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
