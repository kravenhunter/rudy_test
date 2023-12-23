<!-- eslint-disable prefer-const -->
<script setup lang="ts">
import { reloadNuxtApp } from "#app";
import { usePriceStore } from "@/stores/priceStore";
import type { IPriceUpdate } from "@/types/IType";
import type { Price } from "@prisma/client";
import { storeToRefs } from "pinia";

const router = useRouter();
const route = useRoute();
const { priceList } = storeToRefs(usePriceStore());
const { updatePrice } = usePriceStore();

const selectedHeroes = ref<IPriceUpdate[]>([]);
let checkBoxes = ref<boolean[]>([]);
if (priceList.value) {
  checkBoxes.value.length = priceList.value.length;
  checkBoxes.value.fill(true);
}

const changePrice = (item: Price, event: Event) => {
  selectedHeroes.value = selectedHeroes.value.filter((el) => el.id !== item.id);
  selectedHeroes.value.push({
    id: item.id,
    title: item.title,
    Price: Number((event?.target as HTMLInputElement)?.value),
  });
};
const submitForm = async () => {
  const result = await updatePrice(selectedHeroes.value);

  if (result === "Success") {
    // return await navigateTo("/guard/price");
    reloadNuxtApp({
      path: "/guard/price",
      ttl: 1000, // default 10000
    });
  }
};

const handleClick = (id: number, event: Event) => {
  checkBoxes.value[id] = !(event.target as HTMLInputElement)?.checked;
};
</script>

<template>
  <div class="table" v-if="priceList">
    <ul>
      <li v-for="(price, index) in priceList" :key="price.id">
        <div class="checkbox">
          <input
            type="checkbox"
            :name="price.id"
            :id="price.id"
            @input="(event:Event) => handleClick(index , event)" />
        </div>
        <div class="title">
          <p>{{ price.title }}</p>
        </div>
        <div class="price">
          <p>{{ price.Price }}$</p>
        </div>
        <div class="price_input">
          <input
            class="price"
            type="number"
            :name="price.id"
            @input="(event: Event) => changePrice(price,event )"
            :disabled="checkBoxes[index]" />
        </div>
      </li>
    </ul>
    <UiElementsAddButton
      title="Save"
      font-size="16px"
      paddings="0.4em"
      style="width: 150px"
      color-bg="dark"
      @click="submitForm"
      >Save</UiElementsAddButton
    >
  </div>
</template>

<style lang="scss" scoped>
.table {
  & li {
    display: flex;
    column-gap: 15px;
  }
  & .title {
    width: 200px;
  }
  & .price {
    width: 100px;
    text-align: center;
  }
}
</style>
