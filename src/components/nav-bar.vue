<template>
  <div class="nav-bar">
    <div class="nav-bar__container">
      <div class="nav-bar__items">
        <div class="nav-bar__item">Главная</div>
        <div class="nav-bar__item">О нас</div>
      </div>
      <div class="nav-bar__auth">
        <div class="nav-bar__sign-in">Войти</div>
        <div class="nav-bar__logo">
          <img src="../../res/Logo.png" alt="" />
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
.nav-bar__item {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #4f4f4f;
  font-size: 24px;
  line-height: 120%;
}
</style>