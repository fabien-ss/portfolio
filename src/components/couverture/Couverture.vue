<template>
    <div class="couverture">
        <div class="image_profil cadre">
            <div class="image_profil2"></div>
        </div>
        <div class="case">
            <br />
            <br />
            <h2 v-text="name"></h2>
            <hr>
            <p class="texte" v-text="texte"></p>
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
        hello(){
            console.log("Hello!");
        },
        turn(){
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
        align-items: center; 
        justify-content: center;
        height: 75%;
    }
    .image_profil div{
        height: 56.5%;
        width: 56.5%;
        margin: auto;
        transform: translate(0, 38%);
        background-image: url("/profil.jpeg");
        background-size: cover;
    }
    .couverture{
        width: 100%; 
        height: 100%; 
        overflow: hidden;
        color: #31363F;
        background-color: white;
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
    }
    @keyframes rotateCadre {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    
</style>