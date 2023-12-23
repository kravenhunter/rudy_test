<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
useSeoMeta({
  title: "Price Create",
  ogTitle: "Price Create",
});
</script>

<template>
  <div class="create__container">
    <h3>Create Record</h3>

    <DashboardPriceCreate />
  </div>
</template>

<style scoped lang="scss">
.create__container {
  display: grid;
  row-gap: 20px;
}
</style>
