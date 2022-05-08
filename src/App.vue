<template>
    <div class="main-page">
        <homePage></homePage>
    </div>
 
</template>
<script>
import homePage from './components/homePage.vue'
export default {
  name: 'App', 
  components: {
    homePage
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

html,body{
  width: 100%;
  height: 100%;
}

#app {
 width: 100%;
  height: 100%;
}
.main-page{
   width: 100%;
  height: 100%;
}
</style>
