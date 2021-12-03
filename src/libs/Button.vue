<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="loading"></span>
    <slot class="slot"></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'normal',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  return {
    [`theme-${props.theme}`]: props.theme,
    [`size-${props.size}`]: props.size,
  }
})
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  width: auto;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
.loading {
  display: inline-block;
  border: 1px solid red;
  border-bottom: 1px solid transparent;
  animation: rotate 1s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
