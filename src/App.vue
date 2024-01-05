<script setup lang="ts">
import { computed } from 'vue'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-CN'
import enUS from '@arco-design/web-vue/es/locale/lang/en-US'
// import useLocale from '@/hooks/locale';
// const { currentLocale } = useLocale();

// const locale = computed(() => {
//   switch (currentLocale.value) {
//     case 'zh-CN':
//       return zhCN;
//     case 'en-US':
//       return enUS;
//     default:
//       return zhCN;
//   }
// })
const locale = zhCN;
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
