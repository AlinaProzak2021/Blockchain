<template>
  <div class="nav-bar">
    <div class="nav-bar__container">
      <div class="nav-bar__items">
        <div class="nav-bar__item">
          <router-link to="/"> Главная </router-link>
        </div>
        <div class="nav-bar__item">
          <router-link to="/aboutUs"> О нас</router-link>
        </div>
      </div>
      <div class="nav-bar__auth">
        <div class="nav-bar__sign-in">
          <router-link to="/userPage"> Войти</router-link>
        </div>
        <div class="nav-bar__logo">
          <img src="../../resources/Logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.nav-bar {
  width: 100%;
  height: 216px;
  background: #fafafa;
  display: flex;
  justify-content: center;
}
.nav-bar__container {
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #fafafa;
}
.nav-bar__items {
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar__auth {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar__sign-in {
  border: 4px solid #4f4f4f;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  color: #4f4f4f;
  width: 156px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #4f4f4f;
}
.nav-bar__logo {
  width: 56px;
  height: 56px;
}
.nav-bar__logo img {
  width: 100%;
  height: 100%;
}
.nav-bar__item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #4f4f4f;
  font-size: 24px;
  line-height: 120%;
}
a {
  text-decoration: none;
  color: #4f4f4f;
}
@media (max-width: 1366px) {
  .nav-bar {
    height: 118px;
  }
  .nav-bar__auth {
    width: 200px;
  }
  .nav-bar__sign-in {
    width: 108px;
    height: 37px;
    border: 2px solid #333333;
    border-radius: 3px;
    font-size: 16px;
  }
  .nav-bar__items {
    width: 350px;
  }
  .nav-bar__item {
    font-size: 18px;
    line-height: 120%;
  }
}
@media (max-width: 768px) {
  .nav-bar {
    height: 67px;
  }
  .nav-bar__auth {
    width: 150px;
  }
  .nav-bar__sign-in {
    width: 93px;
    height: 32px;
  }
  .nav-bar__logo {
    width: 31px;
    height: 31px;
  }
  .nav-bar__items {
    width: 250px;
  }
}
@media (max-width: 425px) {
  .nav-bar__auth {
    width: 100px;
  }
  .nav-bar__sign-in {
    width: 46px;
    height: 19px;
    border: none;
    font-weight: 600;
    font-size: 14px;
  }
  .nav-bar__logo {
    width: 31px;
    height: 31px;
  }
  .nav-bar__items {
    width: 150px;
  }
  .nav-bar__item {
    font-size: 14px;
  }
}
</style>