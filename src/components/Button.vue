<template>
<p>Button 实例</p>
<h1>实例1</h1>
<Button>按钮</Button>
<Button theme="button">按钮</Button>
<Button theme="link">按钮</Button>
<Button theme="text">按钮</Button>
<h1>实例2</h1>
<Button size="normal">正常</Button>
<Button size="big">大大大大</Button>
<Button size="small">小小</Button>
<h1>实例3 disabled</h1>
<Button disabled  @click="xxx">asd</Button>
<Button :disabled="true">萨达</Button>
<h1>实例3 loading</h1>
<Button loading>loading中</Button>
<Button>完成</Button>

</template>

<script setup>
import Button from '../libs/Button.vue';
console.log(1111)

const xxx = ()=>{console.log(1111)}

</script>