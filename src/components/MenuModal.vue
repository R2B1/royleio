<template>
  <div id="menu-modal-container">
    <div id="menu-container">
      <MenuWheel
        id="menu-wheel"
        v-if="!menuHasClosed"
        :menuIsOpen="menuIsOpen"
        :isTouchDevice="isTouchDevice"
        :closeMenu="closeMenu"
        :translateVector="menuTranslateVector"
        @touchDetected="setTouch(true)"
      />
    </div>
    <div id="menu-icon-container">
      <div class="flex-left" />
      <div class="flex-center" />
      <div class="flex-right">
        <MenuWheelIconSVG
          id="menu-wheel-icon-SVG"
          ref="menuIcon"
          tabindex="0"
          v-if="menuHasClosed"
          :openMenu="openMenu"
        />
      </div>
    </div>
    <transition name="fade" @after-leave="showMenuIcon">
      <div class="modal-shadow" v-if="menuIsOpen" @mousedown="closeMenu" @touchstart="closeMenu" />
    </transition>
  </div>
</template>

<script>
import MenuWheel from "./MenuWheel.vue";
import MenuWheelIconSVG from "./SVG/MenuWheelIconSVG.vue";

export default {
  name: "MenuModal",
  components: {
    MenuWheel,
    MenuWheelIconSVG
  },
  data() {
    return {
      menuIsOpen: false,
      menuHasClosed: true,
      menuTranslateVector: [0, 0],
      isTouchDevice: false,
      scrollPosition: 0
    };
  },
  mounted() {
    this.$nextTick(function() {
      if (this.$route.path === "/" && this.$route.name !== null) {
        this.openMenu();
      }
    });
  },
  methods: {
    setTouch(val) {
      if (typeof val === "boolean") {
        this.isTouchDevice = val;
      }
    },

    calculateTranslateVector() {
      // Find translation vector for menu transition
      const menuIconRect = this.$refs.menuIcon.$el.getBoundingClientRect();
      const menuIconOriginX = menuIconRect.left + menuIconRect.width / 2;
      const menuIconOriginY = menuIconRect.top + menuIconRect.height / 2;
      const menuOriginX = window.innerWidth / 2;
      const menuOriginY = window.innerHeight / 2;
      this.menuTranslateVector[0] = menuIconOriginX - menuOriginX;
      this.menuTranslateVector[1] = menuIconOriginY - menuOriginY;
    },

    openMenu(e) {
      if (e) {
        if (e && e.type === "touchstart" && !this.isTouchDevice) {
          this.setTouch(true);
        }
      }
      this.calculateTranslateVector();
      this.menuIsOpen = true;
      this.menuHasClosed = false;
      this.scrollPosition = window.pageYOffset;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${this.scrollPosition}px`;
    },

    closeMenu(e) {
      if (e.type === "touchstart" && !this.isTouchDevice) {
        this.setTouch(true);
      }
      if (e.type === "mousedown" && this.isTouchDevice) {
        return;
      }
      this.menuIsOpen = false;
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("width");
      document.body.style.removeProperty("top");
      window.scrollTo(0, this.scrollPosition);
    },

    showMenuIcon() {
      this.menuHasClosed = true;
    }
  }
};
</script>

<style scoped lang="scss">
#menu-modal-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 7;
  #menu-container {
    height: 100%;
    display: flex;
    align-items: center;
    #menu-wheel {
      margin-left: auto;
      margin-right: auto;
      width: 640px;
      max-width: 640px;
      z-index: 11;
    }
    #menu-wheel-icon-centered {
      margin-left: auto;
      margin-right: auto;
      width: 256px;
      z-index: 11;
      pointer-events: visiblePainted;
    }
  }
  #menu-icon-container {
    position: fixed;
    bottom: 12px;
    @media (min-width: 600px) {
      top: 48px;
    }
    display: flex;
    width: 100%;
    .flex-left {
      flex: 1;
    }
    .flex-center {
      width: 800px;
    }
    .flex-right {
      flex: 1;
      padding: 0 12px 0 12px;
      #menu-wheel-icon-SVG {
        pointer-events: visiblePainted;
        width: 96px;
        @media (min-width: 600px) {
          width: 128px;
        }
        z-index: 9;
      }
    }
  }
}
.modal-shadow {
  position: fixed;
  pointer-events: auto;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #000;
  opacity: 0.6;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.19, 0.8, 0.28, 1.08);
}
</style>
