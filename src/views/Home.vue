<template>
  <div id="home-page">
    <div class="image-container">
      <SkullSVG id="skull-svg" />
    </div>
  </div>
</template>

<script>
import SkullSVG from "@/components/SVG/SkullSVG.vue";
export default {
  name: "Home",
  components: { SkullSVG }
};
</script>

<style scoped lang="scss">
#home-page {
  height: 100%;
  width: 100%;
  .image-container {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    #skull-svg {
      margin-left: auto;
      margin-right: auto;
      width: 240px;
      @media (min-width: 600px) {
        width: 480px;
      }
    }
  }
}
</style>
