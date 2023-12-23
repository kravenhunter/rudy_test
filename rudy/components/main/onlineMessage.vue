<template>
  <div class="message">
    <NuxtLink class="link" to="#footer"> Написать нам </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.message {
  margin: 0 10px;
  padding: 40px 0;
  position: fixed;
  right: 0;
  bottom: 1%;
  z-index: 100;

  & .link {
    border-radius: 5px;
    background: #1536df;
    box-shadow: 0px 2px 3.5px 0px rgba(21, 54, 223, 0.14);
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    border: none;
    padding: 5px 15px;
  }
}
</style>
