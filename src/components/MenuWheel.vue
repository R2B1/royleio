<template>
  <div :style="cssVars">
    <transition name="menu">
      <MenuWheelSVG
        ref="svg"
        id="menu-wheel-SVG"
        :angle="wheel.angle"
        :cursor="cursor"
        :drag="drag"
        :drop="drop"
        :consoleLog="consoleLog"
        :closeMenu="closeMenu"
        v-if="isMounted && menuIsOpen"
      />
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import MenuWheelSVG from "./SVG/MenuWheelSVG.vue";

export default {
  name: "MenuWheel",
  components: {
    MenuWheelSVG
  },
  props: {
    translateVector: Array,
    menuIsOpen: Boolean,
    isTouchDevice: Boolean,
    closeMenu: Function
  },
  data() {
    return {
      wheel: {
        angle: 0, // (deg)
        radius: 0
      },
      horizMargin: 0,
      vertMargin: 0,
      dragPoint: { x: 0, y: 0 },
      // store the last 5 drag angles and times to calculate angular velocity more accurately
      dragAngles: [0, 0, 0, 0, 0],
      dragTimes: [0, 0, 0, 0, 0],
      grabbing: false,
      tween: null,
      isMounted: false,
    };
  },

  mounted() {
    window.addEventListener("touchmove", function() {
      return true;
    });

    this.tween = gsap.to(this.wheel, {
      angle: -1080,
      duration: 8,
      ease: "power2.out(1)"
    });
    this.isMounted = true;
  },

  computed: {
    cursor() {
      return `cursor: ${this.grabbing ? "grabbing" : "grab"}`;
    },
    cssVars() {
      console.log(this.translateVector);
      return {
        "--menu-transition":
          "translate(" +
          this.translateVector[0] +
          "px, " +
          this.translateVector[1] +
          "px) scale(0.2)"
      };
    }
  },

  methods: {
    consoleLog(msg) {
      console.log(msg);
    },

    resetPositions() {
      const maxRadius = 320; // (px)
      if (window.innerWidth >= 2 * maxRadius) {
        this.wheel.radius = maxRadius;
      } else {
        this.wheel.radius = window.innerWidth / 2;
      }
      // used to convert from client to offset coords
      this.horizMargin = window.innerWidth / 2 - this.wheel.radius;
      this.vertMargin = window.innerHeight / 2 - this.wheel.radius;
    },

    drag(e) {
      if (e.type === "touchstart" && !this.isTouchDevice) {
        this.$emit("touchDetected");
      }
      if (e.type === "mousedown" && this.isTouchDevice) {
        return;
      }
      this.grabbing = true;
      this.tween.kill();
      this.resetPositions();
      const wheelEl = this.$refs.svg.$refs.wheel;
      if (e.type === "mousedown") {
        this.dragPoint.x = e.offsetX;
        this.dragPoint.y = e.offsetY;
        wheelEl.addEventListener("mousemove", this.rotate);
      } else if (e.type === "touchstart") {
        this.dragPoint.x = e.touches[0].clientX - this.horizMargin;
        this.dragPoint.y = e.touches[0].clientY - this.vertMargin;
        wheelEl.addEventListener("touchmove", this.rotate, { passive: false });
      } else {
        console.log("Error: unknown event type");
      }
    },

    drop(e) {
      if (e.type === "mouseup" && this.isTouchDevice) {
        return;
      }
      console.log("drop: ", e.type);
      if (this.grabbing === true) {
        this.grabbing = false;
        const releaseDelay =
          e.timeStamp - this.dragTimes[this.dragTimes.length - 1];
        console.log(releaseDelay);
        if (releaseDelay < 50) {
          let spinAngle = 360;
          let period = this.getPeriod();
          if (period < 0) {
            spinAngle = -360;
            period = -period;
          }
          const toAngle = this.wheel.angle + spinAngle;
          this.tween = gsap.to(this.wheel, {
            angle: toAngle,
            duration: period,
            ease: "none",
            repeat: -1,
            paused: false
          });
        }
        const defaultArr = [0, 0, 0, 0, 0];
        this.dragAngles = [...defaultArr];
        this.dragTimes = [...defaultArr];
        if (e.type === "mouseup" || e.type === "mouseleave") {
          const wheelEl = this.$refs.svg.$refs.wheel;
          wheelEl.removeEventListener("mousemove", this.rotate);
        } else if (e.type === "touchend") {
          // const wheelEl = this.$refs.svg.$refs.wheel;
          // wheelEl.removeEventListener('touchmove', this.touchrotate, { passive: false });
        } else {
          console.log("Error: unknown event type");
        }
      }
    },

    rotate(e) {
      const prevDragPoint = { ...this.dragPoint };
      const currDragPoint = { x: 0, y: 0 };

      if (e.type === "mousemove") {
        currDragPoint.x = e.offsetX;
        currDragPoint.y = e.offsetY;
      } else if (e.type === "touchmove") {
        currDragPoint.x = e.touches[0].clientX - this.horizMargin;
        currDragPoint.y = e.touches[0].clientY - this.vertMargin;
      } else {
        console.log("Error: unknown event type");
      }

      // position vectors for previous and current drag points (px)
      // (vector from origin at wheel center to grab position)
      const p1 = {
        x: prevDragPoint.x - this.wheel.radius,
        y: this.wheel.radius - prevDragPoint.y
      };
      const p2 = {
        x: currDragPoint.x - this.wheel.radius,
        y: this.wheel.radius - currDragPoint.y
      };

      // radii of previous and current drag points (px)
      const r1 = Math.sqrt(p1.x * p1.x + p1.y * p1.y);
      const r2 = Math.sqrt(p2.x * p2.x + p2.y * p2.y);

      // vector between previous and current drag points (px)
      const d = {
        x: p2.x - p1.x,
        y: p2.y - p1.y
      };
      const dmag = Math.sqrt(d.x * d.x + d.y * d.y);

      // angle of rotation (law of cosines) (deg)
      let theta =
        (Math.acos((r1 * r1 + r2 * r2 - dmag * dmag) / (2 * r1 * r2)) * 180) /
        Math.PI;

      // angles of p1 and p2 from x-axis
      const phi1 = Math.atan(p1.y / p1.x);
      const phi2 = Math.atan(p2.y / p2.x);

      // determine rotation direction
      if (phi2 > phi1) theta = -theta;

      // store drag angles/times
      this.dragAngles.shift();
      this.dragAngles.push(theta);
      this.dragTimes.shift();
      this.dragTimes.push(e.timeStamp);

      // update wheel angle and current drag point
      this.wheel.angle += theta;
      this.dragPoint = { ...currDragPoint };
    },

    getPeriod() {
      const n = this.dragTimes.length;
      const angle = this.dragAngles.reduce((a, b) => a + b, 0); // (deg)
      const duration = this.dragTimes[n - 1] - this.dragTimes[0]; // (ms)
      // omega is average angular velocity over last n drag points
      const omega = (angle * Math.PI) / 180 / (duration / 1000); // (rad/s)
      const tau = (2 * Math.PI) / omega; // period (s)
      return tau;
    }
  }
};
</script>

<style scoped lang="scss">
#svg {
  overscroll-behavior: none;
}
.menu-enter,
.menu-leave-to {
  transform: var(--menu-transition);
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s cubic-bezier(0.19, 0.8, 0.28, 1.08);
}
</style>
