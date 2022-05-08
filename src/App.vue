<template>
  <navBar></navBar>
</template>

<script>
import navBar from "@/components/nav-bar";

export default {
  name: 'App',
  components: {
    navBar
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
</style>
