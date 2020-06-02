<template>
  <div id="header">
    <transition appear name="slide-in">
      <h1 :data-text="this.$route.name"></h1>
    </transition>
  </div>
</template>

<style scoped lang="scss">
#header {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  h1 {
    margin: 0;
    font-family: "Comfortaa", sans-serif;
    font-size: 72px;
    line-height: 2.37;
    @media (min-width: 600px) {
      font-size: 96px;
      line-height: 2.35;
    }
    @media (min-width: 800px) {
      font-size: 128px;
      line-height: 1.67;
    }
    &::before {
      content: attr(data-text);
      color: #fff;
    }
    &::after {
      content: attr(data-text);
      color: #dadada;
      position: absolute;
      top: 0;
      left: 0;
      clip: rect(96px 800px 200px 0);
      @media (min-width: 600px) {
        clip: rect(128px 800px 200px 0);
      }
    }
  }
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 1s cubic-bezier(0.28, 0.57, 0.63, 1.03);
}
.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-500px);
}
</style>
