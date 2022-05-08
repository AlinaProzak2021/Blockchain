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
        <div class="homePage__subtitle">
          Если вы не выполняете условия, то средства уходят - половина в фонд
          проекта, половина в центры помощи в борьбе с ожирением). Если вы
          справляетесь с задачей, то получаете средства назад + часть средств из
          фонда (более 5% исходной суммы).
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer__content">
        <div class="footer__contact-info">
          <div class="contact-info__p">
            <p>СПбГУТ, 2022</p>
            <p>тут почта или контакты</p>
          </div>
          <div class="contact-info__image">
            <img src="./../../res/Vector.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "./nav-bar.vue";
export default {
  components: {
    navBar,
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
  margin-bottom: 76px;
padding-bottom: 100px;
}
.homePage__about {
  width: 640px;
  display: flex;
  flex-direction: column;
  margin-top: 184px;
}
.homePage__about__w858 {
  width: 858px;
  margin-bottom: 75px;
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
  margin-bottom: 300px;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #4f4f4f;
  height: 180px;
  width: 100%;
}
.footer__content {
  width: 85%;
  margin: 0 auto;
}
.footer__contact-info {
  width: 300px;
  display: flex;
  align-items: center;
   



  height: 100%;
}
.footer__contact-info p {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #fafafa;
}
</style>