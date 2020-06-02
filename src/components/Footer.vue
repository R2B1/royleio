<template>
  <div id="footer">
    <transition appear name="slide-in">
      <h1></h1>
    </transition>
  </div>
</template>


<style scoped lang="scss">
#footer {
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  h1 {
    font-family: "Comfortaa", sans-serif;
    font-size: 72px;
    line-height: 0.15;
    @media (min-width: 600px) {
      font-size: 96px;
    }
    @media (min-width: 800px) {
      font-size: 128px;
    }
    margin: 0;
    &::before {
      content: "royle.io";
      color: #fff;
    }
    &::after {
      content: "royle.io";
      color: #dadada;
      position: absolute;
      top: 0;
      right: 0;
      clip: rect(-80px 800px 0 0);
    }
  }
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 1s cubic-bezier(0.28, 0.57, 0.63, 1.03);
}
.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(500px);
}
</style>
