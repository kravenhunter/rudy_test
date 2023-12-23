<template>
  <div class="footer" id="footer">
    <div>
      <a href="">Сайты под ключ</a>
      <a href="">Продвижение</a>
      <a href="">Портфолио</a>
      <a href="">Блог</a>
      <a href="">Этапы и оплата</a>
    </div>
    <div>
      <a href="">Telegram</a>
      <a href="">Viber</a>
      <a href="">Instagram</a>
      <a href="">Vk</a>
    </div>
    <div>
      <a href="">+375 (29) 946-8676</a>
      <a href="">УНП: KM0109764</a>
      <a href="">RudyStudio@gmail.com</a>
      <nuxt-link to="/">Политика конфиденциальности</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 120px 0;
  color: black;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}
@media screen and (max-width: 520px) {
  .footer {
    display: block;
  }
}
</style>
