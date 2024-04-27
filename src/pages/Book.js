
import BlankPage from "./BlankPage.vue";
import Presentation from "../components/Presentation.vue";
import Competence from "../components/Competence.vue";
import Outils from "../components/Outils.vue";
import Realisation from "../components/Realisation.vue";
import Couverture from "../components/Couverture.vue";
import Education from "../components/Education.vue";
import Cv from "../components/cv/Cv.vue";
import Stars from "@/components/Stars.vue";
export default {
    name: "Book",
    data() {
        return {
            stars: 0,
            isMoving: false,
            scale: "30deg",
            light: false,
            texte: "Hello I'm an IT Student from Madagascar, I invite you to open the book.",
        }
    },
    mounted() {
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
        Stars
    },
    methods: {
        
        addStars(){
            this.stars ++;
        },
        sendForm(event) {
            event.preventDefault();
            console.log("form sent ", event.target[0].value);
            const response = fetch("http://localhost:3000/ia-helper/answer-question", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: event.target[0].value
                })
            })
            console.log(response)
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
            console.log(page1.classList.contains("page"))
            console.log("turning");
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

