<template>
  <div class="work">
    <UiElementsTitle title="Наши работы" />
    <div class="work__flex">
      <div class="work__row__one">
        <div class="fewho">
          <a href="https://%D0%A4%D0%B5%D1%85%D1%83.%D0%B1%D0%B5%D0%BB">
            <div class="fewho__img">
              <NuxtImg src="/image/fewho.png" />
            </div>
          </a>
          <p class="port__title">ООО “ФЕЙХУ”</p>
          <p class="port__desk">Сайт поставщика пищевого сырья в РБ</p>
        </div>
        <div class="facture">
          <a href="https://factureproject.ru">
            <div class="facture__img">
              <NuxtImg src="/image/facture.png" />
            </div>
          </a>
          <p class="port__title">Facture Project</p>
          <p class="port__desk">Сайт производителя мебели из Мрамора в РФ</p>
        </div>
      </div>
      <div class="work__row__two">
        <div class="asai">
          <a href="https://Asaivapeshop.by">
            <div class="asai__img">
              <NuxtImg src="/image/asai.png" />
            </div>
          </a>
          <p class="port__title">AsaiVapeShop</p>
          <p class="port__desk">Сайт интернет-магазина вейпшопа в РБ</p>
        </div>
        <div class="soen">
          <a href="https://Soen.su">
            <div class="soen__img">
              <NuxtImg src="/image/soen.png" />
            </div>
          </a>
          <p class="port__title">SOEN</p>
          <p class="port__desk">Сайт интернет-магазина косметики в РФ</p>
        </div>
        <div class="lafo">
          <a href="https://Laforme.su">
            <div class="lafo__img">
              <NuxtImg src="/image/lafo.png" />
            </div>
          </a>
          <p class="port__title">Laforme</p>
          <p class="port__desk">Сайт бренда одежды из Екатеринбурга</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work__flex {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
.work__row__two {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.port__desk {
  color: #000;
  font-family: "Museo Sans Cyrl 400";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 109.8%; /* 17.568px */
}
.port__title {
  color: #000;
  font-family: "Museo Sans Cyrl 500";
  font-size: 24px;
  font-weight: 400;
  line-height: 109.8%; /* 26.352px */
  padding: 20px 0;
}
.work__row__one {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}
.work {
  padding-top: 180px;
}
.fewho__img {
  position: relative;
  flex: 1 1 50%;
  width: 710px;
  height: 319px;
  & img {
    width: inherit;
  }
}
.facture__img {
  position: relative;
  flex: 1 1 50%;
  width: 710px;
  height: 319px;
  & img {
    width: inherit;
  }
}
.asai__img {
  width: 466px;
  height: 319px;
  & img {
    width: inherit;
  }
}
.soen__img {
  width: 466px;
  height: 319px;
  & img {
    width: inherit;
  }
}
.lafo__img {
  width: 466px;
  height: 319px;
  & img {
    width: inherit;
  }
}
@media screen and (max-width: 1425px) {
  .work__row__two {
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
  }
  .work__row__one {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 720px) {
  .facture {
    display: none;
  }
  .fewho__img,
  .soen__img,
  .lafo__img {
    width: 340px;
    height: 155px;
  }
  .asai {
    display: none;
  }
  .work__row__one {
    align-items: flex-start;
    justify-content: center;
  }
  .work__row__two {
    justify-content: center;
  }
  .soen__img,
  .lafo__img {
    padding-bottom: 80px;
  }
}
</style>
