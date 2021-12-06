<template>
<div>Tabs 实例</div>
<h1>实例1</h1>
<Tabs v-model:selected="selected">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script setup>
  import Tabs from '../libs/Tabs.vue';
  import Tab from '../libs/Tab.vue';
  const selected = ref('导航1')
</script>