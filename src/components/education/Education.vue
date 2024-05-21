<template>
    <div class="education" v-if="isActive">
        <br>
        <h1>Education</h1>
        <EducationCard v-for="ed in educations" 
            :etablissement="ed.etablissement"
            :diplome="ed.diplome"
            :mention="ed.mention"
            :annee="ed.annee"
            :lieu="ed.lieu"
            :key="ed.etablissement"
        />
    </div>
</template>

<script>
    import EducationCard from "./EducationCard.vue";
    import MotherComponent from "../MotherComponent.vue";
    export default{
        extends: MotherComponent,
        name: "Education",
        data(){ 
            return {
                canLoad: true,
                educations: [
                    {
                        etablissement: "Lycée Fanoellie",
                        diplome: "Baccalauréat série D",
                        mention: "Très bien",
                        annee: "2021 - 2022",
                        lieu: "TALATAMATY" 
                    },
                    {
                        etablissement: "IT University",
                        diplome: "Licence en développemnt d'application web & mobile",
                        mention: "",
                        annee: "2022 - en cours",
                        lieu: "ANDOHARANOFOTSY" 
                    },
                ]
            }
        },
        components:{
            EducationCard
        }
    }
</script>

<style>
    .education{
        width: 100%;
        height: 100%;
        background-color: #9B345F;
    }
</style>