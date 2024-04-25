<template>
    <div class="realisation">
        <h1 style="color: white">TOP PROJET</h1>

        <Projet
            v-for="projet in gitRepository"
            :-titre="projet.name"
            :-languages="[projet.language]"
            :-lien="projet.html_url"
            :-description="projet.description"
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
                gitRepository: [],
            }
        },
        mounted(){
            //this.getGitRepository();
        },
        methods:
        {
            /*async getGitRepository(){
                const token = "";
                const response = await axios.get("https://api.github.com/users/fabien-ss/repos", {
                    headers: {
                        Authorization: `token ${token}`,
                    }       
                })
                this.gitRepository = response.data;
                console.log("respones ",response);
            }*/
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