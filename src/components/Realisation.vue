<template>
    <div class="realisation">
        <h1 style="color: white">TOP PROJET</h1>
        <Projet     
            :-titre="'1) Gestion allimentation, coupure de Panneau solaire'" 
            :-languages="['Java Server Page']"
            :-lien="not "
        />
        
        <Projet 
            :-titre="'2) Etat, localisation, évaluation, prioritisation, prestation pour les routes endommagées'",
            :-languages="['Python tkinter']"
        />

        <Projet 
            :-titre="'3) Gestion de stock fifo-lifo'",
            :-languages="['ASP.NET MVC']"
        />
        
        <Projet 
            :-titre="'4) Matching couple, site pour correspondre deux individus'",
            :-languages="['Java Server Page']"
        />

        <Projet 
            :-titre="'3) Gestion de stock fifo-lifo'",
            :-languages="['ASP.NET MVC']"
        />
        
        <Projet 
            :-titre="'4) Matching couple, site pour correspondre deux individus'",
            :-languages="['Java Server Page']"
        />

        <Projet 
            :-titre="'3) Gestion de stock fifo-lifo'",
            :-languages="['ASP.NET MVC']"
        />
        
        <Projet 
            :-titre="'4) Matching couple, site pour correspondre deux individus'",
            :-languages="['Java Server Page']"
        />

        <Projet 
            :-titre="'3) Gestion de stock fifo-lifo'",
            :-languages="['ASP.NET MVC']"
        />
        
        <Projet 
            :-titre="'4) Matching couple, site pour correspondre deux individus'",
            :-languages="['Java Server Page']"
        />

        <Projet 
            :-titre="'3) Gestion de stock fifo-lifo'",
            :-languages="['ASP.NET MVC']"
        />
        
        <Projet 
            :-titre="'4) Matching couple, site pour correspondre deux individus'",
            :-languages="['Java Server Page']"
        />

        <Projet 
            :-titre="'3) Gestion de stock fifo-lifo'",
            :-languages="['ASP.NET MVC']"
        />
        
        <Projet 
            :-titre="'4) Matching couple, site pour correspondre deux individus'",
            :-languages="['Java Server Page']"
        />
    </div>
</template>

<script>
    import Projet from "./competence/Projet.vue";
    import axios from 'axios';

    export default{
        name: "Realisation",
        data(){
            return {
                gitRepository: null,
            }
        },
        mounted(){
          //  this.getGitRepository();
        },
        methods:
        {
            getGitRepository(){
                const token = "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";
                const response = axios.get("https://api.github.com/users/fabien-ss/repos", {
                    headers: {
                        Authorization: `token ${token}`,
                    }       
                })
                console.log("respones ",response);
            }
        },
        components:{
            Projet
        }
    }
</script>

<style>
   
    .realisation{
        overflow-y: scroll;
        height: 100%;
        background-image: url("/freepik/fond.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>