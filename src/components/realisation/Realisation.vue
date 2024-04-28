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
    import Projet from "../projet/Projet.vue";
    import axios from 'axios';

    export default{
        name: "Realisation",
        data(){
            return {
                gitRepository: [],
            }
        },
        mounted(){
            this.getGitRepository();
        },
        methods:
        {
            async getGitRepository(){
                const token = "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";
                const response = await axios.get("https://api.github.com/users/fabien-ss/repos", {
                    headers: {
                        Authorization: `token ${token}`,
                    }       
                })
                this.gitRepository = response.data;
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
        background-color: #76ABAE;
        overflow-y: scroll;
        height: 100%;
    }
</style>