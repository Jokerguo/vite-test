<template>
<p>Button 实例</p>
<h1>实例1</h1>
<Button @click="onClick"
        @focus="onClick"
        @mouseover="onClick"
>你好啊</Button>

</template>

<script setup>
import Button from '../libs/Button.vue';
console.log(1111)

const onClick = ()=>{ console.log(22221) }

</script>