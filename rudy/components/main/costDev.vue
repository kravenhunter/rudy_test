<script setup lang="ts">
import { usePriceStore } from "@/stores/priceStore";

const { priceList } = storeToRefs(usePriceStore());
</script>

<template>
  <div class="cost__dev" v-if="priceList">
    <UiElementsTitle title="Стоимость разработки" />

    <div class="cards">
      <UiElementsCostItem
        time-day="Сроки 5-10 дней"
        title="Лэндинг"
        description="Для продаж и получения заявок"
        meta-one="Уникальный дизайн"
        meta-two="Мобильная адаптация"
        meta-three="Создание бота в телеграм"
        meta-four="SEO оптимизация"
        :cost="`${priceList.find((el) => el.title.includes('Лэндинг'))?.Price}$`" />
      <UiElementsCostItem
        time-day="Сроки 9-17 дней"
        title="Интернет магазин"
        description="Для продаж товаров или услуг"
        meta-one="Уникальный дизайн"
        meta-two="Мобильная адаптация"
        meta-three="Подключение CRM"
        meta-four="SEO оптимизация"
        meta-five="Добавление каталога"
        meta-six="Интеграция с 1С, Мой Склад, ВК"
        :cost="`${priceList.find((el) => el.title.includes('Интернет магазин'))?.Price}$`" />
      <UiElementsCostItem
        time-day="Сроки 9-15 дней"
        title="Корпоративный"
        description="Для предоставления информации о компании ее товарах или услугах"
        meta-one="Уникальный дизайн"
        meta-two="Мобильная адаптация"
        meta-three="Анализ продукта и конкурентов"
        meta-four="Разработка структуры"
        meta-five="SEO оптимизация"
        :cost="`${priceList.find((el) => el.title.includes('Корпоративный'))?.Price}$`"
        class-card="card__three" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cost__dev {
  padding-top: 120px;
}
.cards {
  display: flex;
  justify-content: stretch;
  // flex-wrap: wrap;
  gap: 20px;
}
@media screen and (max-width: 800px) {
  .cards {
    flex-wrap: wrap;
    margin: 0 20px;
    justify-content: center;
  }
}
</style>
