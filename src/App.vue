 
<template>
  <div id="app">
    <div class="main-page">
      <userProfile></userProfile>
    </div>
  </div>
</template>
<script>
import userProfile from "./components/userProfile.vue";
export default {
  name: "App",
  components: {
    userProfile,
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
.main-page {
  width: 100%;
  height: 100%;
}
</style>
 