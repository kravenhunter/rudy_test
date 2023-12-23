<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <p class="title">{{ title }}</p>
</template>

<style lang="scss" scoped>
.title {
  color: #000;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 109.8%; /* 65.88px */
  padding-bottom: 40px;
}
@media screen and (max-width: 660px) {
  .title {
    font-size: 38px;
  }
}
</style>
