<template>
  <div id="projects-page">
    <div class="flex-container">
      <transition appear name="fly-in-1">
        <a href="https://scientifig.com">
          <ProjectDeckScientifig class="logo" />
        </a>
      </transition>
      <div class="highlights">
        <p class="tagline">Create publication-ready figures from your data</p>
        <p
          class="stack"
        >React &middot; Redux &middot; Node &middot; Express &middot; MongoDB &middot; MaterialUI</p>
      </div>
    </div>

    <div class="description">
      <FoldSection>
        <p><a href="https://scientifig.com">Scientifig</a> is a full-stack (<a href="https://blog.logrocket.com/mern-stack-a-to-z-part-1/">MERN</a>) web app that lets students and researchers easily create publication-ready figures from their data using the open-source <a href="https://github.com/plotly/plotly.js/">plotly.js</a> library. Users can upload their data, edit plots through a simple menu-based GUI, and download high-quality vector images. By creating an account, figures and data can be saved and accessed through a user dashboard for future editing. And since it's a responsive web app it can be used on any OS and device, even a phone!</p>
        <p>The motivation for Scientifig comes from my experience as a research assistant. Effective visual communication of data in scientific publications, reports, presentations, etc. is critical, but scientists are busy people who often consider figure design as an afterthought. Spreadsheet programs like Excel are widely used by researchers to analyze data but have notoriously ugly plots that require tons of manual tweaking to get presentable (you'd be surprised how often stock Excel plots show up in publications). For those who care more about presentation, current popular options in plotting software tend to be expensive, platform-specific, and/or difficult and time consuming to learn and use (e.g. MATLAB, matplotlib, Origin, IDL, etc.). I saw the need for an affordable, easy-to-use, web-based plotting app for the scientific community and Scientifig is my attempt to fill that niche.</p>
        <p>Although Scientifig currently only supports basic 2D line plots and has limited functionality, many new features and plotting modes are planned for future revisions. My goal is to expand the app enough to cover the majority of use cases while keeping usage as simple and efficient as possible. And if I do end up charging a small fee to at least cover hosting and storage costs, it will remain significantly more affordable than other commercial options. This has been one of the most satisfying projects I have worked on and I am very excited about its future!</p>
      </FoldSection>
    </div>

    <div class="flex-container">
      <transition appear name="fly-in-2">
        <a href="https://physref.com">
          <ProjectDeckPhysref class="logo" />
        </a>
      </transition>
      <div class="highlights">
        <p class="tagline">An open-source physics formulary</p>
        <p
          class="stack"
        >React &middot; Gatsby &middot; GraphQL &middot; Emotion &middot; Markdown &middot; KaTeX</p>
      </div>
    </div>

    <div class="description">
      <FoldSection>
        <p><a href="https://physref.com">Physref</a> is an experimental open-source physics formulary that aims to be a concise, useable, and useful reference for physics students and professionals. It is based on a series of formula sheets I compiled during my student years. They were very useful to me and I wanted to build something similar that would be useful to others.</p>
        <p>My goal is to make an efficient reference for those who have already learned the material and need a quick reminder on a given topic. Wikipedia is without a doubt the most useful and used physics reference online, but since it contains pretty much everything about everything, it tends to be extremely verbose and requires lots of sifting through extraneous material. I often found this frustrating when I just needed to remember some small detail or the exact form of some equation, which is what led me to create my formula sheets. Other resources tend to focus on learning for newer students and/or have sorely outdated designs.</p>
        <p>Currently there isn't much content in the formulary as I'm still experimenting with the format trying to strike the right balance between brevity and useability. The current format is a formulary-style layout with supporting information hidden in expandable sections (check out this <a href="https://physref.com/Classical-Mechanics/Central-forces/">example formulary page</a> for a better idea).</p>
        <p>Physref uses the modern <a href="https://jamstack.org/">Jamstack</a> approach to building a website that doesn't depend on a web server. It is a React app that leverages the Gatsby framework to create static pages that are blazingly fast and optimized for search engines. All content is written in markdown, a lightweight markup language, so that even non-developers can easily add content to the site. The markdown is enhanced with custom React components to add new functionality like referenced equations that are properly formatted. The markdown files are passed to a data layer in Gatsby powered by GraphQL and automatically turned into HTML pages through the magic of Gatsby. LaTeX equations are rendered by the super-fast typesetting library KaTeX.</p>
      </FoldSection>
    </div>

    <div class="flex-container">
      <transition appear name="fly-in-3">
        <a href="https://royle.io">
          <ProjectDeckRoyleio class="logo" />
        </a>
      </transition>
      <div class="highlights">
        <p class="tagline">This totally rad portfolio site</p>
        <p class="stack">Vue &middot; Greensock (GSAP) &middot; SVG &middot; SCSS</p>
      </div>
    </div>

    <div class="description">
      <FoldSection>
        <p><a href="https://royle.io">Royle.io</a> is my personal website and portfolio, and an ode to the very first website I created in my early teens. Back then I was an avid skater and so naturally I made a skateboarding themed website (Zeroh's Lair...) that featured trick tips, a link directory (back when such things existed), sick skateboarding images, and vivid, retina-burning background patterns lovingly hand-crafted in MS Paint. I wanted to make something that captured that sense of youthful playfulness, something different and fun even if a bit cheesy.</p>
        <p>I also wanted to use this as a chance to finally learn and use the Vue UI framework and to play with SVGs and animations (all of which I love). The centerpiece of the site is a big, colorful, spinnable SVG skateboard wheel navigation menu, and definitely the biggest challenge I faced was getting it working reliably on all devices (try it on mobile!). It may not be the most technically impressive project I've worked on but I had a lot of fun making it and I think 13-year-old me would approve!</p>
      </FoldSection>
    </div>
  </div>
</template>

<script>
import FoldSection from "@/components/FoldSection.vue";
import ProjectDeckScientifig from "@/components/SVG/ProjectDeckScientifig";
import ProjectDeckPhysref from "@/components/SVG/ProjectDeckPhysref";
import ProjectDeckRoyleio from "@/components/SVG/ProjectDeckRoyleio";
export default {
  name: "Projects",
  components: {
    FoldSection,
    ProjectDeckScientifig,
    ProjectDeckPhysref,
    ProjectDeckRoyleio
  }
  // mounted() {
  //   // window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // }
};
</script>

<style scoped lang="scss">
#projects-page {
  padding: 96px 12px 72px 12px;
  /* a:hover {
    border: 0;
  } */
  .flex-container {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    @media (min-width: 800px) {
      flex-flow: row nowrap;
    }
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 280px;
    }
    .highlights {
      flex: 1;
      font-family: "Comfortaa", sans-serif;
      font-size: 12px;
      line-height: 1.8;
      text-align: center;
      .tagline {
        color: #ff2f72;
        margin: 12px 0 0 0;
      }
      .stack {
        margin: 0 0 8px 0;
      }
    }
  }
  .description {
    padding-bottom: 48px;
  }
}
.fly-in-1-enter-active {
  transition: all 1.2s cubic-bezier(0.26, 1.46, 0.23, 0.97) 0.1s;
}
.fly-in-2-enter-active {
  transition: all 1.2s cubic-bezier(0.26, 1.46, 0.23, 0.97) 0.2s;
}
.fly-in-3-enter-active {
  transition: all 1.2s cubic-bezier(0.26, 1.46, 0.23, 0.97) 0.3s;
}
.fly-in-1-enter,
.fly-in-2-enter,
.fly-in-3-enter {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
