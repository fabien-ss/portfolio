<template>
    <RoundCursor />
    <Lumiere @lumiere="lumiere" />
    <DropDown @chercher="tourner" />

    <Stars @addStarts="l()" @test="this.buttonData" />

    <div class="livre" id="livre">
        <div class="description">
            <p v-text="texte"></p>
            <Bot @test="this.buttonData" />
        </div>

        <div class="contenu 8" v-if="cv" >
            <Cv :isActive=true />
        </div>

        <div class="contenu 7" v-if="certificat">
            <Certificat :isActive=true />
            <button class="open" @click="cv = true" >
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 5" v-if="outils">
            <Outils :isActive=true />
            <button class="open" @click="certificat = true">
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 4" v-if="competence">
            <Competence :title="OK" :isActive=true />
            <button class="open" @click="outils = true" >
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 6" v-if="education">
            <Education :isActive=true />
            <button class="open" @click="competence = true" >
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 7" v-if="experience">
            <Experience :isActive=true />
            <button class="open" @click="education = true">
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 3" v-if="realisation">
            <Realisation :isActive=true />
            <button class="open" @click="experience = true" >
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 2" v-if="presentation">
            <Presentation :isActive.sync=presentation />
            <button class="open" @click="realisation = true">
                <img class="bt" src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 1" style="" id="couverture">
            <Couverture />
            <button class="open" @click="presentation = true">
                <img class="bt" src="/cursor/arrow.png" @click="this.turn" @mouseover="this.buttonData" width="50px">
            </button>
        </div>

        <div class="brown" id="verou" @click="open">
            <img class="bt" src="/language/verou.png" width="100%" />
        </div>
    </div>

    <Loader v-if="isLoading" />
</template>
<script>

import Presentation from "../../components/presentation/Presentation.vue";
import Competence from "../../components/competence/Competence.vue";
import Outils from "../../components/Outils.vue";
import Realisation from "../../components/realisation/Realisation.vue";
import Couverture from "../../components/couverture/Couverture.vue";
import Education from "../../components/education/Education.vue";
import Cv from "../../components/cv/Cv.vue";
import Stars from "../../components/stars/Stars.vue";
import Bot from "../../components/bot/Bot.vue";
import Loader from "../../components/loader/Loader.vue";
import Experience from "../../components/experience/Experience.vue";
import Certificat from "../../components/certificat/Certificat.vue";
import Language from "../../components/language/Language.vue";
import Lumiere from "../../components/button/Lumiere.vue";
import DropDown from "../../components/button/DropDown.vue";
import Cristal from "../../components/button/Cristal.vue";
import RoundCursor from "@/components/cursor/RoundCursor.vue";

