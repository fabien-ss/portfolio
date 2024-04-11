<template>
    <div class="couverture">
        <div class="case">
            <br>
            <h1>Fabien 2024 (Prototype)</h1>
        </div>
        <p class="texte">
            IT Student from Madagascar 
        </p>
    </div>
</template>

<script>
    export default{
        name: "Couverture",
        data(){
            return {}
        }
    }
</script>

<style>
    .couverture{
        width: 100%; 
        height: 100%; 
        background-image: url('/1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        overflow-y: hidden;
    }
    .case{
        height: 15%;
        background-color: white;
        margin-bottom: 1%;
    }
    .texte{
        font-weight:lighter;
        color: white;
    }
</style>