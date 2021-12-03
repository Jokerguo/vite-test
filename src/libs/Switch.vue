<template>
<button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script setup>
const props = defineProps({ value: Boolean })
const emits = defineEmits(['update:value'])

const toggle = ()=>{
  emits('update:value',!props.value)
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: gray;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  } 
  button.checked{
    background: blue;
  }
  button.checked > span{
    left: calc(100% - #{$h2} - 2px);
  }
</style> 