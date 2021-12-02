<template>
  <div class="topnav">
    <div class="menuIcon" @click="toggle"></div>
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script setup>
const asideVisible = inject('asideVisible')
const toggle = () => {
  asideVisible.value = !asideVisible.value
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  > .menuIcon {
    width: 20px;
    height: 20px;
    background: red;
    display: none;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .menuIcon {
      display: block;
    }
  }
}
</style>
