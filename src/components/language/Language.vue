<template>
    <div class="targetLanguage">
        <p style="font-weight: bold;">{{ targetLanguage.prct }}</p>
        <p :class="{ show: !isLoading }" style="font-weight: inherit;
        font-size: initial; color: white;">
            {{ targetLanguage.dcr }}
            </p>
            <img :src="targetLanguage.img" width="80%" />
    </div>

    <div v-if="canLoad" class="" style="
    overflow-x: scroll;
  gap: 1%;
  bottom: 40px;
  position: absolute;
  display: inline-flex;
  width: 80%;
  border-left: 10px solid;
  border-right: 10px solid;

  ">
        <div class="card" v-for="(svg, index) in svgData" :key="index">
            <div :class=svg.theme.cls @mouseover="changeTargetLanguage(svg)">
                <img :src=svg.img class="bt" style="width: 100%">
                <div class="banner">
                    <p style="color: white;">
                        {{ svg.prct }}
                    </p>
                </div>
            </div>
            <div class="body">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Language",
    data() {
        return {
            isLoading: false,
            targetLanguage: { img: "/language/dotnet.svg", prct: "DOTNET", dcr: "Idéal pour créer des applications robustes, évolutives et sécurisées au niveau des entreprises, surtout celles nécessitant une intégration avec des fonctionnalités spécifiques à Windows.", theme: { p: "#1574B8", s: "dark", cls: "four head" } },
            canLoad: true,
            svgData: [
                { img: "/language/dotnet.svg", prct: "DOTNET", dcr: "Idéal pour créer des applications robustes, évolutives et sécurisées au niveau des entreprises, surtout celles nécessitant une intégration avec des fonctionnalités spécifiques à Windows.", theme: { p: "#1574B8", s: "dark", cls: "four head" }, display: 1 },
                { img: "/language/java.svg", prct: "JAVA", dcr: "Fréquemment utilisé pour développer des applications d'entreprise à grande échelle grâce à sa scalabilité, sa portabilité et ses caractéristiques de sécurité.", theme: { p: "#E76F00", s: "#5382A1", cls: "one head" }, display: 2 },
                { img: "/language/nest.svg", prct: "NEST JS", dcr: "Meilleur choix pour construire des applications côté serveur hautement testables, évolutives et maintenables, particulièrement dans une architecture de microservices.", theme: "red", theme: { p: "#FF586C", s: "#F7DF1E", cls: "nest head" }, display: 1 },
                /* { img: "/language/php.svg", prct: "PHP", dcr: "Principallement utilisé pour le développement web côté serveur afin de produire des pages web dynamiques. Il est connu pour sa facilité d'utilisation et une large gamme de fonctionnalités, le rendant idéal pour le développement rapide d'applications.", theme: { p: "#6F8FC8", s: "dark", cls: "two head" }, display: 2 },
                */{ img: "/language/vue.svg", prct: "VUE JS", dcr: "Idéal pour construire des applications mono-pages où vous avez besoin d'une interface utilisateur rapide et flexible. Il est également excellent pour ajouter des interfaces utilisateur interactives à des sites statiques.", theme: { p: "#42d392", s: "black", cls: "vue head" }, display: 1 },
                { img: "/language/python.svg", prct: "PYTHON", dcr: "Populaire pour l'analyse de données, l'apprentissage automatique, l'intelligence artificielle, les calculs scientifiques et les tâches d'automatisation grâce à sa simplicité et à un large soutien bibliothèque.", theme: { p: "#366D9B;", s: "#FFD545", cls: "three head" }, display: 1 },
            ]

        }
    },
    mounted() {
    },
    methods: {
        changeTargetLanguage(target) {    
            this.isLoading = true; // Commencez l'animation de chargement
            //await new Promise(resolve => setTimeout(resolve, 1000)); // Simule le temps de chargement
            this.$emit("image", target.img)
            this.targetLanguage = target; // Change la langue cible
            this.isLoading = false; // Termine l'animation de chargement
        },
        follow(event) {
            console.log(event.target)
            const nest = this.getParent(event.target);
            console.log("nest ", nest)
        },
        getParent(el) {
            if (el.classList.contains("nest")) return el;
            else return this.getParent(el);
        }
    }
}
</script>

<style>
:root {
    --bg: red;
    --bg-rd: rgb(248, 248, 234);
}



.targetLanguage p.show {
    opacity: 1;
}

.targetLanguage img.show {
    opacity: 1;
}

.targetLanguage {
    border-radius: 20px;
    transition: 1s;
    width: 100%;
    margin: auto;
    min-height: 200px;
    color: black;

    p {
        opacity: 0;
        transition: opacity 1s;
    }

    img {
        transition: opacity 1s;
    }
}

.card {
    transition: 1s;
    max-width: 100px;
    max-height: 100px;
    padding-top: 1%;
    float: left;
    margin-left: 3%;

    .body {
        display: none;
        color: var(--bg);

        .text-p {
            font-size: 15px;
        }
    }

    .head {
        cursor: pointer;
        transition: 1s;
        overflow: hidden;
        max-height: 100px;
        border-radius: 50px;
        
        .banner {
            width: 100px;
            min-height: 100px;
            transform: translate(0, 210px);
            transition: 1s;

        }
    }
/*
    .head:hover {
      //  animation: bright 1s linear infinite;
        .banner {
            transition: 0.5s;
            background-color: black;
            width: 100px;
            min-height: 100px;
            transform: translate(0, -105px);
            color: white;
            font-size: 20px;
            text-align: center;
            padding: 2%;
        }

    }
*/
    .body {
        text-align: center;
    }
}

@keyframes afficher {
    0% {}

    25% {
        transform: translate(0, -105px);
    }

    50% {

        transform: translate(0, -105px);
    }

    100% {}
}

@keyframes tourner {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}


@keyframes bright {
    0% {
        filter: brightness(1);
    }

    50% {
        filter: brightness(1.2);
        box-shadow: 0 0 5px var(--bg), 0 0 0px var(--bg), 0 0 0px var(--bg), 0 0 50px var(--bg);
    }

    100% {
        filter: brightness(1);
    }
}
</style>