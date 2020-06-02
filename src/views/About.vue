<template>
  <div id="about-page">
    <img id="portrait" src="@/assets/portrait.jpg" />
    <h2 id="greeting">Hi, I'm Ryan!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<style scoped lang="scss">
#about-page {
  height: 100%;
  padding: 64px 12px 72px 12px;
  #portrait {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 8px solid #dadada;
    border-radius: 50%;
    width: 240px;
    @media (min-width: 600px) {
      float: left;
      shape-outside: circle(50%);
      border: 12px solid #dadada;
      width: 320px;
      margin-right: 48px;
    }
    @media (min-width: 900px) {
      position: relative;
      left: -48px;
      margin-right: -16px;
    }
  }
  #greeting {
    margin: 24px 0 24px 0;
    text-align: center;
    @media (min-width: 600px) {
      margin: 64px 0 24px 0;
      text-align: left;
    }
    @media (min-width: 900px) {
      margin: 96px 0 24px 0;
    }
  }
}
</style>
