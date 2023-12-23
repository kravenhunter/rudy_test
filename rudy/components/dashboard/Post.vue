<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";
import formatDate from "@/utils/formatDate";
import type { Post } from "@prisma/client";

defineProps({
  article: {
    type: Object as PropType<Post>,
    default: () => {},
  },
  gridDirection: {
    type: String,
    default: "1fr",
  },
  isShowBody: {
    type: Boolean,
    default: false,
  },
});

const { deletePost, isExistPost } = useArticleStore();
const goNext = async (routeName: string, id: string | undefined) => {
  if (id && isExistPost(id)) {
    return await navigateTo(`/guard/${routeName}/${id}`);
  }
};
</script>

<template>
  <div class="postListPreview" v-if="article.id">
    <img
      v-if="article.imagePreview"
      :src="`/image/upload/${article.imagePreview}`"
      :alt="article.title" />

    <img v-else src="/image/asai.png" :alt="article.title" />
    <div class="description">
      <h4 class="title">{{ article.title }}</h4>
      <p class="created">{{ article.create_at && formatDate(article.create_at) }}</p>
      <p class="post_body">
        {{ article.subDescription }}
      </p>
    </div>
    <div class="edit_block">
      <button class="edit" @click="goNext('post/edit', article.id)">
        <UiElementsIcons icon-name="bx:edit" color-icon="black" size-width="20" size-heigth="20" />
      </button>

      <button class="delete" @click="deletePost(article.id)">&times;</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit_block {
  width: 100px;
  display: flex;
  & .edit,
  .delete {
    background-color: var(--color-light);
    background-color: transparent;
    color: var(--color-dark);
    font-size: 24px;

    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.postListPreview {
  display: grid;
  grid-template-columns: 0.1fr 2fr 0.5fr;
  height: 152px;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
}
.postListPreview .description {
  display: grid;
  align-content: start;
  row-gap: 10px;
  & .title {
    cursor: pointer;
    margin: 0;
  }
  & .created {
    font-size: 10px;
    color: var(--color-darkGrey);
  }
}
.postListPreview .post_body {
  font-size: 14px;

  overflow: hidden;
}
.postListPreview img {
  object-fit: cover;
  width: 200px;
  height: 100%;
}
.postListPreview h4 {
  margin-top: 15px;
}
</style>
