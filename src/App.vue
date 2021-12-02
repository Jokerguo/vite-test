<template>
  <router-view></router-view>
</template>

<script setup>
import router from './router'
const width = document.documentElement.clientWidth
const asideVisible = ref(width <= 500 ? false : true)
provide('asideVisible', asideVisible)
router.afterEach(() => {
  if(width <= 500){
    asideVisible.value = false
  }
})
</script>
