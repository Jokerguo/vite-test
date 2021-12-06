<template>
  <h1>实例1</h1>
  <Button @click="toggle">按钮</Button>
  <Dialog :visible="visible"/>
</template>

<script setup>
  import Dialog from '../libs/Dialog.vue';
  import Button from '../libs/Button.vue';
  const visible = ref(false)
  const toggle = ()=>{
    visible.value = !visible.value
  }
</script>