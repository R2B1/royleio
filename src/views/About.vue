<template>
  <div id="about-page">
    <img id="portrait" src="@/assets/portrait.jpg" />
    <h2 id="greeting">Hi, I'm Ryan!</h2>
    <p>I'm an aspiring web developer with a background in physics currently based in Denver, CO.</p> 
    <p>As a teen in the heyday of AOL, Netscape, and dial-up modems, I taught myself HTML and CSS for fun and made numerous websites for myself, friends, and family. Back then I thought I was destined to become a web designer, but I went a different direction in college when I became enamored with physics. Though after earning a Ph.D. and working as a postdoc I realized it wasn’t the right career for me. Although I cherish my experience as a scientist, ultimately I want to earn a living creating awesome things that more than a handful of people will use and appreciate, which has brought me full circle back to the web.</p>
    <p>I love the entire development process—from visual design and implementation to back-end architecture—but I feel most at home on the front-end. I'm one of those weirdos who takes pleasure in laying out responsive CSS grids and endlessly tweaking attributes to get things pixel-perfect. If you'd like to see some of my recent projects, check out my <router-link to="/projects">portfolio</router-link>.</p>
    <p>In my free time I mainly enjoy spending time with family and friends and working on various side projects, both digital and analogue. Having lived most of my life in the foothills of big mountain ranges (Sierra Nevadas, Rockies, and even Appalachians), I enjoy hiking, biking, snowboarding, etc. And whenever possible I love traveling to far away places!</p>
    <p>If you'd like to chat for any reason, feel free to <router-link to="/contact">say hi</router-link>!</p>
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
