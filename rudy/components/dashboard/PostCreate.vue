<script setup lang="ts">
import { useArticleStore } from "@/stores/postStore";

const state = reactive({
  title: "",
  author: "",
  imagePreview: "",
  subDescription: "",
  description: "",
});

const { addPost } = useArticleStore();

const fileL = ref<File | null>(null);

const resetForm = () => {
  state.title = "";
  state.author = "";
  state.imagePreview = "";
  state.subDescription = "";
  state.description = "";
  fileL.value = null;
};

const isEnableComputed = computed(() => {
  if (state.title && state.subDescription && state.description && fileL.value) {
    return true;
  } else {
    return false;
  }
});

const onFileSelected = async (event: Event) => {
  const [_file] = (event.target as HTMLInputElement)?.files as FileList;

  fileL.value = _file;
};

const uploadFile = async () => {
  if (!fileL.value) {
    return "Emty File";
  }

  try {
    const body = new FormData();
    // fileL.value.name = `${new Date().toLocaleDateString()}_${fileL.value.name}`;
    body.append(fileL.value.name, fileL.value, fileL.value.name);

    const result = await $fetch("/api/image/upload", {
      method: "POST",
      body,
    });

    return result;
  } catch (error) {
    return "Error";
  }
};
const submitForm = async () => {
  if (isEnableComputed.value) {
    const resultName = await uploadFile();

    if (resultName !== "Error" || resultName !== "Emty File") {
      state.imagePreview = resultName;
      const result = await addPost(state);

      if (result === "Success") {
        resetForm();
        return await navigateTo("/guard");
      }
    }
  } else {
    console.log("Empty Fields");
  }
};
</script>

<template>
  <div class="container">
    <div class="form__container">
      <h1>Create Article</h1>

      <div class="form__container__block">
        <div class="item">
          <UiElementsAddPostInput
            label="Title"
            width-form="100%"
            font-size="2rem"
            name="title"
            placeholder="Input Title"
            paddings="3px 10px"
            v-model:value.trim="state.title" />
          <div class="upload">
            <label for="upload">Image preview</label>
            <input type="file" name="upload" @change="onFileSelected" />
          </div>
        </div>

        <div class="short__description">
          <UiElementsAddPostInput
            :is-input="false"
            label="Short body"
            width-form="100%"
            font-size="2rem"
            paddings="1em"
            name="shortBody"
            placeholder="Input your Short Body"
            v-model:value.trim="state.subDescription" />
        </div>

        <div class="description">
          <UiElementsEditor v-model:value="state.description" />
        </div>
        <UiElementsAddButton
          title="Add Post"
          font-size="16px"
          paddings="0.4em"
          style="width: 150px"
          color-bg="dark"
          @click="submitForm"
          >Save Post</UiElementsAddButton
        >
      </div>
    </div>
    <div class="content__block">
      <div class="content" v-html="state.description"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 1500px;
  display: flex;
  column-gap: 56px;
  padding-top: 50px;
  & .form__container {
    &__block {
      width: 550px;
      display: grid;

      row-gap: 50px;
      & .item {
        display: grid;

        row-gap: 20px;
      }
    }
  }
}
</style>
