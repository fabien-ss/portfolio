<template>
    <div class="presentation" v-if="isActive">

        <div class="header">
            <br>
            <h1>Presentation</h1>
            <h1>{{this.title}}</h1>
            <p style="font-style: italic;" v-text="position"></p>
            <p v-text="salutation"></p>
            <p v-text="intro"></p>
            <p>Prénom: Fabien, Problème: trouver un stage</p>
        </div>
        <div class="contact">
            <p><span class="bold">Numéro: </span>+261 34 75 197 55</p>
            <p><span class="bold">Email: </span>rakotomanana.andriniaina.fabien@gmail.com</p>
            <p><span class="bold">LinkeDin: </span><a href="https://www.linkedin.com/in/andriniaina-fabien-rakotomanana-b6b828231/" target="_blank">Andriniaina Fabien</a></p>
        </div>
   
    </div>
</template>

<style>
    .contact{
        margin-bottom: 10px;
    }

    .contact p{
        font-size: small;
        margin-left: 40px;
    }

    .header{
        margin-left: 20px;
        text-align: center;
        height: 80%;
        overflow: scroll;
    }
    
    .header p{
        font-size: 17px;
    }
    .presentation{
        color: white;
        width: 100%;
        height: 100%;
        font-family: "Roboto Mono", monospace;
      font-optical-sizing: auto;
      font-style: normal;
        background-color: #76ABAE;/*

        background-image: url("/freepik/fond.jpeg");
        background-repeat: no-repeat;
        background-size: cover;*/
    }
    .image_profil{
        text-align: center;
    }
</style>

<script>
    import MotherComponent from "../MotherComponent.vue";
    export default{
        extends: MotherComponent,
        name: "Presentation",
        props: {
         
        },
        mounted(){
        }
        ,
        data(){
            return {
                canLoad: true,
                title: "RAKOTOMANANA Andriniaina Fabien",
                intro: `
                    Pour une bref introduction, à l'obtention de mon baccalauréat en 2021 je ne pensais pas du tout attérrir dans le
                    monde où je suis aujourd'hui. Mes idées n'étaient pas claires, on m'a suggéré alors l'informatique à 
                    l'IT University. Après quelques cours, je réalise que c'était un bon choix.
                `,
                position: "Etudiant en informatique, actuellement en 3eme année.",
                salutation: "Bonjour, je suis Fabien, Bienvenue sur mon portfolio."
            }
        }
    }
</script>
