<template>
    <div class="couverture" >
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
            name: "RAKOTOMANANA Andriniaina Fabien",
            canLoad: true
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


<style lang="scss">

    $couverture-color: #15171a;
    $background-color: white;
    $profil-image: "https://th.bing.com/th/id/OIP.hYNEZU4S_-pX_SS_7qZ1egHaFy?rs=1&pid=ImgDetMain";
    $cadre-image: "/freepik/Fond/cadre.jpeg";

    .couverture{
        width: 100%;
        height: 100%;
        overflow: hidden;
        
        color: $couverture-color;
        background-color: $background-color;

        .image_profil{
            
            position: relative;
            //background-image: url($cadre-image);
            
            background-color: $couverture-color;
            background-size: cover;
            width: 100%;
            align-items: center;
            justify-content: center;
            height: 75%;

            .image_profil2 {
                height: 56.5%;
                width: 56.5%;
                margin: auto;
                border: 2px solid rgb(204, 200, 200);//;rgb(192, 121, 28);
                border-radius: 5px;
                transform: translate(0, 38%);
                background-image: url($profil-image);
                background-size: cover;
            }
        }

        .case{
            height: 15%;
            background-color: $background-color;
            margin-bottom: 1%;
            text-align: center;
        }

        .texte{
            font-weight: lighter;
            color: black;
            filter: brightness(1);
            text-align: center;
        }
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
