<template>
<Switch :value="y" @change="y = $event"/>
</template>

<script setup>
import Switch from '../libs/Switch.vue'
const y = ref(true)
</script> 