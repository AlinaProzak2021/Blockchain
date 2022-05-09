<template>
  <div class="homePage">
    <navBar></navBar>
    <div class="homePage__content">
      <div class="homePage__about">
        <div class="homePage__title">Трекер привычек? Круче!</div>
        <div class="homePage__subtitle">
          Всегда хотелось начать заняться бегом, но постоянно откладывал? С нами
          ты получишь не только достижения своей цели, но и получить кэшбек!
        </div>
        <div class="homePage__button">Подробнее</div>
      </div>
      <div class="homePage__about homePage__about__w858">
        <div class="homePage__title">Почему мы?</div>
        <div class="homePage__subtitle">
          С помощью нашего сервиса вы формулируете цель (нагрузку в течение дня,
          сожженные ккал), длительность ее достижения, сумму, которую готовы
          положить для ее достижения.
        </div>
        <div class="homePage__subtitle">
          Приложение отслеживает прогресс и корректность выполнения задач через
          ваши сторонние сервисы.
        </div>
        <div class="homePage__subtitle homePage__subtitle__mb0">
          Если вы не выполняете условия, то средства уходят - половина в фонд
          проекта, половина в центры помощи в борьбе с ожирением). Если вы
          справляетесь с задачей, то получаете средства назад + часть средств из
          фонда (более 5% исходной суммы).
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from './footerForPages.vue'
import navBar from "./nav-bar.vue";
export default {
  components: {
    navBar,
     foot
  },
};
</script>
<style>
.homePage {
  width: 100%;
  background: url("./../../res/fon1(1).png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
}
.homePage__content {
  width: 85%;
  margin: 0 auto;
  padding-bottom: 330px;
}
.homePage__about {
  width: 640px;
  display: flex;
  flex-direction: column;
  margin-top: 184px;
}
.homePage__about:first-child {
  margin-bottom: 460px;
}
.homePage__about__w858 {
  width: 858px;
  margin-top: 0;
}
.homePage__title {
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 100%;
  margin-bottom: 54px;
  font-family: "Roboto", sans-serif;
  color: #4f4f4f;
}
.homePage__subtitle {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  color: #4f4f4f;
  font-feature-settings: "pnum" on, "lnum" on;
  margin-bottom: 51px;
}
.homePage__subtitle__mb0 {
  margin-bottom: 0;
}
.homePage__button {
  border: 8px solid #4f4f4f;
  border-radius: 3px;
  background: #fafafa;
  width: 424px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #4f4f4f;
}
</style>