<template>
  <div id="footer">
    <transition appear name="scrolldown">
      <h1>royle.io</h1>
    </transition>
  </div>
</template>


<style scoped lang="scss">
#footer {
  display: flex;
  width: 100%;
  height: 100%;
  background: #000;
  justify-content: flex-end;
  h1 {
    font-family: 'Comfortaa', sans-serif;
    font-size: 72px;
    @media (min-width: 600px) {
      font-size: 96px;
    }
    @media (min-width: 800px) {
      font-size: 128px;
    }
    line-height: 0;
    color: #fff;
    margin: 0;
  }
}

.scrolldown-enter-active, .scrolldown-leave-active {
  transition: all 1s cubic-bezier(.28,.57,.63,1.03);
}
.scrolldown-enter, .scrolldown-leave-to {
  transform: translateY(-80px);
}
</style>
