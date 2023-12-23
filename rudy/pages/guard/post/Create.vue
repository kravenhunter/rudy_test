<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
useSeoMeta({
  title: "Post Create",
  ogTitle: "Post Create",
});
</script>

<template>
  <DashboardPostCreate />
</template>

<style scoped lang="scss"></style>
