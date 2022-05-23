<template>
  <div class="userPage">
    <div class="userPage__content">
      <div class="userPage__aboutUser">
        <div class="userPage__personalInfo">
          <div v-if="nameIsChanged == false" class="userPage__userName">
            {{ userName }}
            <div class="userPage__changeName" @click="editName()">pед.</div>
          </div>
          <div v-else class="userPage__inputName">
            <input type="text" placeholder="Введите имя" v-model="userName" />
            <div class="userPage__changeName" @click="saveNewName(userName)">
              pед.
            </div>
          </div>
          <div class="userPage__subtitle" v-if="countGoal == ''">
            Текущие цели отсутствуют
          </div>
          <div class="userPage__subtitle" v-else>
            Имеются текущие цели : {{ countGoal }}
          </div>
          <div class="userPage__button">Добавить цель</div>
        </div>
        <div class="userPage__userPhoto">
          <div class="add-photo">Загрузить фото</div>
        </div>
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
              placeholder="##км"
              v-model="amountKilometer"
              class="inputKm"
            />
          </div>
          <div class="userPage__inputData">
            <div class="userPage__subtitle userPage__subtitle__fw600">
              Готов внести сумму :
            </div>
            <input
              type="text"
              class="inputEth"
              placeholder="##ETH"
              v-model="amountEth"
            />
          </div>
          <div
            class="
              userPage__inputData
              userPage__inputData__borderNone
              userPage__inputData__df
            "
          >
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
            Сохранить мою цель
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
            Сохранить прогресс
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
      userName: "Пользователь",
      nameIsChanged: false,
    };
  },
  methods: {
    editName() {
      this.nameIsChanged = !this.nameIsChanged;
      this.userName = "";
      console.log(this.userName);
      console.log(this.nameIsChanged);
    },
    saveNewName(newName) {
      this.userName = newName;
      this.nameIsChanged = !this.nameIsChanged;
    },
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
.userPage__userName {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  max-width: 300px;
  margin-bottom: 25px;
}
.userPage__changeName {
  font-size: 24px;
  font-weight: 300;
  margin-left: 15px;
}
.userPage__inputName {
  display: flex;
  margin-bottom: 25px;
}
.userPage__inputName > input {
  width: 150px;
  border: 2px solid #333333;
  margin-right: 10px;
  font-size: 20px;
  border-radius: 3px;
  height: 35px;
  padding-left: 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.add-photo {
  width: 100%;
  height: 90px;
  background: rgba(0, 0, 0, 0.65);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
.inputKm {
  width: 140px;
}
.inputEth {
  width: 80px;
}
input[type="checkbox"] {
  width: 44px;
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
@media (max-width: 1366px) {
  .userPage__title {
    font-size: 36px;
  }
  .userPage__subtitle {
    font-size: 24px;
  }
  .userPage__button {
    width: 286px;
    height: 78px;
    font-size: 24px;
  }
  .userPage__form {
    width: 770px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .userPage__title__m64 {
    margin-bottom: 36px;
  }
  .userPage__subtitle__fw600 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 48px;
  }
  input {
    font-size: 20px;
  }
}
@media (max-width: 1024px) {
  .userPage__title {
    font-size: 26px;
  }
  .userPage__subtitle {
    font-size: 17px;
    margin-bottom: 36px;
  }
  .userPage__button {
    width: 214px;
    height: 51px;
    font-size: 20px;
    border: 4px solid #333333;
  }
  .userPage__form {
    width: 525px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .userPage__title__m64 {
    margin-bottom: 36px;
  }
  .userPage__subtitle__fw600 {
    font-weight: 600;

    font-size: 16px;
    margin-bottom: 24px;
  }
  input {
    font-size: 16px;
  }
  .userPage__userPhoto {
    border-radius: 3px;
    width: 270px;
    height: 270px;
    background-size: contain;
  }
  .add-photo {
    width: 100%;
    height: 50px;
    font-size: 16px;
  }
  ::placeholder,
  .goalDate {
    font-size: 16px;
    text-align: left;
  }
  .goalDate > input {
    width: 20px;
    margin-left: 3px;
    margin-right: 3px;
  }
  .goalDate {
    width: 130px;
  }
  .inputKm {
    width: 90px;
  }
  .inputEth {
    width: 60px;
  }
}
@media (max-width: 768px) {
  .userPage {
    background: url("./../../resources/aboutUs768.png");
  }
  .userPage__aboutUser {
    margin-top: 136px;
    margin-bottom: 170px;
    flex-wrap: wrap-reverse;
  }
  .userPage__personalInfo {
    margin: 0 auto;
  }
  .userPage__title {
    font-size: 28px;
  }
  .userPage__subtitle {
    font-size: 24px;
    margin-bottom: 27px;
  }
  .userPage__button {
    width: 192px;
    height: 48px;
    font-size: 18px;
    border: 4px solid #333333;
  }

  .userPage__form {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 50px;
  }
  .userPage__title__m64 {
    margin-bottom: 36px;
  }
  .userPage__subtitle__fw600 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 40px;
  }
  input {
    font-size: 20px;
  }
  .userPage__userPhoto {
    border-radius: 3px;
    width: 196px;
    height: 196px;
    background-size: contain;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .add-photo {
    width: 100%;
    height: 35px;
    font-size: 16px;
  }
  ::placeholder,
  .goalDate {
    font-size: 20px;
    text-align: left;
  }
  .goalDate > input {
    width: 25px;
    margin-left: 3px;
    margin-right: 3px;
  }
  .goalDate {
    width: 150px;
  }
  .inputKm {
    width: 55px;
  }
  .inputEth {
    width: 70px;
  }
  input[type="checkbox"] {
    width: 36px;
    height: 33px;
  }
}
@media (max-width: 425px) {
  .userPage {
    background: none;
  }
  .userPage__aboutUser {
    margin-top: 35px;
    margin-bottom: 50px;
    width: 100%;
  }
  .userPage__personalInfo {
    margin: 0 auto;
  }
  .userPage__title {
    font-size: 24px;
    text-align: center;
  }
  .userPage__subtitle {
    font-size: 14px;
    margin-bottom: 14px;
    text-align: center;
  }
  .userPage__personalInfo {
    width: 100%;
  }
  .userPage__button {
    width: 100%;
    min-width: 200px;
    height: 48px;
    font-size: 18px;
    border: 2px solid #333333;
  }

  .userPage__form {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 65px;
  }
  .userPage__title__m64 {
    margin-bottom: 36px;
  }
  .userPage__subtitle__fw600 {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 9px;
    text-align: left;
  }
  .userPage__inputData {
    border-bottom: 2px solid #333333;
    display: block;
    margin-bottom: 24px;
  }
  input {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .userPage__userPhoto {
    margin: 0 auto;
    margin-bottom: 32px;
  }
  .add-photo {
    width: 100%;
    height: 35px;
    font-size: 16px;
  }
  ::placeholder,
  .goalDate {
    font-size: 14px;
    text-align: left;
  }
  .goalDate > input {
    width: 25px;
    margin-left: 3px;
    margin-right: 3px;
  }
  .goalDate {
    width: 150px;
  }
  .inputKm {
    width: 55px;
  }
  .inputEth {
    width: 70px;
  }
  input[type="checkbox"] {
    width: 30px;
    height: 27px;
  }
  .userPage__inputData__df {
    display: flex;
  }
  .userPage__userName {
    margin: 0 auto;
    justify-content: center;
    font-size: 18px;
    margin-bottom: 25px;
  }
  .userPage__changeName {
    font-size: 18px;
  }
}
</style>