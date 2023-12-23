<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  email: "",
  userName: "",
  password: "",
  confirm_password: "",
});
const isLoading = ref(false);
const formHandler = async (event: Event) => {
  try {
    isLoading.value = true;
    const { data, error } = await useFetch("/api/auth/register", {
      method: "POST",
      body: state,
    });
    if (error.value) {
      throw error.value;
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => (isLoading.value = false), 5000);
  }
};
</script>

<template>
  <div class="login_form">
    <div class="title_group">
      <NuxtImg src="/image/logo.png" alt="logo" />
      <h1>Create your account</h1>
    </div>

    <form @submit.prevent="formHandler">
      <input type="email" placeholder="Email" v-model="state.email" />
      <input type="text" placeholder="Name" v-model="state.userName" />
      <input type="password" placeholder="Password" v-model="state.password" />
      <input type="password" placeholder="Confirm password" v-model="state.confirm_password" />
      <button :class="{ disabled: isLoading }" :disabled="isLoading" title="login" type="submit">
        <p>Register</p>
      </button>
      <small
        >If you already have an account try <NuxtLink to="/guard/auth/login">LogIn</NuxtLink>
      </small>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login_form {
  display: grid;
  row-gap: 30px;

  & a {
    color: var(--color-sky-hover);
  }
  & form {
    font-size: 14px;
    background: var(--color-light);
    padding: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    -webkit-box-shadow: -2px 2px 28px -3px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -2px 2px 28px -3px rgba(34, 60, 80, 0.2);
    box-shadow: -2px 2px 28px -3px rgba(34, 60, 80, 0.2);
  }
  & input {
    padding: 10px;
    border: 1px solid rgba(194, 193, 193, 0.885);
    border-radius: 5px;
  }
  & button {
    cursor: pointer;
    border-radius: 5px;
    color: white;
    background: var(--color-sky);
    &:hover {
      background: var(--color-sky-hover);
    }
    & p {
      font-size: 17px;
      font-weight: 700;
      margin: 10px 0;
    }
  }

  & .title_group {
    display: grid;
    justify-items: center;
    & img {
      width: 50px;
    }
    & h1 {
      font-size: 3rem;
      font-weight: 600;
    }
  }
}
.disabled {
  opacity: 0.5;
}
</style>
