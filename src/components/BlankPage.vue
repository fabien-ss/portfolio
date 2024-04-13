<template>
    <div class="presentation1">
        <br>
        QUELLES SERONT NOS PROCHAINS CONTENUS?
        <br>

        <img src="/gif/totoro.gif" class="totoro"/>
        ...
    </div>
</template>

<script>
    export default{
        name: "BlankPage",
        data(){
            return {}
        }
    }
</script>

<style>
    .saisie{
        width: 80%;
    }
    .presentation1{
        width: 100%;
        height: 100%;
        background-color: white;
    }
    .totoro{
        animation: jerry-marcos 2s infinite;
    }

    @keyframes jerry-marcos {
        0%{
            transform: rotateX(0deg);
        }
        50%{
            transform: rotateX(30deg);
        }
        100%{
            transform: rotateX(0deg);
        }
    }
</style>