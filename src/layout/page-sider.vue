<template>
  <div class="relative bg-[#f6f7f8] h-full pt-70px box-border flex flex-col justify-between">
    <div class="absolute top-30px left-20px w-30px h-30px cursor-pointer bg-[#e4e5e6] border-rd-5px flex justify-center items-center">
      <icon-left :size="20" />
    </div>
    <div class="sider-top">top</div>
    <div class="slide-bottom">bottom</div>
  </div>
</template>

<script setup lang="ts">
// import { useAppStore } from '@/store/modules/app/index';
import { onMounted, ref } from 'vue';
import { OsEnum } from "../enum";
const platformName = ref('')
const isFocus = ref(false)
// const appStore = useAppStore()


</script>

<style scoped lang="less">
  .isFocus{
    filter: grayscale(1);
  }
  .grey {
    background-color: #e1e1e1;
    border: 1px solid #dbdbdb;
  }
</style>