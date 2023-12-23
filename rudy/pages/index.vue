<script setup lang="ts">

useSeoMeta({
  title: "Rudy Studio",
  ogTitle: "Rudy Studio",
});
</script>

<template>
  <div class="main">

    <MainOffer id="offer" />
    <MainOnlineMessage />
    <MainCostDev id="cost" />
    <MainSocial id="social" />
    <MainStep id="step" />
    <MainWorks id="works" />
    <MainRequ id="requ" />
    <MainCostSeo id="seo" />
    <MainDescription id="desc" />
    <MainModal id="count" />
  </div>
</template>

<style lang="scss" scoped>
.success {
  background: #fff;
  padding: 50px;
  display: grid;
  row-gap: 20px;

  & button {
    display: grid;
    place-content: center;
  }
}
</style>
