<template>
  <div class="cursor" id="cursor"></div>
</template>

<script>

export default {
  name: "RoundCursor",
  data() {
    return {
      scale: 1,
      width: 100,
      canMove: false
    }
  },
  mounted() {
//    window.addEventListener("mousemove", this.handleMouseMove);
    this.cursor = document.getElementById("cursor");
  },
  beforeUnmount() {
//    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      if (!this.canMove) this.canMove = true;
      this.cursor.style.display = "block";

      if (event.target.classList.contains("bt")) {
        const currentWidth = event.target.width;
        const currentHeight = event.target.height;
        this.cursor.style.transition = 0.5 + "s";
        this.cursor.style.border = "5px solid white";
        this.cursor.style.width = currentWidth + "px";
        this.cursor.style.height = currentHeight + "px";
        this.cursor.style.top = (event.clientY - currentHeight / 2) + "px";
        this.cursor.style.left = (event.clientX - currentWidth / 2) + "px";
      }
      else {
        this.cursor.style.transition = "0s";
        this.cursor.style.border = "1px solid white";
        this.cursor.style.width = this.width + "px";
        this.cursor.style.height = this.width + "px";
        this.cursor.style.top = (event.clientY - this.width / 2) + "px";
        this.cursor.style.left = (event.clientX - this.width / 2) + "px";
      }
    },
    test() {
    }
  }
};
</script>

<style>
.cursor {
  width: 100px;
  height: 100px;
  border-radius: 500px;
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  display: none;
  backdrop-filter: brightness(1.2);
  
  border: none;
}
</style>
