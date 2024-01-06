<template>
  <div>
    <div class="flex items-center" v-if="platformName === OsEnum.MacOs" :class="{isFocus: !isFocus}">
      <div class="w-10px h-10px border-rd-5px bg-[rgb(252,70,51)]" :class="{ grey: !isFocus}">

      </div>
      <div class="w-10px h-10px border-rd-5px bg-[rgb(253,175,37)]" :class="{ grey: !isFocus}">

      </div>
      <div class="w-10px h-10px border-rd-5px bg-[rgb(42,197,52)]" :class="{ grey: !isFocus}">

      </div>
    </div>
    侧边
  </div>
</template>

<script setup lang="ts">
import { listen } from '@tauri-apps/api/event';
import { type } from '@tauri-apps/api/os';
import { onMounted, ref } from 'vue';
import { OsEnum } from "../enum";
const platformName = ref('')
const isFocus = ref(false)
const getPlatformName = async () => {
  platformName.value = await type();
}
getPlatformName()

const windowBlur = async () => {
  await listen('tauri://blur',(event) => {
    console.log('窗口失焦了', event)
    isFocus.value = false
  })
}
const winFocus = async () => {
  await listen('tauri://focus',(event) => {
    console.log('窗口获取焦点了', event)
    isFocus.value = true
  })
}

onMounted(()=>{
  windowBlur()
  winFocus()
})

</script>

<style scoped lang="less">
  .isFocus{
    filter: grayscale(1);
  }
  .grey {
    background-color: rgb(230, 230, 230)
  }
</style>