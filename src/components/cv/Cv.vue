<template>
    <a href="/cv/CV de Andriniaina Fabien RAKOTOMANANA.pdf" target="_blank">
        <button class="cv-down">
            View CV
        </button>
    </a>
    <!--

        <div class="cv" v-if="isActive">
            <iframe src="/cv/CV de Andriniaina Fabien RAKOTOMANANA.pdf" width="100%" height="1000px" style="border: none;"></iframe>
        </div>
    -->
</template>
<script>
import MotherComponent from "../MotherComponent.vue";
    export default{
        extends: MotherComponent,
    name: "Cv",
    data(){
        return {
            canLoad: true
        }
    },
    methods: {
        emitTurn(){
            console.log("(ur")
            this.$emit("turn");
        }
    }
}
</script>
<style>
.cv {

    overflow: scroll;

    embed{
    }
}

.cv-down {
  --bg: #e74c3c;
  --text-color: #fff;
  position: absolute;
  top: 45%;
  left: 40%;
  margin: 0 auto;
  width: 150px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #c0392b 0px 7px 2px, #000 0px 8px 5px;
  
}

.cv-down:hover {
  opacity: 1;
}

.cv-down:active {
  top: 45.5%;
  box-shadow: #c0392b 0px 3px 2px,#000 0px 3px 5px;
}
</style>