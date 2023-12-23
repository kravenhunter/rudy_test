<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
useSeoMeta({
  title: "Post Edit",
  ogTitle: "Post Edit",
});
</script>

<template>
  <div class="edit__container">
    <DashboardPostEdit />
  </div>
</template>

<style scoped lang="scss"></style>
