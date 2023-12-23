<template>
  <div class="popap">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.popap {
  position: fixed;
  inset: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
