<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";
import type { Post } from "@prisma/client";

// import { storeToRefs } from "pinia";

//Get Route params
const route = useRoute();

const routeId = String(route.params.id);
// const { postList } = storeToRefs(useArticleStore());
const { getArticleById, isExistPost } = useArticleStore();
const current = ref<Post>();

// Check route params
const isRouteCorrect = () => {
  if (isExistPost(routeId)) {
    current.value = getArticleById(routeId);
    return true;
  }

  return false;
};

//Throw  an error id route params are not  correct
if (!isRouteCorrect()) {
  throw createError({ statusCode: 404, statusMessage: `The Page not found` });
}
</script>

<template>
  <div class="article__container">
    <div class="item" v-html="current?.description"></div>
  </div>
</template>

<style scoped lang="scss">
.article__container {
  display: flex;
  justify-content: center;
  & .item {
    width: min(100%, 1200px);
    display: grid;
  }
}
</style>
