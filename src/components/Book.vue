<template>
    <div class="lumiere_container" style="width: 100%; text-align: center; display: flex;">
        <div class="lanterne" @click="lumiere" id="lumiere">Cliquez pour éclaircir!</div>
    </div>
    <div class="livre" id="livre">
        <div class="contenu" @click="this.turn" >
            <img src="/1.jpg" width="100.5%" height="100.5%">
        </div>
        <div class="contenu" @click="this.turn" style="background-color: wheat; ">
            <h1>MBA RECRUTEO FA TT</h1>
        </div>
        <div class="contenu" @click="this.turn">
            <!--
                <img class="image" src="/2.jpg">
            -->
            <video width="90%" height="40%" controls>
                <source src="/s.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>

            <video width="90%" height="40%" controls>
                <source src="/video.webm" type="video/webm">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="contenu" @click="this.turn">
            <img class="image" src="/6.jpg">
        </div>
        <div class="contenu" @click="this.turn">
            <img class="image" src="/4.jpg">
        </div>
        <div class="contenu" @click="this.turn">
            <img class="image" src="/5.jpg">
        </div>
        <div class="contenu" @click="this.turn">    
            <img class="image" src="/7.jpg">
        </div>
        <div class="contenu" @click="this.turn">
            <BlankPage />
        </div>
        <div class="contenu" @click="this.turn">
            <Realisation />
        </div>
        <div class="contenu" @click="this.turn">
            <Outils />
        </div>
        <div class="contenu" @click="this.turn">
            <Competence :title="OK"/>
        </div>
        <div class="contenu" @click="this.turn">
            <Presentation />
        </div>

        <div class="contenu" @click="this.turn">
            <Couverture />
        </div>
    </div>

</template>

<script>
    import BlankPage from "./BlankPage.vue";
    import Presentation from "./Presentation.vue";
    import Competence from "./Competence.vue";
    import Outils from "./Outils.vue";
    import Realisation from "./Realisation.vue";
    import Couverture from "./Couverture.vue";
    export default{
        name: "Book",
        data(){
            return {
                isMoving: true,
                scale: "30deg",
                light: false
            }
        },
        mounted(){
            this.livre = document.getElementById("livre");
            this.texte = "ATTENTION !",
            this.lampe = document.getElementById("lumiere");
            this.livre = document.getElementById("livre");
        },
        components:{
            BlankPage,
            Presentation,
            Competence,
            Outils,
            Realisation,
            Couverture
        },
        methods:{
            lumiere(){
                this.light = !this.light;
                if(this.light){
                    this.livre.style.filter = "brightness(0.8)";
                    this.lampe.classList.add("lumiere");
                }else{
                    this.livre.style.filter = "brightness(0.5)";
                    this.lampe.classList.remove("lumiere");
                }
            },
            turn(event){
                console.log("event: ", event)
                var page1 = this.getContenu(event.target);
                page1.removeEventListener("click", this.turn);
                page1.addEventListener("click", this.previous);
                page1.classList.add("page");
                page1.classList.remove("page-previous");
                this.livre.appendChild(page1);
            },
            previous(event){
                console.log("event: ", event)
                var page1 = this.getContenu(event.target);
                page1.removeEventListener("click", this.previous);
                page1.addEventListener("click", this.turn);
                page1.classList.add("page-previous");
                page1.classList.remove("page");
                this.livre.appendChild(page1);
            },
            getContenu(element){
                if(element.classList.contains("contenu")) return element;
                return this.getContenu(element.parentElement);
            }
            ,
            afficherTexteProgressivement(texte, element, index = 0) {
                if (index < texte.length) {
                    element.innerHTML += texte.charAt(index);
                    setTimeout(function() {
                        afficherTexteProgressivement(texte, element, index + 1);
                    }, 100); // Ajustez le délai entre chaque caractère ici
                }
            }
        }
    }
</script>

<style>
    .image {
        width: 100%;
        height: 100%;
    }
    .contenu{
        border-left: 1px solid black;
        width: 600px;
        height: 800px;
        position: absolute; 
        box-shadow: 0px 1px;
        background-color: rgb(58, 49, 49);
        text-align: center;
        overflow: scroll;
    }
    .page {
        transform: rotateY(180deg) ;
        animation: turnPage 1s linear;
        transform-origin: left;
    }

    .page-previous {
        transform: rotateY(0deg) ;
        animation: turnPage-previous 1s linear;
        transform-origin: left;
    }

    @keyframes turnPage {
        0%{
            transform: rotateY(0deg) ;   
            box-shadow: 0px 0px;
            opacity: 100%;
        }
        30%{
            transform: rotateY(90deg) skewY(-30deg);    
            box-shadow: 0px 0px;
            opacity: 100%;
        }
        100%{
            transform: rotateY(180deg) ;     
            box-shadow: 0px 0px;
            opacity: 100%;
        }
    }

    @keyframes turnPage-previous {
        0%{
            transform: rotateY(180deg) ;   
            box-shadow: 0px 0px;
        }
        30%{
            transform: rotateY(90deg) skewY(-30deg);    
            box-shadow: 0px 0px;
        }
        100%{
            transform: rotateY(0deg) ;     
            box-shadow: 0px 0px;
        }
    }

    .livre{
        position: relative;
        width: 1200px;
        margin: auto;
        height: 800px;
        margin-top: 5vh;   
        filter: brightness(0.5);
        transform: translate(600px, 0);
    }

    @keyframes loadBook {
        0%{
        
            transform: translate(-1000px, 0);
        }
        100%{
            transform: translate(0, 0);
        }
    }
    .lanterne{
        width: 200px;
        height: 20px;
        border-radius: 20%; 
        margin: auto;
        background-color: black;
        border: 0.5px solid white;
        color: white;
        font-size: small;
    }
    .lanterne:hover{
        cursor: pointer;
    }
    .lumiere {
        background-color: #ffff;
        box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
        animation: lumiere 2s linear;
        margin: auto;
    }

    @keyframes lumiere {
        0%, 100% {
            box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
        }
        50% {
            box-shadow: 0 0 20px #ffff, 0 0 40px #ffff, 0 0 60px #ffff, 0 0 60px #ffff;
        }
    }
</style>