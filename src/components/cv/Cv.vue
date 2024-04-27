<template>
    <div class="cv" >
        <iframe src="/public/cv/CV de Andriniaina Fabien RAKOTOMANANA.pdf" width="100%" height="1000px" style="border: none;"></iframe>
    </div>
</template>
<script>
    export default{
    name: "Cv",
    data(){
        return {}
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