<template>

    <Stars @addStarts="l()"/>

    <Lumiere @lumiere="lumiere()"/>
    <div class="livre" id="livre">
        <div class="description">
            <p v-text="texte" style=""></p>
            <Bot />
        </div>

        <div class="contenu" @click="this.turn">
            <Education />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>

        <div class="contenu" @click="this.turn">
            <Education />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>

        <div class="contenu" @click="this.turn">
            <Education />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
        <div class="contenu" @click="this.turn">
            <Education />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
        <div class="contenu" @click="this.turn">
            <Education />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>

        <div class="contenu" @click="this.turn">
            <BlankPage />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>

        <div class="contenu" @click="this.turn">
            <Cv />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>

        <div class="contenu" @click="this.turn">
            <Experience />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>

        <div class="contenu" @click="this.turn">
            <Outils />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
        <div class="contenu" @click="this.turn">
            <Realisation />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
        <div class="contenu" @click="this.turn">
            <Competence :title="OK" />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
        <div class="contenu" @click="this.turn">
            <Presentation />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
        <div class="contenu" @click="this.turn">
            <Couverture />
            <Button class="open">
                <img src="/cursor/arrow.png" width="50px">
            </Button>
        </div>
    </div>

    <Loading v-if="isLoading" @isLoading = "isLoading = !isLoading"/>
</template>
<script >

import BlankPage from "../BlankPage.vue";
import Presentation from "../../components/presentation/Presentation.vue";
import Competence from "../../components/competence/Competence.vue";
import Outils from "../../components/Outils.vue";
import Realisation from "../../components/realisation/Realisation.vue";
import Couverture from "../../components/couverture/Couverture.vue";
import Education from "../../components/education/Education.vue";
import Cv from "../../components/cv/Cv.vue";
import Stars from "../../components/stars/Stars.vue";
import Bot from "../../components/bot/Bot.vue";
import Loading from "../../components/loading/Loading.vue";
import Experience from "../../components/experience/Experience.vue";
import Lumiere from "../../components/button/Lumiere.vue";

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
            myComponents: [Couverture, Presentation, Competence, Realisation, Education, Experience],
            indexs: [ 0, 1, 2 ]
        }
    },
    mounted() {
        /*
        const interval = setInterval(() => {
            this.isLoading = !this.isLoading;
        }, 2000);*/
        this.canTurn = true;
        this.firstPage = false;
        this.livre = document.getElementById("livre");
        this.texte = "",
            this.lampe = document.getElementById("lumiere");
        this.livre = document.getElementById("livre");
        this.lumiere();
        this.revelerTexte();
        this.contenus = document.getElementsByClassName("contenu");
        this.index = 0;
    },
    components: {
        BlankPage,
        Presentation,
        Competence,
        Outils,
        Realisation,
        Couverture,
        Education,
        Cv,
        Stars,
        Bot,
        Loading,
        Lumiere
    },
    methods: {
        l(){
            //console.log(this.brigthness)
            if(this.brigthness <= 1.0){
                this.brigthness += 0.1;
                this.livre.style.filter = `brightness(${this.brigthness})`;
            }else{
                this.brigthness = 0.5;
                this.livre.style.filter = `brightness(0.5)`;
            }
        },
        sendForm(event) {
            event.preventDefault();
            //console.log("form sent ", event.target[0].value);
            const response = fetch("http://localhost:3000/ia-helper/answer-question", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: event.target[0].value
                })
            })
            //console.log(response)
        },
        turnPerPage() {
            let page1 = this.contenus[this.contenus.length - 1 - this.index];//.classList.add("BlankPage");
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
                    if (this.firstPage == true) {
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
            texteFinal = "<<Ton existence est significative à l'existence d'une chose>>";
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
            var page1 = this.getContenu(event.target);
            //if(!page1.classList.contains("page-previous")){
            //          this.canTurn = !this.canTurn;
            page1.removeEventListener("click", this.turn);
            //console.log(page1.classList.contains("page"))
            //console.log("turning");
            page1.classList.add("page");
            page1.classList.remove("page-previous");
            this.livre.appendChild(page1);
            //  this.canTurn = !this.canTurn;
            page1.addEventListener("click", this.previous);

            // }
        },
        previous(event) {
            //     if(this.canTurn){
            //        this.canTurn = !this.canTurn;
            var page1 = this.getContenu(event.target);
            page1.removeEventListener("click", this.previous);
            page1.classList.add("page-previous");
            page1.classList.remove("page");
            this.livre.appendChild(page1);

            //  this.canTurn = !this.canTurn;
            page1.addEventListener("click", this.turn);
            //      }
        },
        getContenu(element) {
            if (element.classList.contains("contenu")) return element;
            return this.getContenu(element.parentElement);
        }
        ,
        afficherTexteProgressivement(texte, element, index = 0) {
            if (index < texte.length) {
                element.innerHTML += texte.charAt(index);
                setTimeout(function () {
                    this.afficherTexteProgressivement(texte, element, index + 1);
                }, 100); // Ajustez le délai entre chaque caractère ici
            }
        }
    }
}


