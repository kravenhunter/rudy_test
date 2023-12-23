<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";
import { usePriceStore } from "@/stores/priceStore";
import { useProfileStore } from "@/stores/profileStore";
import { storeToRefs } from "pinia";

const { postList } = storeToRefs(useArticleStore());
const { getPostList } = useArticleStore();

const { priceList } = storeToRefs(usePriceStore());
const { getPriceList } = usePriceStore();

const { profileList } = storeToRefs(useProfileStore());
const { getProfileList } = useProfileStore();

const loadStores = async () => {
  if (!postList.value?.length) {
    await getPostList();
  }
  if (!priceList.value?.length) {
    await getPriceList();
    console.log(priceList.value);
  }
  if (!profileList.value?.length) {
    await getProfileList();
    console.log(priceList.value);
  }
};
//Load all stores

await loadStores();
</script>

<template>
  <div class="admin_layout">
    <UiGuardSideBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.admin_layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  & main {
    min-height: 100vh;
    overflow-y: scroll;
  }
}
.admin_layout main {
  flex: 1 1 0;
  padding: 2rem;
}

@media (max-width: 768px) {
  .admin_layout main {
    padding-left: 6rem;
  }
}
</style>
