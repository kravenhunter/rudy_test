<script setup lang="ts">
import { usePriceStore } from "@/stores/priceStore";

const state = reactive({
  title: "",
  Price: 0,
});
const resetForm = () => {
  state.title = "";
  state.Price = 0;
};
const { addPrice } = usePriceStore();
const submitForm = async () => {
  const result = await addPrice(state);

  if (result === "Success") {
    resetForm();
    return await navigateTo("/guard/price");
  }
};
</script>

<template>
  <div class="price__create">
    <div class="form___block">
      <UiElementsAddPostInput
        :is-input="false"
        label="Title"
        width-form="100%"
        font-size="2rem"
        paddings="1em"
        name="title"
        placeholder="Input your Title"
        v-model:value.trim="state.title" />
      <UiElementsAddInputNumber
        label="Price"
        width-form="100%"
        name="price"
        paddings="3px 10px"
        v-model:value="state.Price" />
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
  </div>
</template>

<style scoped lang="scss">
.form___block {
  width: min(100%, 500px);
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
