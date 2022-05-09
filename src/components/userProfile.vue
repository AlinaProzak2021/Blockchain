<template>
  <div class="userPage">
    <div class="userPage__content">
      <div class="userPage__aboutUser">
        <div class="userPage__personalInfo">
          <div class="userPage__title">Венера Жаворонкова</div>
          <div class="userPage__subtitle" v-if="countGoal == ''">
            Текущие цели отсутствуют
          </div>
          <div class="userPage__subtitle" v-else>
            Имеются текущие цели : {{ countGoal }}
          </div>
          <div class="userPage__button">Добавить цель</div>
        </div>
        <div class="userPage__userPhoto"></div>
      </div>
      <div class="userPage__userGoal" v-if="iscompletedForm == false">
        <div class="userPage__title userPage__title__m64">Моя цель</div>
        <div class="userPage__title userPage__title__m64">
          Составьте свой план :
        </div>
        <form class="userPage__form">
          <div class="userPage__inputData">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Сроки выполнения моего плана :
            </div>
            <div class="goalDate">
              <p>c</p>
              <input
                class="date"
                type="text"
                placeholder="##"
                v-model="startMonth"
              />
              <p>по</p>
              <input
                class="date"
                type="text"
                placeholder="##"
                v-model="finalMonth"
              />
              <p>месяц</p>
            </div>
          </div>
          <div class="userPage__inputData">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Ежедневно я буду пробегать :
            </div>
            <input
              type="text"
              placeholder="впишите км"
              v-model="amountKilometer"
              class="inputKm"
            />
          </div>
          <div class="userPage__inputData">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Готов внести сумму :
            </div>
            <input type="text" placeholder="## ETH" v-model="amountEth" />
          </div>
          <div class="userPage__inputData userPage__inputData__borderNone">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Даю согласию на обработку персональных данных :
            </div>
            <input type="checkbox" />
          </div>
          <div
            class="userPage__button userPage__button__center"
            @click="
              enteGoal(startMonth, finalMonth, amountEth, amountKilometer)
            "
          >
            Внести мою цель
          </div>
        </form>
      </div>
      <div class="userPage__userGoal" v-else>
        <div class="userPage__title">Моя цель</div>
        <div class="userPage__subtitle">
          Ежедневная пробежка по {{ amountKilometer }} км
        </div>
        <div class="userPage__title userPage__title__m64">
          Отметиться об успехе :
        </div>
        <form class="userPage__form">
          <div class="userPage__inputData">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Сегодняшняя дата :
            </div>
            <input
              type="text"
              placeholder="введите дату"
              v-model="currentDate"
            />
          </div>
          <div class="userPage__inputData userPage__inputData__borderNone">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Пробежка :
            </div>
            <input
              type="text"
              placeholder="впишите км"
              v-model="currentMountKm"
            />
          </div>
          <div class="userPage__button userPage__button__center">
            Синхронизировать
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      startMonth: "",
      finalMonth: "",
      iscompletedForm: false,
      amountEth: "",
      amountKilometer: "",
      currentDate: "",
      currentMountKm: "",
      countGoal: "",
    };
  },
  methods: {
    enteGoal(startMonth, finalMonth, amountEth, amountKilometer) {
      if (
        startMonth !== "" &&
        finalMonth !== "" &&
        amountEth !== "" &&
        amountKilometer !== ""
      ) {
        this.iscompletedForm = true;
        this.countGoal++;
        console.log("Все поля заполнены");
      } else {
        console.log("Одно из полей не заполнено!!");
      }
    },
  },
};
</script>
<style>
.userPage {
  width: 100%;
  background: url("./../../resources/fon3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 55%;
}
.userPage__content {
  width: 85%;
  margin: 0 auto;
}
.userPage__aboutUser {
  margin-top: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 244px;
}
.userPage__title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 100%;
  color: #333333;
  margin-bottom: 24px;
}
.userPage__subtitle {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 120%;
  color: #333333;
  margin-bottom: 129px;
}
.userPage__button {
  width: 424px;
  height: 96px;
  background: #fafafa;
  border: 8px solid #333333;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: #333333;
}
.userPage__userPhoto {
  border-radius: 3px;
  width: 512px;
  height: 512px;
  background: url("./../../resources/Rectangle.png");
}
.userPage__form {
  width: 1052px;
  margin: 0 auto;
  margin-bottom: 86px;
}
.userPage__subtitle__fw600 {
  font-weight: 600;
  margin-bottom: 48px;
}
.userPage__inputData {
  width: 100%;
  border-bottom: 4px solid #333333;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.goalDate {
  height: 100%;
  display: flex;
  width: 215px;
}
.goalDate > input {
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
}
input {
  border: none;
  outline: none;
  font-size: 24px;
  width: 200px;
}

input[type="checkbox"] {
  width: 30px;
  height: 40px;
  border: 4px solid #333333;
  border-radius: 3px;
}
::placeholder,
.goalDate {
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #333333;
  text-align: right;
  padding-right: 2px;
}
.userPage__inputData__borderNone {
  border: none;
  margin-bottom: 76px;
}
.userPage__title__m64 {
  margin-bottom: 64px;
}
.userPage__button__center {
  margin: 0 auto;
}
</style>