<template>
  <div class="aboutTeam">
    <navBar></navBar>
    <div class="aboutTeam__content">
      <div class="aboutTeam__info">
        <div class="aboutTeam__title">Немного о нас</div>
        <div class="aboutTeam__subtitle">
          Мы вообще оч крутые на факультативе занимаемся
        </div>
      </div>
      <div class="aboutTeam__roadmap">
        <div class="aboutTeam__title">Роадмапа нашего проекта</div>
        <div class="roadmap" v-for="item in roadmap" :key="item">
          <div class="roadmap__image">
            <div class="arrow"></div>
            <div class="line" v-show="item !== roadmap[6]"></div>
          </div>
          <div class="roadmap__information">
            <div class="roadmap__date">{{ item.date }}</div>
            <div class="roadmap__goal">{{ item.goal }}</div>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./footerForPages.vue";
import navBar from "./nav-bar.vue";
export default {
  components: {
    navBar,
    foot,
  },
  data() {
    return {
      roadmap: [
        {
          date: "14.04.2022",
          goal: "Определение целей и идеи проекта, создание рабочей группы",
        },
        {
          date: "21.04.2022",
          goal: "Разработка полного технического задания, разделение обязанностей и определение используемого стека технологий",
        },
        {
          date: "28.04.2022",
          goal: "Разработка серверной части проекта, начало разработки смарт-контракта",
        },
        {
          date: "05.05.2022",
          goal: "Разработка макета дизайна веб-страниц",
        },
        {
          date: "12.05.2022",
          goal: "Верстка веб-страниц проекта, сдача серверной части",
        },
        {
          date: "12.05.2022",
          goal: "Рабочий прототип проекта, разбор возможных правок",
        },
        {
          date: "26.05.2022",
          goal: "Сдача проекта",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style>
.aboutTeam {
  width: 100%;
  background: url("./../../res/fon2.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: top;
}
.aboutTeam__content {
  width: 85%;
  margin: 0 auto;
  padding-bottom: 330px;
}
.aboutTeam__info {
  margin-bottom: 900px;
}
.aboutTeam__title {
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 100%;
  margin-bottom: 54px;
  font-family: "Roboto", sans-serif;
  color: #4f4f4f;
  margin-top: 160px;
}
.aboutTeam__subtitle {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  color: #4f4f4f;
  font-feature-settings: "pnum" on, "lnum" on;
  margin-bottom: 51px;
}
.roadmap__information {
  margin-bottom: 44px;
  margin-left: 30px;
}
.roadmap__date {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: #4f4f4f;
  margin-bottom: 14px;
}
.roadmap__goal {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #4f4f4f;
  max-width: 670px;
}
.roadmap {
  display: flex;
}
.roadmap__image {
  width: 25px;
  display: flex;
  justify-content: center;
  position: relative;
}
.arrow {
  width: 16px;
  height: 16px;
  border-top: 15px solid #4f4f4f;
  border-right: 15px solid #4f4f4f;
  transform: rotate(135deg);
  position: absolute;
}
.line {
  height: 200px;
  width: 7px;
  background: #4f4f4f;
  position: relative;
  top: 18px;
}
</style>