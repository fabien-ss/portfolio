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
            <p><span class="bold">Github: </span><a href="https://github.com/fabien-ss" target="_blank">fabien-ss</a></p>
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
                    Chevronné de nouvelles technologies, désireux d'acquérir de nouvelles compétences.
                    Je suis actuellement ouvert à une eventuelle opportunité d'emploi dans le domaine de l'IT.
                `,
                position: "Etudiant en informatique, développeur C# | Java | Node | Vuejs, actuellement en 3eme année.",
                salutation: "Bonjour, je suis Fabien, Bienvenue sur mon portfolio."
            }
        }
    }
</script>
