<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
export default {
  name: "App",
  components: {
    Layout,
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Roboto:wght@300&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  @media (min-width: 600px) {
    font-size: 18px;
  }
  background: #fff;
  color: #000;
  line-height: 1.6;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
