<template>
  <div class="fold-section">
    <div
      class="fold-section-container"
      :style="{ maxHeight: currentMaxHeight + 'px' }"
      ref="container"
    >
      <slot />
    </div>

    <div :class="{ 'collapsed': collapsed }" class="fold-section-mask"></div>

    <slot name="view-more" :toggle="toggle" :collapsed="collapsed">
      <div
        class="fold-section-view-more"
        :class="{ 'collapsed': collapsed }"
        @click="toggle"
        v-if="reachThreshold"
      >
        <div class="icon-container">
          <FoldSectionIconSVG class="fold-section-icon" :class="{ 'collapsed': collapsed }" />
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import FoldSectionIconSVG from "./SVG/FoldSectionIconSVG.vue";

const DEFAULT_HEIGHT = 100;

export default {
  name: "FoldSection",

  components: { FoldSectionIconSVG },

  props: {
    height: {
      type: [Number, String],
      default: DEFAULT_HEIGHT
    }
  },

  data() {
    const height = this.height;
    return {
      collapsed: true,
      currentMaxHeight: height,
      threshold: height,
      reachThreshold: true
    };
  },

  mounted() {
    const contentHeight = this.$refs.container.scrollHeight;
    this.reachThreshold = contentHeight > this.threshold;
  },

  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      if (this.collapsed) {
        this.currentMaxHeight = this.threshold;
      } else {
        this.currentMaxHeight = this.$refs.container.scrollHeight;
      }
    }
  }
};
</script>

<style lang="scss">
.fold-section {
  position: relative;
  .fold-section-container {
    overflow: hidden;
    transition: max-height 0.3s;
  }
  .fold-section-mask {
    position: absolute;
    bottom: 30px; /* view-more's height */
    height: 80px;
    width: 100%;
    pointer-events: none;
    &.collapsed {
      opacity: 1;
      background: linear-gradient(rgba(255, 255, 255, 0), white);
    }
    &:not(.collapsed) {
      opacity: 0;
    }
  }
  .fold-section-view-more {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      .icon-container {
        background: linear-gradient(#ff2f72, #ff8440);
        .fold-section-icon {
          fill: #fff;
        }
      }
    }
    .icon-container {
      background: none;
      border-radius: 50%;
      height: 36px;
      width: 36px;
      display: flex;
      align-items: center;
      .fold-section-icon {
        fill: #ff2f72;
        height: 36px;
        width: 36px;
        transform: rotate(180deg);
      }
    }
    &.collapsed {
      .fold-section-icon {
        transform: rotate(0deg);
      }
    }
  }
}
</style>