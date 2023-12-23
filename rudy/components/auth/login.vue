<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import { reactive } from "vue";

const { signIn } = useAuth();
const state = reactive({
  email: "",
  password: "",
});
const isLoading = ref(false);
const errors = ref<string>("");

const formHandler = async (event: Event) => {
  event.preventDefault();
  // console.log(state);
  // navigateTo("/guard");
  try {
    isLoading.value = true;
    const { error, url } = await signIn("credentials", {
      email: state.email,
      password: state.password,
      // Если включить то  при ошибочной валидации  произойдет редирект на страницу ошибки
      //Есом  хотим ловить  ошибку валидации то отключаем redirect
      redirect: false,
    });
    if (error) {
      // Do your custom error handling here
      // console.log(error);
      errors.value = "Не верные данные";
    } else {
      // No error, continue with the sign in, e.g., by following the returned redirect:
      return navigateTo("/guard", { external: true });
    }

    // console.log(url);

    // setTimeout(async () => {
    //   isLoading.value = false;
    //   const result = await signIn("credentials", {
    //     email: state.email,
    //     password: state.password,
    //     redirect: true,
    //     callbackUrl: "/guard",

    //   });
    // }, 3000);
  } catch (error) {
    console.log(error);
  }
  //  finally {
  //   setTimeout(() => (isLoading.value = false), 5000);
  // }
};
</script>

<template>
  <div class="login_form">
    <div class="title_group">
      <NuxtImg src="/image/logo.png" alt="logo" />

      <h2>Login to your account</h2>
    </div>

    <form @submit.prevent="formHandler">
      <input type="email" placeholder="Email" v-model="state.email" />
      <input type="password" placeholder="Password" v-model="state.password" />
      <small v-if="errors">{{ errors }}</small>
      <button title="login" type="submit"><p>LogIn</p></button>
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
  & small {
    color: var(--color-red);
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
</style>
