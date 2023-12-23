<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "guest",
});

useSeoMeta({
  title: "Login Auth",
  ogTitle: "Login Auth",
});
</script>

<template>
  <div class="auth">
    <div class="auth__login">
      <AuthLogin />
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
