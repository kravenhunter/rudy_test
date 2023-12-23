<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
useSeoMeta({
  title: "Prices",
  ogTitle: "Prices",
});
</script>

<template>
  <div class="prices__container">
    <h2 class="heading-2">Prices</h2>
    <UiElementsAddLink
      class="btn__create"
      to-path="/guard/price/create"
      :type-btn="false"
      color-bg="darkBlue"
      size="100px"
      font-size="14px"
      paddings="0.6em 1.3em">
      <span>Create Record</span>
    </UiElementsAddLink>
    <DashboardPrices />
  </div>
</template>

<style scoped lang="scss">
.prices__container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
