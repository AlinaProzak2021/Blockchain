<template>
  <div class="homePage">
    <div class="homePage__content">
      <div class="homePage__about">
        <div class="homePage__title">Трекер привычек? Круче!</div>
        <div class="homePage__subtitle">
          Всегда хотелось начать заняться бегом, но постоянно откладывал? С нами
          ты получишь не только достижения своей цели, но и получить кэшбек!
        </div>
        <div class="homePage__button" @click="scrollToAboutTeam()">
          Подробнее
        </div>
      </div>
      <div class="homePage__about homePage__about__w858" id="aboutTeam">
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
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    scrollToAboutTeam() {
      let contentAfterScroll = document.getElementById("aboutTeam");
      contentAfterScroll.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    },
  },
};
</script>
<style>
.homePage {
  width: 100%;
  background: url("./../../resources/fon1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 40%;
}
.homePage__content {
  width: 85%;
  margin: 0 auto;
  padding-top: 184px;
}
.homePage__about {
  width: 640px;
  display: flex;
  flex-direction: column;
}
.homePage__about:first-child {
  margin-bottom: 196px;
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
  margin-bottom: 76px;
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
@media (max-width: 1370px) {
  .homePage__about {
    width: 542px;
  }
  .homePage__about:first-child {
    margin-bottom: 152px;
  }
  .homePage__about__w858 {
    width: 723px;
  }
  .homePage__title {
    font-size: 36px;
  }
  .homePage__subtitle {
    font-size: 22px;
  }
  .homePage__button {
    width: 300px;
    height: 67px;
  }
}

@media (max-width: 768px) {
  .homePage {
    background: url("./../../resources/768Main.png");
    background-position-y: 20%;
  }
  .homePage__content {
    padding-top: 83px;
  }
  .homePage__about:first-child {
    margin-bottom: 90px;
  }
  .homePage__about {
    width: 590px;
  }
  .homePage__title {
    font-size: 28px;
    margin-bottom: 26px;
    font-weight: 900;
    color: #333333;
  }
  .homePage__subtitle {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .homePage__button {
    width: 192px;
    height: 48px;
    font-size: 18px;

    border: 2px solid #333333;
  }
  .homePage__about__w858 {
    width: 640px;
    padding-bottom: 90px;
  }
}
@media (max-width: 425px) {
  .homePage {
    background: #ffffff;
  }
  .homePage__content {
    padding-top: 64px;
  }
  .homePage__about {
    width: 360px;
  }
  .homePage__about:first-child {
    margin-bottom: 77px;
  }
  .homePage__title {
    font-size: 24px;
    margin-bottom: 48px;
    text-align: center;
  }
  .homePage__subtitle {
    font-size: 14px;
    text-align: justify;
  }
  .homePage__button {
    width: 358px;
    height: 48px;
  }
  .homePage__about__w858 {
    padding-bottom: 63px;
  }
}
</style> 