</script>

<style>


.open {
    background-color: transparent;
    color: #d18d64;
    border-radius: 50%;
    min-width: 70px;
    min-height: 70px;
    border: none;
    overflow: hidden;
    position: absolute;
    transform: translate(300%, -120%);
}

.open img:hover {
    border: 5px solid #d18d64;
    border-radius: 50px;
    background-color: white;
}

.hide {
    display: none;
}

.description {
    width: 50%;
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
    width: 50%;
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
        opacity: 100%;
    }

    30% {
        transform: rotateY(90deg) skewY(-30deg);
        box-shadow: 0px 0px;
        opacity: 100%;
        
    }

    100% {
        transform: rotateY(180deg);
        box-shadow: 0px 0px;
        background-color: var(--page-background-color);
        
        opacity: 100%;
    }
}

.page * {
    animation: hideChildren 0.5s linear forwards;
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
        box-shadow: 0px 0px;
        background-color: var(--page-background-color);
        background-repeat: no-repeat;
        background-size: cover;
    }

    30% {
        transform: rotateY(90deg) skewY(-30deg);
        box-shadow: 0px 0px;

        background-color: var(--page-background-color);
        background-repeat: no-repeat;
        background-size: cover;
    }

    100% {
        transform: rotateY(0deg);
        box-shadow: 0px 0px;
    }
}

.livre {
    position: relative;
    width: 1200px;
    margin: auto;
    height: 800px;
    margin-top: 4vh;
    filter: brightness(0.5);
    transform: translate(600px, 0);
}

@keyframes loadBook {
    0% {

        transform: translate(-1000px, 0);
    }

    100% {
        transform: translate(0, 0);
    }
}

.lanterne {
    width: 10%;
    height: 40px;
    border-radius: 50px;
    margin: auto;
    background-color: #0b0c0d;
    border: 0.5px white;
    color: white;
    font-size: small;
}

.lumiere {
    background-color: #ffff;
    box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
    animation: lumiere 2s linear;
    margin: auto;
}

@keyframes lumiere {

    0%,
    100% {
        box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
    }

    50% {
        box-shadow: 0 0 20px #ffff, 0 0 40px #ffff, 0 0 60px #ffff, 0 0 60px #ffff;
    }
}

.test {
    width: 100%;
    height: 950px;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    transform: translate(0, 56px);
    border: 1px solid white;
}

.test_child {
    position: relative;
    transform: translate(0, 950px);
}

#arrow {
    transform: translate(560px, -2px);
    animation: arrowUp 0.5s infinite;
}

@keyframes arrowUp {
    0% {
        transform: translate(551px, -50px);
    }

    100% {
        transform: translate(551px, -2px);
    }
}
</style>