<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default{
inheritAttrs : false,
}
</script>
<script setup>
import { useAttrs } from 'vue'
const {size,...rest} = useAttrs() //剩余参数rest
</script>



<style scoped>
div{
  border: 1px solid red;
}
</style>