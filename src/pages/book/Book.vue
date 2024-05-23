<template> 
    <Lumiere @lumiere="lumiere" />
    <DropDown @chercher="tourner"/>

    <Stars @addStarts="l()"/>

    <div class="livre" id="livre">
        <div class="description">
            <p v-text="texte"></p>
            <Bot />
        </div>

        <div class="contenu 8">
            <Cv :isActive=true  />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 7">
            <Certificat :isActive=true />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 7">
            <Experience :isActive=true />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>
     

        <div class="contenu 6">
            <Education :isActive=true />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 5">
            <Outils :isActive=true />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 4">
            <Competence :title="OK" :isActive=true />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 3">
            <Realisation :isActive=true />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>

        <div class="contenu 2">
            <Presentation :isActive.sync=presentation />
            <button class="open" >
                <img src="/language/banner.png" @click="this.turn" width="50px">
            </button>
        </div>
        <div class="contenu 1" >
            <Couverture />
            <button class="open" > 
                <img src="/cursor/arrow.png" @click="this.turn"  width="50px">
            </button>
        </div>
    </div>

    <Loader v-if="isLoading"/>
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
import Loader from "../../components/loader/Loader.vue";
import Experience from "../../components/experience/Experience.vue";
import Certificat from "../../components/certificat/Certificat.vue";
import Language from "../../components/language/Language.vue";
import Lumiere from "../../components/button/Lumiere.vue";
import DropDown from "../../components/button/DropDown.vue";

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
            presentation: true,
            realisation: true,
            competence: true,
            outils: true,
            education: true,
            experience: true,
            cv: true
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
    },
    components: {
        Loader,
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
        Experience,
        Language,
        Lumiere,
        DropDown,
        Certificat
    },
    methods: {
        targetPage(id){
            console.log(this.pages)
           // const target = this.pages.map(p => p.classList.constains(id));
           // console.log(target)
        },
        tourner(id){
            console.log(this.pages)
            console.log(this.pages.length)
            //this.targetPage(id)
            let i = 7;
            let find = false;
            let action = "page";
            let inc = -1;
            while(!find){
                if(i === 0) action = "page-previous"
                if(i === 8) action = "page"
                if(!this.pages[i].classList.contains(id+"")){
                    this.pages[i].classList.add(action);
                } else if (this.pages[i].classList.contains(id+"")){
                    find = true
                }   
                i += inc
            }
        },
        handlePageLoaded() {
            this.isLoading = false; // Mettre isLoading à false lorsque la page est entièrement chargée
            this.revelerTexte();
        },  
        loading(){
            setTimeout(function(){
                this.isLoading = false
            }, 2000);
        },
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
            let page1 = this.getContenu(event.target);
            event.target.removeEventListener("click", this.turn); // ito ilay button
            page1.classList.add("page");
            page1.classList.remove("page-previous");
            this.livre.appendChild(page1);
            event.target.addEventListener("click", this.previous);
        },
        previous(event) {
            let page1 = this.getContenu(event.target);
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
        ,
        afficherTexteProgressivement(texte, element, index = 0) {
            if (index < texte.length) {
                element.innerHTML += texte.charAt(index);
                setTimeout(function () {
                //   this.afficherTexteProgressivement(texte, element, index + 1);
                }, 100); // Ajustez le délai entre chaque caractère ici
            }
        }
    }
    ,
    beforeDestroy() {
        window.removeEventListener('load', this.handlePageLoaded);
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
    cursor: pointer;
    transform: translate(310%, -107%);
}


.open img {
    border-radius: 50px;
    -webkit-filter: grayscale(1);
    background-color: white;
}

.open img:hover {
    -webkit-filter: grayscale(0);
    border-radius: 50px;
    transform: scale(1.05);
    background-color: white;
    filter: brightness(200px);
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
    }

    30% {
        transform: rotateY(90deg) skewY(-30deg);
      
    }

    100% {
        transform: rotateY(180deg);
        background-color: var(--page-background-color);
        
        opacity: 100%;
    }
}

.page div{
    animation: hideChildren 0.5s linear forwards;
}

.page .open{
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
        transform: rotateY(90deg) skewY(-30deg);
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