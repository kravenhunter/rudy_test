<script setup>
const shows = ref(false);
</script>

<template>
  <div class="desc">
    <div class="title__desc">
      <h3>Продвижение сайтов под ключ</h3>
      <p>
        Продвижение в сети - это не просто рекламные кампании, а комплексная работа, охватывающая
        все аспекты веб-разработки и маркетинга:
      </p>
    </div>
    <div>
      <ul>
        <li>UI/UX Дизайн для повышения удобства пользователей.</li>
        <li>
          Разработка сайта с высокой скоростью загрузки и удобным функционалом. Наш инструментарий
          включает Figma для дизайна и Tilda для разработки.
        </li>
        <li>Привлечение целевой аудитории из различных источников.</li>
        <li>SERM для поддержания репутации сайта в интернете.</li>
        <li>Регулярный анализ пользователей, конкурентов и внешних факторов.</li>
      </ul>
    </div>
    <div>
      <button @click="shows = !shows">
        <p>Читать больше</p>
        <UiElementsIcons
          icon-name="ph:arrow-up-light"
          class-icon="arrow"
          color-icon="#1536DF"
          size-width="24px"></UiElementsIcons>
      </button>
      <Transition>
        <div class="transition__text" v-if="shows">
          <h2>Преимущества продвижения в студии RudyStudio:</h2>
          <ul>
            <p>Гарантированные результаты в договоре</p>
            <li>Быстрый запуск.</li>
            <li>Стоимость продвижения от 105$/месяц.</li>
            <p>
              Мы идем в ногу с развитием цифровых технологий, используя эффективные методики
              продвижения сайтов в Минске, Беларуси, России и странах СНГ.
            </p>
          </ul>
          <h2>Продвижение подходит тем, кто хочет:</h2>
          <ul>
            <li>Повысить посещаемость в поисковых системах.</li>
            <li>Получить целевых клиентов.</li>
            <li>Улучшить репутацию в поисковом пространстве.</li>
            <li>Развиваться в других регионах и странах.</li>
            <li>Увеличить количество заявок и продаж.</li>
          </ul>
        </div>
      </Transition>
    </div>
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
button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  & p {
    color: #1536df;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px; /* 162.5% */
  }
}
h3 {
  color: #000;
  font-family: "Museo Sans Crl 300";
  font-size: 24px;
  font-weight: 300;
  line-height: 209.8%; /* 50.352px */
}
.title__desc {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
ul {
  // margin: 0;
  padding-left: 16px;
}
li {
  list-style: disc;
}
</style>
