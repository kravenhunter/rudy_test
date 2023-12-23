<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";
import type { IUser } from "@/types/IType";

const route = useRoute();
const currentPost = ref<IUser>();
const { getProfileById, updateProfile } = useProfileStore();

route.params.id && (currentPost.value = getProfileById(String(route.params.id)));

const state = reactive({
  id: currentPost.value?.id ?? "",
  name: currentPost.value?.name ?? "",
  email: currentPost.value?.email ?? "",
  password: currentPost.value?.password ?? "",
});
const isEnableComputed = computed(() => {
  if (state.name && state.email && state.password) {
    return true;
  } else {
    return false;
  }
});
const resetForm = () => {
  state.id = "";
  state.name = "";
  state.email = "";
  state.password = "";
};

const submitForm = async () => {
  if (isEnableComputed.value && currentPost.value?.id) {
    const result = await updateProfile(state);

    if (result === "Success") {
      resetForm();
      return await navigateTo("/guard/profile");
    }
  } else {
    console.log("Empry Fields");
  }
};
</script>

<template>
  <div class="container">
    <h1>Update Account</h1>
    <div class="form___block">
      <div class="item">
        <UiElementsAddPostInput
          label="User name"
          width-form="100%"
          font-size="2rem"
          name="title"
          placeholder="Input User name"
          paddings="3px 10px"
          v-model:value.trim="state.name" />
      </div>

      <div class="short__description">
        <UiElementsAddPostInput
          :is-input="false"
          label="Email"
          width-form="100%"
          font-size="2rem"
          paddings="1em"
          name="shortBody"
          placeholder="Input your Email"
          v-model:value.trim="state.email" />
      </div>
      <div class="description">
        <UiElementsAddPostInput
          :is-input="false"
          label="Password"
          width-form="100%"
          font-size="2rem"
          paddings="1em"
          name="shortBody"
          placeholder="Input your Password"
          v-model:value.trim="state.password" />
      </div>
      <UiElementsAddButton
        title="Save"
        font-size="16px"
        paddings="0.4em"
        style="width: 150px"
        color-bg="dark"
        @click="submitForm"
        >Save Changes</UiElementsAddButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  & .form___block {
    width: 550px;
    display: grid;

    row-gap: 50px;
    & .item {
      display: grid;

      row-gap: 20px;
    }
  }
}
</style>
