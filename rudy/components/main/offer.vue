<script setup lang="ts">
const popap = usePopap();
</script>

<template>
  <div class="offer">
    <div class="offer__title">
      <div class="title">
        <h1>Разработка и<br />продвижение сайтов</h1>
        <h2>
          Создаём сайты под ключ. Рассчитываем бюджет для<br />каждого проекта, чтобы сайт был вам
          по карману!<br />Поддерживаем свои проекты после сдачи
        </h2>
      </div>
      <div class="offer__item">
        <div class="items__offers">
          <p>До 20 дней</p>
          <p>Разработка сайта под ключ</p>
        </div>
        <div class="items__offers offers__center">
          <p>3 года</p>
          <p>Гарантии на сайт</p>
        </div>
        <div class="items__offers">
          <p>От 150$</p>
          <p>Подберём бюджет под малые проекты</p>
        </div>
      </div>
      <div class="offer__button">
        <button class="calc" @click="() => (popap.buttonTrigger = !popap.buttonTrigger)">
          <span>Расчитать стоимость</span>
          <span>></span>
        </button>
        <NuxtLink class="call__me" to="#modal">
          <span>Связаться с нами</span>
          <span>></span>
        </NuxtLink>
      </div>
    </div>
    <div class="offer__image">
      <NuxtImg src="/image/PSD-4.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.offer__button {
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding-top: 40px;
}
.call__me {
  background: none;
  border-radius: 5px;
  border: 1px solid #1536df;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1536df;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  padding: 16px 21px;

  & span:nth-child(1) {
    padding-right: 54px;
  }
}
.offer__item {
  display: flex;
  column-gap: 38px;
  flex-wrap: wrap;
  row-gap: 20px;
}
.items__offers {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  & p:nth-child(1) {
    color: #1536df;
    font-size: 36px;
    font-weight: 400;
  }
  & p:nth-child(2) {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    width: 110px;
  }
}
.offer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 55px 10px 0 10px;
}
h1 {
  color: #000;
  font-size: 60px;
  font-family: "Museo Sans Cyrl 500" !important;
  line-height: 109.8%; /* 65.88px */
  font-weight: 400;
}
h2 {
  color: #767676;
  font-size: 24px;
  font-weight: 400;
}
.offer__image {
  width: 710px;
  height: 456px;
  & img {
    width: inherit;
    height: inherit;
  }
}
@media screen and (max-width: 1300px) {
  .offer__image {
    width: 610px;
    height: 356px;
    & img {
      width: inherit;
      height: inherit;
    }
  }
}
@media screen and (max-width: 1100px) {
  .offer__image {
    width: 410px;
    height: 256px;
    & img {
      width: inherit;
      height: inherit;
    }
  }
}
@media screen and (max-width: 1000px) {
  .offer__image {
    display: none;
  }
}
@media screen and (max-width: 610px) {
  h1 {
    font-size: 38px;
  }
  h2 {
    font-size: 14px;
  }
  .items__offers {
    & p:nth-child(1) {
      color: #1536df;
      font-size: 24px;
      font-weight: 400;
    }
    & p:nth-child(2) {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      width: 170px;
    }
  }
}
@media screen and (max-width: 592px) {
  .offers__center {
    display: none;
  }
}
@media screen and (max-width: 490px) {
  .calc {
    padding: 16px 0px;
    font-size: 12px;
    & span:nth-child(1) {
      padding-right: 12px;
    }
  }
  .call__me {
    padding: 16px 0px;
    font-size: 12px;
    & span:nth-child(1) {
      padding-right: 12px;
    }
  }
}
@media screen and (max-width: 455px) {
  .calc {
    width: 80%;
    margin-bottom: 10px;
  }
  .call__me {
    width: 80%;
  }
}
@media screen and (max-width: 390px) {
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 12px;
  }
  .items__offers {
    & p:nth-child(1) {
      color: #1536df;
      font-size: 20px;
      font-weight: 400;
    }
    & p:nth-child(2) {
      color: #000;
      font-size: 12px;
      font-weight: 400;
      width: 170px;
    }
  }
  .calc {
    margin-bottom: 10px;
  }
  .offer__button button {
    justify-content: space-around;
    padding: 16px 16px;
  }
}
</style>
