<template>
    <div class="realisation" v-if="isActive">
        <Projet v-for="(projet, key) in paginatedProjects" :-titre="projet.name" :-languages="[projet.language]"
            :-lien="projet.html_url" :-description="projet.description" />
    </div>
</template>

<script>
import Projet from "../projet/Projet.vue";
import axios from 'axios';
import Next from "../button/Next.vue";
import EducationCard from "../education/EducationCard.vue";
import MotherComponent from "../MotherComponent.vue";

export default {
    extends: MotherComponent,
    name: "Realisation",
    components: { Next, EducationCard },
    computed: {
        totalPages() {
            return Math.ceil(this.gitRepository.length / this.pageSize);
        },
        paginatedProjects() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.gitRepository.slice(startIndex, endIndex);
        },
    },
    data() {
        return {
            canLoad: true,
            pageSize: 3, // Nombre de projets par page
            currentPage: 1,
            gitRepository: [
                {
                    name: "INVENTORY-MANAGEMENT",
                    language: "DOTNET, Postgresql",
                    html_url: "https://github.com/fabien-ss/INVENTORY-MANAGEMENT",
                    description: "Gestion de stock Fifo&Lifo."
                },
                {
                    name: "ENTREPRISE DE CONSTRUCTION",
                    language: "DOTNET, Postgresql",
                    html_url: "https://github.com/fabien-ss/INVENTORY-MANAGEMENT",
                    description: "Application pour gérer les différentes actions."
                },
                {
                    name: "IMMOBILISATION",
                    language: "JAVA, Postgresql",
                    html_url: "https://github.com/fabien-ss/IMMOBILISATION",
                    description: "Gestion des immobilisations d'une entreprise."
                },
                {
                    name: "JAVA FRAMEWORK",
                    language: "JAVA",
                    html_url: "https://github.com/fabien-ss/JAVA-FRAMEWORK",
                    description: "Framework fait en java."
                },
                {
                    name: "DATABASE ACCESS OBJECT",
                    language: "JAVA",
                    html_url: "https://github.com/fabien-ss/DATABASE-ACCESS-OBJECT",
                    description: "Librairie pour mapper une entité à une classe."
                },
                {
                    name: "Plaque solaire",
                    language: "Java, Postgresql",
                    html_url: "https://github.com/fabien-ss/Gestion-plaque-solaire.",
                    description: "Prédiction coupure au sein d'un établissament utilisant des panneaux solaires."
                },
                {
                    name: "PATTERSON&SARDINAS Entrained modele",
                    language: "Typescript, Python, Vuejs",
                    html_url: "https://github.com/fabien-ss/MODEL-LANGUAGE-PREDICATION",
                    description: "Entrainement d'un modele de prédication selon l'algorithme de Patterson et Sardinas si un language est unique."
                },
                {
                    name: "Photo-math",
                    language: "Python, Php",
                    html_url: "#",
                    description: "Entrainement d'un modele de prédication pour la lecture d'une équation du premier degré et sa résolution."
                },
                {
                    name: "SCAFFOLDING",
                    language: "Java",
                    html_url: "https://github.com/fabien-ss/SCAFFOLDING-ALEA",
                    description: "Collaboration pour un programme en java permettant de créer automatiquement des cruds pour dotnet, java comme api et react, angular, vuejs comme front."
                },
                {
                    name: "SPY-MISSION",
                    language: "Python",
                    html_url: "https://github.com/fabien-ss/Spy-mission",
                    description: "Entrainement sur conding contest, niveau 5. Analyze de données saturées, Entrainement modèle, décryptage, algorithme du PCA."
                },
                {
                    name: "Huffman",
                    language: "Typescript",
                    html_url: "https://github.com/fabien-ss/Huffman",
                    description: "Implémentation de l'algorithme de Huffman pour la compression de fichier."
                },
                {
                    name: "MORPION-IA",
                    language: "Java",
                    html_url: "https://github.com/fabien-ss/Morpion-algo",
                    description: "Implémentation de l'algorithme de minimax."
                }
                ,
                {
                    name: "IA SERVICE",
                    language: "Python",
                    html_url: "https://github.com/fabien-ss/Python-IA",
                    description: "API Python fournissant quelques services utilisant l'intelligence artificielle."
                },
                {
                    name: "MORPION-IA",
                    language: "Java",
                    html_url: "https://github.com/fabien-ss/Morpion-algo",
                    description: "Implémentation de l'algorithme de minimax."
                }
                ,
                {
                    name: "Gestion de stock",
                    language: "Java, Postgresql",
                    html_url: "https://github.com/fabien-ss/Gestion-de-stock",
                    description: "Gestion de stock utilisant un framework créer avec java."
                }
                ,
                {
                    name: "Vente auto",
                    language: "Java, React, Postgresql",
                    html_url: "https://github.com/fabien-ss/Vente-auto-web",
                    description: "Application web avec version mobile pour la vente de voiture d'occasion."
                }
                ,
                {
                    name: "Dokotera",
                    language: "Java, Postgresql",
                    html_url: "https://github.com/fabien-ss/Dokotera",
                    description: "Suggestion médicament suivant un algoritme de recherche des combinaisons les moins chères mais efficaces."
                }

                ,
                {
                    name: "Election",
                    language: "Java , Postgresql",
                    html_url: "https://github.com/fabien-ss/resultat-election",
                    description: "Programme permettant de visualiser les résultats de l'election presidentielle de 2023 à Madagascar."
                }
                ,
                {
                    name: "Clustering-environnement",
                    language: "Php, Java, Postgresql, Mysql",
                    html_url: "https://github.com/fabien-ss/Vente-auto-web",
                    description: "Synchronisation de session sur differentes base de données et languages."
                }
                ,
                {
                    name: "Ressources humaines",
                    language: "Dotnet, Postgresql",
                    html_url: "https://github.com/fabien-ss/S5-RH",
                    description: "Gestion des ressources humaines d'une entreprise."
                }
                ,
                {
                    name: "Carte numérique",
                    language: "Dotnet, Java, Postgresql",
                    html_url: "https://github.com/fabien-ss/numerical-card",
                    description: "Carte d'indentité nationale permettant d'avoir ces différents informations: Banque, Santé et Foncier."
                }
                ,
                {
                    name: "Simplexe",
                    language: "Java",
                    html_url: "https://github.com/fabien-ss/Simplexe-optimisation",
                    description: "Implémentation de l'algorithme de simplexe à 1 et 2 phases."
                }
                ,
                {
                    name: "Ticketing Concert",
                    language: "Java, Postgresql",
                    html_url: "https://github.com/fabien-ss/Concert",
                    description: "Gestion des places d'un concert."
                }
                ,
                {
                    name: "Prestataire réparation de route",
                    language: "Ruby, Postgresql",
                    html_url: "https://github.com/fabien-ss/Prestataire-Front",
                    description: "Tri des prestations des diffents prestataire."
                }
                ,
                {
                    name: "Plan comptable",
                    language: "Dontet, Postgresql",
                    html_url: "https://github.com/fabien-ss/Projet-plan-comptable",
                    description: "Grand livre comptabilité."
                }
                ,
                {
                    name: "Email & spam",
                    language: "Python",
                    html_url: "",
                    description: "Entrainement d'un modele de prediction permettant de savoir si un mail est un spam ou non."
                }
                ,
                {
                    name: "Vet-conseil",
                    language: "Python, Postgresql",
                    html_url: "https://github.com/fabien-ss/S4-web-vet-conseil",
                    description: "Collaboration sur la création d'un site véterinaire."
                }
                ,
                {
                    name: "PMU",
                    language: "Dotnet, Postgresql",
                    html_url: "https://github.com/fabien-ss/PMU",
                    description: "Paris sportif sur les courses de chevaux avec simulation."
                }
                ,
                {
                    name: "Parcour en largeur",
                    language: "Java",
                    html_url: "https://github.com/fabien-ss/Algo",
                    description: "Implémentation de l'algo de parcour en largeur."
                }
                ,
                {
                    name: "Baby-foot",
                    language: "Dotnet, Postgresql",
                    html_url: "https://github.com/fabien-ss/baby-foot",
                    description: "Jeux baby foot."
                }
                ,
                {
                    name: "Canal+",
                    language: "Python, Postgresql",
                    html_url: "https://github.com/fabien-ss/Canal-",
                    description: "Gestion de bouquet télé."
                }
                ,
                {
                    name: "Route",
                    language: "Python, Postgresql-Postgis",
                    html_url: "https://github.com/fabien-ss/route",
                    description: "Repérage de route endommagé avec Prioritisation selon la population Madagascar."
                }
                ,
                {
                    name: "Fanorona",
                    language: "Java",
                    html_url: "https://github.com/fabien-ss/socket-project",
                    description: "Fanorona en ligne avec socket."
                }
                ,
                {
                    name: "Billard",
                    language: "Java",
                    html_url: "#",
                    description: "Jeu billard en java."
                }
                ,
                {
                    name: "Ping-pong",
                    language: "Java",
                    html_url: "#",
                    description: "Jeu ping-pong en java."
                }
            ],
        }
    },
    mounted() {
        // this.getGitRepository();
    },
    methods:
    {
        async getGitRepository() {
            const token = process.env.VUE_APP_GIT_SECRET;
            const response = await axios.get("https://api.github.com/users/fabien-ss/repos", {
                headers: {
                    Authorization: `token ${token}`,
                }
            })
            this.gitRepository = response.data;
            console.log("respones ", response);
        }, 
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
    components: {
        Projet
    }
}
</script>

<style>
.realisation {
    background-color: white;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    display: grid;

    .next-previous{

        max-height: 50%;

        button{
            border-radius: 10px;
            min-height: 40px;
            width: 10%;
            cursor: pointer;
            border: none;
            margin: auto;
            background-color: black;
            color: white;
            margin-top: 10px;
        }
    }
}
</style>