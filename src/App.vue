<template>
    <div class="main-page">
        <aboutUsPage></aboutUsPage>
    </div>
 
</template>
<script>
import aboutUsPage from './components/aboutUsPage.vue'
export default {
  name: 'App', 
  components: {
    aboutUsPage
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
