<script setup>
const show = ref(false);
const popap = usePopap();
</script>

<template>
  <header>
    <NuxtLink class="logo" to="/">
      <p class="rudy">Rudy</p>
      <p class="studio">Rudy Studio</p>
    </NuxtLink>
    <nav class="desktop__menu">
      <ul class="desktop__menu__ul">
        <li>
          <a href="#offer" class="link">Сайты под ключ</a>
        </li>
        <li>
          <a href="#seo" class="link">Продвижение</a>
        </li>
        <li>
          <a href="#works" class="link">Портфолио</a>
        </li>
        <li>
          <NuxtLink class="link" to="/blog">Блог</NuxtLink>
        </li>
        <li>
          <a href="#step" class="link">Этапы и оплата</a>
        </li>
      </ul>
    </nav>
    <nav class="mobile__menu">
      <Transition name="fade" mode="out-in">
        <UiElementsIcons
          icon-name="ci:menu-alt-01"
          class-icon="burger"
          color-icon="#1536DF"
          size-width="24px"
          @click="show = !show"
          key="menu" />
      </Transition>
      <Transition name="fade">
        <ul v-if="show" class="mobile__menu__ul">
          <li>
            <a class="link">Сайты под ключ</a>
          </li>
          <li>
            <a class="link">Продвижение</a>
          </li>
          <li>
            <a class="link">Портфолио</a>
          </li>
          <li>
            <NuxtLink class="link" to="/">Блог</NuxtLink>
          </li>
          <li>
            <a class="link">Этапы и оплата</a>
          </li>
        </ul>
      </Transition>
    </nav>
    <a class="menu__button" @click="() => (popap.buttonTrigger = !popap.buttonTrigger)">
      <span>Посчитать стоимость</span>
      <UiElementsIcons
        icon-name="ph:arrow-up-light"
        class-icon="arrow"
        color-icon="#1536DF"
        size-width="24px"></UiElementsIcons>
    </a>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 10px;

  & nav {
    order: 2;
    & .desktop__menu__ul {
      display: flex;
      column-gap: 30px;

      & li {
        color: #000;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px; /* 162.5% */
      }
    }
  }
}
.logo .studio {
  color: #000;
  font-size: 25px;
  font-weight: 100;
  line-height: 26px; /* 104% */
  font-family: "Museo Sans Cyrl 100";
  order: 1;
}
.menu__button {
  display: flex;
  align-items: flex-end;
  color: #1536df;
  column-gap: 12px;
  order: 3;
  cursor: pointer;

  & span {
    color: #1536df;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px; /* 162.5% */
  }
}
.arrow {
  padding: 0;
  margin: 0;
}

.mobile__menu {
  display: none;
}

.rudy {
  display: none;
}

@media screen and (max-width: 999px) {
  .logo .studio {
    font-size: 20px;
  }
  .menu__button span {
    font-size: 13px;
  }
  .link {
    font-size: 13px;
  }
}
@media screen and (max-width: 891px) {
  .logo .studio {
    display: none;
  }
  .rudy {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  .desktop__menu {
    display: none;
  }
  .mobile__menu {
    display: block;
    order: 4;
  }
}
</style>
