<template>
  <div data-tauri-drag-region class="w-full h-50px flex justify-end">
    <div class="flex items-center justify-center">
      <div class="titlebar-button" id="titlebar-minimize" @click="handleMinimize">
        <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
      </div>
      <div class="titlebar-button" id="titlebar-maximize" @click="handleToggleMax">
        <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
      </div>
      <div class="titlebar-button" id="titlebar-close" @click="handleClose">
        <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
const handleMinimize = () => {
  appWindow.minimize()
}
const handleClose = () => {
  appWindow.close()
}
const handleToggleMax = () => {
  appWindow.toggleMaximize()
}
</script>

<style scoped lang="less"></style>