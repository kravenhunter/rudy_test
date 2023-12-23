<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";
import type { Post } from "@prisma/client";
import { storeToRefs } from "pinia";

const search = ref("");
const searchedPost = ref<Post[]>();
const { postList } = storeToRefs(useArticleStore());

const searchResult = computed(() => {
  if (search.value) {
    postList.value &&
      (searchedPost.value = [...postList.value?.filter((el) => el.title?.includes(search.value))]);

    return searchedPost.value;
  } else {
    postList.value && (searchedPost.value = postList.value);
    return searchedPost.value;
  }
});

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
useSeoMeta({
  title: "Posts",
  ogTitle: "Posts",
});
</script>

<template>
  <div class="posts__container">
    <UiElementsAddLink
      class="btn__create"
      to-path="/guard/post/create"
      :type-btn="false"
      color-bg="darkBlue"
      size="90px"
      font-size="14px"
      paddings="0.6em 1.3em">
      <span>Create Article</span>
    </UiElementsAddLink>
    <div v-if="searchResult" class="list">
      <DashboardPost v-for="(item, index) in searchResult" :key="index" :article="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.posts__container {
  display: grid;

  padding: 100px 40px 40px 40px;
  row-gap: 30px;
  width: 100%;

  & .btn__create {
    justify-self: center;
  }
  & .list {
    overflow: auto;
    justify-self: center;
    width: min(100%, 750px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
  }
}
</style>
