<template>
<Switch v-model:value="bool"/>
</template>

<script setup>
import Switch from '../libs/Switch.vue'
const bool = ref(false)
</script> 