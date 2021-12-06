<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        :class="{ selected: selected === t }"
        v-for="(t, index) in titles"
        :ref="(el: any) => {if(t===selected) selectedItem = el}"
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <!-- <component class="gulu-tabs-content-item" 
    v-for="(c,index) in defaults"
    :is="c" :key="index"
    /> -->
      <!-- 需添加key -->
      <component class="gulu-tabs-content-item" :is="current" :key="selected" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tab from './Tab.vue'
import { useSlots } from 'vue'
const selectedItem = ref<HTMLDivElement>(null)
const indicator = ref<HTMLDivElement>(null)
const container = ref<HTMLDivElement>(null)
const slots = useSlots()
const defaults = slots.default()
const titles = defaults.map((tag) => tag.props.title)
defaults.forEach((ele) => {
  if (ele.type !== Tab) {
    throw new Error('Tabs中只能使用Tab标签')
  }
})
const props = defineProps({
  selected: {
    type: String,
  },
})
const emits = defineEmits(['update:selected'])
const select = (t) => {
  emits('update:selected', t)
}
const current = computed(() => {
  return defaults.filter((ele) => ele.props.title === props.selected)[0]
})
onMounted(()=>{
  watchEffect(()=>{
    //watchEffect在Mounted之前也会执行
    // if(!selectedItem.value || !container.value || !indicator.value)return
    const {width} = selectedItem.value.getBoundingClientRect()
    indicator.value.style.width = width + 'px'
    const {left:left1} = container.value.getBoundingClientRect()
    const {left:left2} = selectedItem.value.getBoundingClientRect()
    indicator.value.style.left = left2 - left1 + 'px' 
  })
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
