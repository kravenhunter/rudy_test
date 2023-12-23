<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
useSeoMeta({
  title: "Profile Edit",
  ogTitle: "Profile Edit",
});
</script>

<template>
  <div class="update__contauner">
    <DashboardProfileUpdate />
  </div>
</template>

<style scoped></style>
