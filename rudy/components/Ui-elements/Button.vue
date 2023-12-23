<script setup>
defineProps({
  title: {
    type: String,
    default: "Расчитать стоимость",
  },
  btnSlot: Boolean,
  isButton: {
    type: Boolean,
    default: true,
  },
  link: String,
});
</script>

<template>
  <div class="button" v-if="isButton">
    <button v-if="!btnSlot">{{ title }}</button>
    <button v-else><slot /></button>
  </div>
  <div class="button" v-else>
    <NuxtLink :to="link">{{ title }}</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.button {
  & a {
    display: block;
  }
  & button,
  a {
    color: #1536df;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 700;
    padding: 17px 100px;
    border: 1px solid #1536df;
    border-radius: 5px;
    background: none;
    margin: 0 40px 30px 40px;

    &:hover {
      background: #1536df;
      color: #fff;
    }
  }
}
</style>
