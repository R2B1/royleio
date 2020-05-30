<template>
  <div id="layout-container">
    <div id="page-layout-grid">
      <div class="grid-header">
        <Header />
      </div>
      <div class="grid-left" />
      <transition name="fade">
        <router-view class="grid-center" />
      </transition>
      <div class="grid-right" />
      <div class="grid-footer">
        <Footer />
      </div>
    </div>
    <MenuModal />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import MenuModal from "./MenuModal.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
    MenuModal
  },
};
</script>

<style scoped lang="scss">
#page-layout-grid {
  height: 100%;
  display: grid;
  justify-items: start;
  align-items: end;
  grid-template-rows: 96px auto 96px;
  grid-template-columns: 0px auto 0px;
  @media (min-width: 600px) {
    grid-template-rows: 128px auto 128px;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 800px 1fr;
  }
  grid-template-areas:
    "header header header"
    "left center right"
    "footer footer footer";
}
#layout-container {
  height: 100%;
}
.grid-header {
  grid-area: header;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}
.grid-footer {
  grid-area: footer;
  background: #000;
  width: 100%;
  height: 100%;
}
.grid-center {
  grid-area: center;
  max-width: 800px;
  background: #fff;
  position: relative;
  padding: 0 12px 0 12px;
  z-index: 6;
}
.grid-left {
  grid-area: left;
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  z-index: 5;
}
.grid-right {
  grid-area: right;
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  z-index: 5;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>