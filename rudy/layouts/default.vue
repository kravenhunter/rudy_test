<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";
import { usePriceStore } from "@/stores/priceStore";
import { storeToRefs } from "pinia";

const { postList } = storeToRefs(useArticleStore());
const { getPostList } = useArticleStore();

const { priceList } = storeToRefs(usePriceStore());
const { getPriceList } = usePriceStore();

const loadStores = async () => {
  if (!postList.value?.length) {
    await getPostList();
  }
  if (!priceList.value?.length) {
    await getPriceList();
    console.log(priceList.value);
  }
};
//Load all stores

await loadStores();
const popap = usePopap();
</script>

<template>
  <div class="default">
    <UiAddHeader />
    <MainModalPop v-if="popap.buttonTrigger">
      <MainCountForm />
    </MainModalPop>
    <MainModalPop v-if="popap.timerTrigger">
      <div class="success">
        <h3>Заявка отправлена</h3>

        <button class="calc" @click="() => (popap.timerTrigger = !popap.timerTrigger)">Ok</button>
      </div>
    </MainModalPop>
    <main>
      <slot />
    </main>
    <UiAddFooter />
  </div>
</template>
