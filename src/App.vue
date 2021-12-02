<template>
  <router-view></router-view>
</template>

<script setup>
const asideVisible = ref(false)
provide('asideVisible',asideVisible)
</script>