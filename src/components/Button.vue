<template>
<p>Button 实例</p>
<h1>实例1</h1>
<Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
        size="small"
>你好啊</Button>

</template>

<script setup>
import Button from '../libs/Button.vue';

const onClick = ()=>{
  console.log(11111);
}

</script>