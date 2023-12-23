<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";
import { storeToRefs } from "pinia";

const { postList } = storeToRefs(useArticleStore());

useSeoMeta({
  title: "Posts",
  ogTitle: "Posts",
});
</script>

<template>
  <div class="item" v-if="postList">
    <UiElementsItemsArticle v-for="(post, index) in postList" :key="index" :post="post" />
  </div>
</template>

<style lang="scss" scoped>
.item {
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  row-gap: 50px;
}
</style>
