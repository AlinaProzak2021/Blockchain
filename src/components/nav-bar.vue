<template>
  <div class="nav-bar">
      <div class="nav-bar__items">
          <div class="nav-bar__item">
            Главная 
          </div>
        <div class="nav-bar__item">
          О нас
        </div>
      </div>
    <div class="nav-bar__auth">
      <div class="nav-bar__sign-in">
        Войти 
      </div>
      <div class="nav-bar__logo">
        <img src="../../res/Logo.png" alt="">
      </div>
    </div>
  </div>

</template>
<script>
export default{
}
</script>
<style>
.nav-bar{
  width: 100%;
  height: 216px;
  background: #FAFAFA;
  display: flex;
  justify-content: space-around;
}
.nav-bar__items{
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar__auth{
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar__logo{
  width: 56px;
  height: 56px;
}


</style>