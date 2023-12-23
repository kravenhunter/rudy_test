<script setup lang="ts">
import type { Post } from "@prisma/client";

defineProps<{ post: Post }>();
</script>

<template>
  <div class="stats">
    <img v-if="post.imagePreview" :src="`/image/upload/${post.imagePreview}`" :alt="post.title" />
    <img v-else src="/image/asai.png" :alt="post.title" />
    <p class="title__stats">
      <NuxtLink :to="`/post/${post.id}`">{{ post.title }} </NuxtLink>
    </p>

    <p class="sub">{{ post.subDescription }}</p>
  </div>
</template>

<style lang="scss" scoped>
.stats {
  width: min(100%, 466px);
  height: 550px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  & img {
    height: min(100%, 319px);
  }
  & .sub {
    font-size: 17px;
  }
}
.title__stats {
  color: #000;
  font-family: "Museo Sans Cyrl";
  font-size: 24px;
  font-weight: 400;
  line-height: 109.8%; /* 26.352px */
}
</style>
