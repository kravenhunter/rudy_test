<template>
  <div class="requ">
    <UiElementsTitle title="Видео отзывы" />
    <div>
      <div class="qqq">
        <div class="video__flex">
          <iframe
            src="https://www.youtube.com/shorts/AjZApYwWG88"
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}
                        html,body{height:100%}
                        img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                        span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                        </style>
                        <a href=https://www.youtube.com/shorts/AjZApYwWG88?autoplay=1>
                        <img src=image/videoOne.png alt='Demo video'>
                        <span>▶</span>
                        </a>"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Demo video">
          </iframe>
          <div class="video__text">
            <p>LaForme</p>
            <p>Отзыв от Данилы, владелец бренда LaForme</p>
          </div>
        </div>
        <div class="video__flex">
          <iframe
            src="https://www.youtube.com/embed/izvIofkLD4w?si=5IhTlsa4nQcktx8-"
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}
                        html,body{height:100%}
                        img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                        span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                        </style>
                        <a href=https://www.youtube.com/embed/izvIofkLD4w?si=5IhTlsa4nQcktx8-?autoplay=1>
                        <img src=image/videoTwo.png alt='Demo video'>
                        <span>▶</span>
                        </a>"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Demo video">
          </iframe>
          <div class="video__text">
            <p>AsaiVapeShop</p>
            <p>Отзыв от Владислава, владелец Asaivapeshop</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
iframe {
  width: 560px;
  height: 315px;
}
.requ {
  padding-top: 120px;
}
.video__text {
  //padding-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  & p:nth-child(1) {
    color: #000;
    font-family: "Museo Sans Cyrl 500";
    font-size: 24px;
    font-weight: 400;
    line-height: 109.8%; /* 26.352px */
  }
  & p:nth-child(2) {
    color: #000;
    font-family: "Museo Sans Cyrl 300";
    font-size: 16px;
    font-weight: 300;
    line-height: 109.8%; /* 17.568px */
  }
}
.qqq {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & iframe {
    border-radius: 25px;
    width: 709px;
    height: 320px;
  }
}
@media screen and (max-width: 760px) {
  .qqq iframe[data-v-5422c035] {
    width: 340px;
    height: 190px;
  }
  .video__text {
    padding: 0;
  }
}
@media screen and (max-width: 660px) {
  .qqq {
    flex-direction: column;
  }
}
</style>
