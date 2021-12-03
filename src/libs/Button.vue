<template>
  <div :size="size">
    <button v-bind="$attrs">
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
</script>

<style scoped>
div{
  border: 1px solid red;
}
</style>