export default {
    name: "Book",
    data() {
        return {
            isMoving: false,
            scale: "30deg",
            light: false,
            texte: "Hello I'm an IT Student from Madagascar, I invite you to open the book.",
            brigthness: 0.5,
            isLoading: true,
            presentation: false,
            realisation: false,
            competence: false,
            outils: false,
            education: false,
            experience: false,
            cv: false,
            certificat: false,
            componentPage: [
                /*
                , <Certificat />
                , <Outils />
                , <Presentation />
                , <Competence />
                , <Education />
                , <Experience />
                , <Realisation />*/
            ]
        }
    },
    mounted() {
        window.addEventListener('load', this.handlePageLoaded);
        this.loading();
        this.canTurn = true;
        this.firstPage = false;
        this.livre = document.getElementById("livre");
        this.texte = "",
            this.lampe = document.getElementById("lumiere");
        this.livre = document.getElementById("livre");
        this.lumiere();
        this.contenus = document.getElementsByClassName("contenu");
        this.pages = document.getElementsByClassName("contenu");
        this.index = 0;
        this.cursor = document.getElementById("cursor");
    },
    components: {
        Loader,
        Presentation,
        Competence,
        Outils,
        Realisation,
        Couverture,
        Education,
        Cv,
        Stars,
        Bot,
        Experience,
        Language,
        Lumiere,
        DropDown,
        Certificat,
        Cristal,
        RoundCursor
    },
    methods: {
        buttonData(event) {
            this.cursor.style = event.target.style;
        },
        open() {
            let couverture = document.getElementById("couverture");
            let verou = document.getElementById("verou");
            if (!verou.classList.contains("brown-open")) {
                verou.classList.add("brown-open");
                couverture.classList.add("oriente");
            }/*else if(verou.classList.contains("brown-open")){
                verou.classList.remove("brown-open");
                couverture.classList.remove("oriente");
            }*/
        },
        handlePageLoaded() {
            this.isLoading = false; // Mettre isLoading à false lorsque la page est entièrement chargée
            this.revelerTexte();
        },
        loading() {
            setTimeout(function () {
                this.isLoading = false
            }, 2000);
        },
        l() {
            if (this.brigthness <= 1.0) {
                this.brigthness += 0.1;
                this.livre.style.filter = `brightness(${this.brigthness})`;
            } else {
                this.brigthness = 0.5;
                this.livre.style.filter = `brightness(0.5)`;
            }
        },
        turnPerPage() {
            let page1 = this.contenus[this.contenus.length - 1 - this.index];
            page1.classList.add("page");
            page1.classList.remove("page-previous");
            this.index++;
        },
        debut() {
            this.canTurn = false;
            this.firstPage = !this.firstPage;
            let index = 0;
            const interval = setInterval(() => {
                if (index < this.contenus.length) {
                    if (this.firstPage) {
                        this.contenus[this.contenus.length - index - 1].classList.remove("page-previous");
                        this.contenus[this.contenus.length - index - 1].classList.add("page");
                    } else {
                        this.contenus[index].classList.remove("page");
                        this.contenus[index].classList.add("page-previous");
                    }
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 1000);
            this.canTurn = true;
        },
        revelerTexte() {
            let texteFinal = "<<Ton existence est significative à l'existence d'une chose>>           Bienvenue, c'est un plaisir de vous accueillir sur mon portfolio. Je suis étudiant en informatique à Madagascar. Je vous invite à en découvrir un peu plus en cliquant sur le livre à droite.";
            texteFinal = "RAKOTOMANANA Andriniaina Fabien - 3eme Année en informatique. Ivato Antananarivo";
            let index = 0;
            const interval = setInterval(() => {
                if (index < texteFinal.length) {
                    this.texte += texteFinal.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 25);
        },
        lumiere() {
            this.light = !this.light;
            if (this.light) {
                this.livre.style.filter = "brightness(1)";
                this.lampe.classList.add("lumiere");
            } else {
                this.livre.style.filter = "brightness(0.5)";
                this.lampe.classList.remove("lumiere");
            }
        },
        turn(event) {
            let page1 = this.getContenu(event.target);
            if (page1.classList.contains("oriente")) {
                page1.classList.remove("oriente");
            }
            event.target.removeEventListener("click", this.turn); // ito ilay button
            page1.classList.add("page");
            page1.classList.remove("page-previous");
            this.livre.appendChild(page1);
            event.target.addEventListener("click", this.previous);
        },
        previous(event) {
            let page1 = this.getContenu(event.target);
            if (page1.classList.contains("oriente")) {
                page1.classList.remove("oriente");
            }
            event.target.removeEventListener("click", this.previous);
            page1.classList.add("page-previous");
            page1.classList.remove("page");
            this.livre.appendChild(page1);
            event.target.addEventListener("click", this.turn);
        },
        getContenu(element) {
            if (element.classList.contains("contenu")) return element;
            return this.getContenu(element.parentElement);
        }
    }
}


</script>

<style>
.oriente {
    transform-origin: left;
    transform: rotateY(10deg) skewY(1deg);
}

.brown {
    background-color: #3f333e;
    width: 100px;
    height: 100px;
    left: 84%;
    position: fixed;
    top: 43%;
    border-radius: 10px 0px 0px 10px;
    border: 4px solid rgb(39, 38, 38);
    border-right-width: 4px;
    border-right-style: solid;
    border-right-color: rgb(39, 38, 38);
    border-right: 0px;
    transition: 500ms;
    transform-origin: right;
    cursor: pointer;
    border-right: 10px solid #e4cba4;
    animation: clignottant 2s linear infinite;
}

.brown:hover {
    filter: brightness(1.5)
}

@keyframes clignottant {
    0% {
        filter: brightness(0.5)
    }

    50% {
        filter: brightness(1);
        box-shadow: 0 0 10px 00px white;
    }

    100% {
        filter: brightness(0.5)
    }
}

.brown-open {
    transform: rotateY(-80deg);
}


.hide {
    display: none;
}

.description {
    width: 100%;
    position: absolute;
    transform: translate(-100%, 0);
    height: 800px;
    color: white;
    text-align: left;
    align-items: center;
    justify-content: center;
}

.description p {
    margin-right: 15%;
}

.next {
    position: fixed;
    transform: translate(266px, -32px);
}

:root {
    --page-background-color: #31363F;
    ;
}

.image {
    width: 100%;
    height: 100%;
}

.contenu {
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 0px 1px;
    background-color: #31363F;
    text-align: center;
    overflow: scroll;
    border-left: 1px solid #c9cfcf;
    border-radius: 0px 15px 15px 0px;
    transition: 0.5s;
}


.page {
    transform: rotateY(180deg);
    animation: turnPage 0.5s linear;
    transform-origin: left;
    background-color: var(--page-background-color);
}

@keyframes turnPage {
    0% {
        transform: rotateY(0deg);
        box-shadow: 0px 0px;
    }

    30% {
        transform: rotateY(90deg) skewY(20deg);

    }

    100% {
        transform: rotateY(180deg);
        background-color: var(--page-background-color);

        opacity: 100%;
    }
}

.page div {
    animation: hideChildren 0.5s linear forwards;
}

@keyframes notHidingChildren {
    0% {
        opacity: 100%;
    }

    30% {
        opacity: 100%;
    }

    31% {
        opacity: 100%;
    }

    100% {
        opacity: 100%;
    }
}

@keyframes hideChildren {
    0% {
        opacity: 100%;
    }

    30% {
        opacity: 100%;
    }

    31% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

.page-previous {
    transform: rotateY(0deg);
    animation: turnPage-previous 0.5s linear;
    transform-origin: left;
}

.page-previous * {
    animation: hideChildren-previous 0.5s linear forwards;
}

@keyframes hideChildren-previous {
    0% {
        opacity: 0%;
    }

    30% {
        opacity: 0%;
    }

    31% {
        opacity: 100%;
    }

    100% {
        opacity: 100%;
    }
}


@keyframes turnPage-previous {
    0% {
        transform: rotateY(180deg);

    }

    30% {
        transform: rotateY(90deg) skewY(20deg);
    }

    100% {
        transform: rotateY(0deg);
        box-shadow: 0px 0px;
    }
}

.livre {
    position: relative;
    width: 600px;
    margin: auto;
    height: 50pc;
    margin-top: 4vh;
    filter: brightness(0.5);
    transform: translate(50%, 0);
}
</style>