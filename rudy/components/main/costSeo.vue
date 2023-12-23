<script setup lang="ts">
import { usePriceStore } from "@/stores/priceStore";

const { priceList } = storeToRefs(usePriceStore());
</script>

<template>
  <div class="cost__seo" v-if="priceList" id="seo">
    <UiElementsTitle title="Стоимость продвижения" />

    <div class="costSeo__flex">
      <UiElementsCostItem
        title="SEO оптимизация"
        description="SEO продвижение подойдет для проектов которые работают в долгосрочной перспективе"
        meta-one="Создание сематического ядра"
        meta-two="Внутренняя оптимизация сайта"
        meta-three="Внешняя оптимизация сайта"
        :cost="`${priceList.find((el) => el.title.includes('SEO оптимизация'))?.Price}$`" />
      <UiElementsCostItem
        title="Контекстное"
        description="Контекстное продвижение позволит запустить продажи и получить первые заявки спустя 3 дня"
        meta-one="Подбор ключевых слов"
        meta-two="Настройка рекламных компаний"
        meta-three="Анализ и подбор Целевой аудитории"
        meta-four="Настройка целей и конверсий"
        :cost="`${priceList.find((el) => el.title.includes('Контекстное'))?.Price}$`" />
      <UiElementsCostItem
        title="Копирайтинг"
        description="Составим текст для вашего сайта, блога, соц сетей. Пишем тексты для любой ниши"
        meta-one="Анализ сферы деятельности ( продукта )"
        meta-two="Подбор ключевых слов"
        meta-three="Написание текста"
        :cost="`${priceList.find((el) => el.title.includes('Копирайтинг'))?.Price}$`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cost__seo {
  padding-top: 120px;
}
.costSeo__flex {
  display: flex;
  column-gap: 20px;
  row-gap: 20px;
}
@media screen and (max-width: 800px) {
  .costSeo__flex {
    flex-wrap: wrap;
    margin: 0 20px;
    justify-content: center;
  }
}
</style>
