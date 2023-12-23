<script setup>
defineProps({
  buttonTitle: String,
  transitionText: String,
});

const show = ref(false);
</script>

<template>
  <div>
    <button class="transition__button" @click="show = !show">
      <p>{{ buttonTitle }}</p>
      <UiElementsIcons
        icon-name="simple-line-icons:plus"
        :color-icon="show ? '#1536df' : 'black'" />
    </button>
    <Transition>
      <p class="transition__text" v-if="show">{{ transitionText }}</p>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.transition__button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  padding: 0;
  text-align: start;
  & p {
    color: #000;
    font-family: "Museo Sans Cyrl";
    font-size: 36px;
    font-weight: 400;
    line-height: 109.8%; /* 39.528px */
    padding: 20px 0;
  }
}
.transition__text {
  color: #484848;
  font-family: "Mulish";
  font-size: 24px;
  font-weight: 400;
  max-width: 1138px;
  padding-bottom: 20px;
}
.plusIcon {
  background: #1536df;
  border-radius: 100%;
}
@media screen and (max-width: 660px) {
  .transition__button p {
    font-size: 24px;
  }
  .transition__text {
    font-size: 18px;
  }
}
</style>
