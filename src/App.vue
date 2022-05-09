<template>
  <div id="app">
    <div class="content-rout">
      <navBar></navBar>
      <router-view> </router-view>
      <foot></foot>
    </div>
    
  </div>
  
</template>
<script>
import navBar from "./components/nav-bar.vue";
import foot from "./components/footerForPages.vue"
export default {
  name: "app",
  components: {
    navBar,
    foot
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.content-rout {
  width: 100%;
  height: 100%;
}
</style>