<script setup lang="ts">
import { useProfileStore } from "@/stores/profileStore";
import { storeToRefs } from "pinia";

const { profileList } = storeToRefs(useProfileStore());
</script>

<template>
  <div class="users" v-if="profileList">
    <h1>Account Details</h1>
    <ul v-for="user in profileList" :key="user.id">
      <li>
        <p>User ID:</p>
        <p>{{ user.id }}</p>
      </li>
      <li>
        <p>User name:</p>
        <p>{{ user.name }}</p>
      </li>
      <li>
        <p>Email:</p>
        <p>{{ user.email }}</p>
      </li>
      <li>
        <UiElementsAddLink
          class="btn__create"
          :to-path="`/guard/profile/edit/${user.id}`"
          :type-btn="false"
          color-bg="darkBlue"
          size="110px"
          font-size="14px"
          paddings="0.6em 1.3em">
          <span>Update account</span>
        </UiElementsAddLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.users {
  margin-top: 150px;
  & ul {
    display: grid;
    row-gap: 20px;
    & li {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
