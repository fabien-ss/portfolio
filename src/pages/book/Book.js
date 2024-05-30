

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
            presentation: true,
            realisation: true,
            competence: true,
            outils: true,
            education: true,
            experience: true,
            cv: true,
            componentPage: [
                , <Certificat />
                , <Outils />
                , <Presentation />
                , <Competence />
                , <Education />
                , <Experience />
                , <Realisation />
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
            texteFinal = "RAKOTOMANANA Andriniaina Fabien - 3eme Annnée en informatique. ";
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


