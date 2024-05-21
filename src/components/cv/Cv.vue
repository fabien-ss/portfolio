<template>
    <div class="cv" v-if="isActive">
        <iframe src="/cv/CV de Andriniaina Fabien RAKOTOMANANA.pdf" width="100%" height="1000px" style="border: none;"></iframe>
    </div>
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
</style>