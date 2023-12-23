<script setup lang="ts">
import { definePageMeta } from "#imports";

definePageMeta({
  layout: "auth",
});
useSeoMeta({
  title: "Registration",
  ogTitle: "Registration",
});
</script>

<template>
  <div class="auth">
    <div class="auth__login">
      <AuthRegister />
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__login {
    width: min(100%, 400px);
  }
}
</style>
