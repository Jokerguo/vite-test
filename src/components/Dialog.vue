<template>
  <h1>实例1</h1>
  <Button @click="toggle">按钮</Button>
    <Dialog
    v-model:visible="visible"
    :clickOverlayClose="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:header>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>第一行</div>
      <div>第二行</div>
    </template>
  </Dialog>
</template>

<script setup>
import Dialog from '../libs/Dialog.vue'
import Button from '../libs/Button.vue'
const visible = ref(false)
const toggle = () => {
  visible.value = !visible.value
}
const f1 = () => {
  console.log(111)
  return false
}
const f2 = () => {
  console.log(222)
}
</script>
