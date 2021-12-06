<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        :class="{ selected: selected === t }"
        v-for="(t, index) in titles"
        :ref="setItemRef"
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
const refs = ref<HTMLDivElement[]>([])
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
const setItemRef = (el)=>{
  if(el)refs.value.push(el)
}
const x = ()=>{
  const divs = refs.value
  const result = divs.filter(div=>div.classList.contains('selected'))[0]
  const {width} = result.getBoundingClientRect()
  indicator.value.style.width = width + 'px'
  const {left:left1} = container.value.getBoundingClientRect()
  const {left:left2} = result.getBoundingClientRect()
  indicator.value.style.left = left2 - left1 + 'px' 
}
onMounted(x)
onUpdated(x)
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
