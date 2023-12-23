<script setup>
defineProps({
  timeDay: String,
  title: String,
  description: String,
  metaOne: String,
  metaTwo: String,
  metaThree: String,
  metaFour: String,
  metaFive: String,
  metaSix: String,
  cost: String,
  classCard: String,
});
</script>

<template>
  <div class="cards__cost">
    <div>
      <div class="in__item__block">
        <p>{{ timeDay }}</p>
        <p>{{ title }}</p>
        <p :class="classCard">{{ description }}</p>
      </div>
      <div class="meta">
        <p>{{ metaOne }}</p>
        <p>{{ metaTwo }}</p>
        <p>{{ metaThree }}</p>
        <p>{{ metaFour }}</p>
        <p>{{ metaFive }}</p>
        <p>{{ metaSix }}</p>
      </div>
    </div>
    <div>
      <div class="cost">
        <p>Цена</p>
        <p>
          от <span>{{ cost }}</span>
        </p>
      </div>
      <UiElementsButton title="Расчитать стоимость" link="#count" :is-button="false" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cost {
  display: flex;
  justify-content: space-between;
  margin: 0 40px 20px 40px;
  color: #484848;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 400;
  & p:nth-child(2) {
    font-size: 24px;
    & span {
      color: #000;
    }
  }
}
.meta {
  padding: 20px 0 0px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  & p {
    color: #484848;
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.cards__cost {
  border: 1px solid #a5a5a5;
  border-radius: 15px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.in__item__block {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border-radius: 0px 15px 15px 0px;
  background: #ecefff;
  margin: 30px 40px 0 0;
  padding: 20px 0 20px 40px;
  & p:nth-child(1) {
    color: #838383;
    font-size: 14px;
    font-weight: 400;
  }
  & p:nth-child(2) {
    color: #000;
    line-height: 109.8%; /* 39.528px */
    font-family: "Museo Sans Cyrl 500";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
  }
  & p:nth-child(3) {
    color: #838383;
    font-size: 14px;
    font-weight: 400;
    width: 182px;
  }
}
.card__three {
  width: 240px !important;
}
@media screen and (max-width: 430px) {
  .in__item__block {
    & p:nth-child(1) {
      font-size: 12px;
    }
    & p:nth-child(2) {
      font-size: 26px;
    }
    & p:nth-child(3) {
      font-size: 12px;
    }
  }
  .button button {
    padding: 17px 60px;
    font-size: 12px;
  }
}
</style>
