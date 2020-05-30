<template>
  <div id="header">
    <transition appear name="scrollup">
      <h1>{{ $route.name }}</h1>
    </transition>
  </div>
</template>


<style scoped lang="scss">
#header {
  display: flex;
  width: 100%;
  height: 100%;
  background: #000;
  h1 {
    font-family: 'Comfortaa', sans-serif;
    font-size: 72px;
    @media (min-width: 600px) {
      font-size: 96px;
    }
    @media (min-width: 800px) {
      font-size: 128px;
    }
    line-height: 0.15;
    color: #fff;
    margin: 0;
    align-self: flex-end;
  }
}

.scrollup-enter-active, .scrollup-leave-active {
  transition: all 1s cubic-bezier(.28,.57,.63,1.03);
}
.scrollup-enter, .scrollup-leave-to {
  transform: translateY(80px);
}
</style>
