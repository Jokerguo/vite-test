<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav">
    <div class="gulu-tabs-nav-item"
    :class="{selected:selected === t}"
    v-for="(t,index) in titles" 
    :key="index"
    @click="select(t)"
    >{{t}}</div>
  </div>
  <div class="gulu-tabs-content">
    <!-- <component class="gulu-tabs-content-item" 
    v-for="(c,index) in defaults"
    :is="c" :key="index"
    /> -->
    <!-- 需添加key -->
      <component class="gulu-tabs-content-item" :is="current" :key="selected"/>
  </div>
</div>
</template>

<script setup>
import Tab from './Tab.vue';
import { useSlots } from 'vue';
const slots = useSlots()
const defaults = slots.default()
const titles = defaults.map(tag=>tag.props.title)
defaults.forEach(ele=>{
  if(ele.type !== Tab){
    throw new Error('Tabs中只能使用Tab标签')
  }
})
const props = defineProps({
  selected:{
    type: String
  },
})
const emits = defineEmits(['update:selected'])
const select = (t)=>{
  emits('update:selected',t)
}
const current = computed(()=>{
  return defaults.filter(ele=>ele.props.title === props.selected)[0]
})
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>