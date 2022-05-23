<template>
  <div class="aboutTeam">
    <div class="aboutTeam__content">
      <div class="aboutTeam__information">
        <div class="aboutTeam__title">Немного о нас</div>
        <div class="aboutTeam__subtitle">
          Мы - молодая команда, которая образовалась на факультативе”Блокчейн :
          практический подход к решению задач современности” в университете
          СПбГУТ
        </div>
        <div class="aboutTeam__subtitle">
          По мере изучения материала у нас возникли как и идеи проекта, так и
          распределение задач внутри команды :
        </div>
        <div class="aboutTeam__subtitle">
          Teamlead - Родион Корепанов
          <br />
          Backend developers - Родион Корепанов и Даниил Вохромеев
          <br />
          Frontend developer - Алина Кривоногова
          <br />
          Дизайн - Вера Жаворонкова
          <br />
          Blockchain developer - Алексей Никитин
        </div>
      </div>
      <div class="aboutTeam__roadmap">
        <div class="aboutTeam__title aboutTeam__title__mb34">
          Roadmap нашего проекта
        </div>
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
  </div>
</template>
<script>
export default {
  components: {},
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
  background: url("./../../resources/fon2.png");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  background-position-y: 30%;
}
.aboutTeam__content {
  width: 85%;
  margin: 0 auto;
}
.aboutTeam__information > .aboutTeam__subtitle:last-child {
  margin-bottom: 0;
}
.aboutTeam__information {
  margin-bottom: 200px;
  padding-top: 160px;
}
.aboutTeam__title {
  font-weight: 800;
  font-size: 48px;
  line-height: 100%;
  color: #333333;
  margin-bottom: 40px;
}
.aboutTeam__subtitle {
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  max-width: 923px;
  margin-bottom: 40px;
}

.aboutTeam__roadmap {
  padding-bottom: 160px;
  width: 700px;
}
.roadmap__information {
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
  width: 12px;
  height: 12px;
  border-top: 10px solid #4f4f4f;
  border-right: 10px solid #4f4f4f;
  transform: rotate(135deg);
  position: absolute;
}
.line {
  height: 160px;
  width: 5px;
  background: #4f4f4f;
  position: relative;
  top: 18px;
}
@media (max-width: 1366px) {
  .aboutTeam {
    background: url("./../../resources/aboutTeam1366.png");
    background-position-y: -60%;
    background-position-x: 100%;
  }
  .aboutTeam__title {
    font-size: 36px;
    margin-bottom: 30px;
  }
  .aboutTeam__subtitle {
    font-weight: 400;
    font-size: 22px;
    max-width: 760px;
    margin-bottom: 32px;
  }

  .aboutTeam__roadmap {
    padding-bottom: 55px;
    width: 560px;
  }
  .roadmap__information {
    margin-left: 16px;
    max-width: 520px;
  }
  .roadmap__date {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .roadmap__goal {
    font-size: 20px;
    max-width: 550px;
  }
  .roadmap__image {
    width: 15px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .arrow {
    width: 12px;
    height: 12px;
    border-top: 10px solid #4f4f4f;
    border-right: 10px solid #4f4f4f;
    transform: rotate(135deg);
    position: absolute;
  }
  .line {
    height: 100px;
    width: 3px;
    background: #4f4f4f;
    position: relative;
    top: 18px;
  }
}
@media (max-width: 768px) {
  .aboutTeam {
    background: url("./../../resources/aboutTeamUs768.png");
  }
  .aboutTeam__title {
    font-size: 36px;
    margin-bottom: 22px;
  }
  .aboutTeam__subtitle {
    font-weight: 500;
    font-size: 18px;
    max-width: 400px;
    margin-bottom: 40px;
  }

  .aboutTeam__roadmap {
    padding-bottom: 86px;
    max-width: 560px;
    
  }
  .roadmap__information {
    margin-left: 16px;
  }
  .roadmap__date {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .roadmap__goal {
    font-size: 20px;
    max-width: 550px;
  }
  .roadmap__image {
    width: 15px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .arrow {
    width: 12px;
    height: 12px;
    border-top: 10px solid #4f4f4f;
    border-right: 10px solid #4f4f4f;
    transform: rotate(135deg);
    position: absolute;
  }
  .line {
    height: 100px;
    width: 3px;
    background: #4f4f4f;
    position: relative;
    top: 18px;
  }
}
@media (max-width: 610px) {
  .aboutTeam__roadmap {
    width: 420px;
  }
  .line {
    height: 130px;
    width: 3px;
  }
}
@media (max-width: 425px) {
  .aboutTeam {
    background: none;
  }
  .aboutTeam__title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  .aboutTeam__title__mb34 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 34px;
  }
  .aboutTeam__subtitle {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 40px;
    text-align: justify;
  }

  .aboutTeam__roadmap {
    padding-bottom: 86px;
    max-width: 350px;
  }
  .roadmap__information {
    margin-left: 0;
  }
  .roadmap__date {
    font-size: 14px;
    margin-bottom: 8px;
    color: #616161;
  }
  .roadmap__goal {
    font-size: 14px;
    max-width: 350px;
  }
  .roadmap__image {
    display: none;
  }
  .arrow {
    display: none;
  }
  .line {
    display: none;
  }
  .roadmap {
    max-width: 350px;
    border-bottom: 2px solid #333333;
    padding-bottom: 16px;
    margin-bottom: 25px;
  }
}
</style>