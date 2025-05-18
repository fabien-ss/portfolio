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
    $profil-image: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/492000935_2119898588518475_295846276559082903_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcXCEUcIk2jQn17x_pNEKPBsiUKjGtoZsGyJQqMa2hmzqR0T1ObIkXAYXxuPyH3beutdLbK2KLznRTNf5UtfrA&_nc_ohc=vzYF5DCGJw0Q7kNvwGkIA-r&_nc_oc=AdnWIQi21eJE7DHZl6j9D32jb7GF8ve49_S4A-3r88Ci4Mh6aC-DIGNIov8ajCB2xwU&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=Efy4VQmHEHXjSYRx8qIZ_g&oh=00_AfKurEuRE-DaIw4QIYCJNeZN-y_YrCmGqjH4DJeElKdCPw&oe=682FD895";
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
