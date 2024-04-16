<template>
    <div class="couverture">
        <div class="image_profil cadre">
        </div>
        <div class="case">
            <br />
            <br />
            <h2 v-text="name"></h2>
            <hr>
            <p class="texte" v-text="texte"></p>
            <Button class="open" @click="turn">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Couverture",
    data() {
        return {
            texte: "PORTFOLIO 2024",
            name: "RAKOTOMANANA Andriniaina Fabien"
        };
    },
    mounted() {
    },
    methods: {
        turn(){
            console.log("turn");
            this.$emit("turnPage");
        }
    },
};
</script>


<style>
    .image_profil{
        position: relative;
        background-image: url("/freepik/Fond/cadre.jpeg");
        background-size: cover;
        width: 100%;
        height: 75%;
    }
    .image_profil img{
        transform: translate(0, 48px);
    }
    .couverture{
        width: 100%; 
        height: 100%; 
        overflow: hidden;
    }
    .case{
        height: 15%;
        background-color: white;
        margin-bottom: 1%;
        text-align: center;
    }
    .texte{
        font-weight:lighter;
        color: black;
        filter: brightness(1);
        text-align: center;
    }
    .cadre{
       filter: sepia(142%);
    }
    @keyframes rotateCadre {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .open{
        transform: translate(350%, -110%);
        background-color: white;
        color: #d18d64;
        border-radius: 50%;
        min-width: 70px;
        min-height: 70px;
    }
    .open:hover{
        border: 5px solid #d18d64;
    }
</style>