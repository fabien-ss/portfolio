<template>
    <div class="livre" id="livre">
        <div class="contenu" @click="this.turn" >
            <img src="/1.jpg" width="100.5%" height="100.5%">
        </div>
        <div class="contenu" @click="this.turn">
            <img class="image" src="/2.jpg">
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
            <img class="image" src="/3.jpg">
        </div>
        <div class="contenu" @click="this.turn">
            <img src="/1.jpg" width="100.5%" height="100.5%">
        </div>
    </div>

</template>

<script>
    export default{
        name: "Book",
        data(){
            return {
                isMoving: true,
                scale: "30deg"
            }
        },
        mounted(){
            this.livre = document.getElementById("livre");
            this.texte = "ATTENTION !"
        },
        methods:{
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
        width: 600px;
        height: 800px;
        position: absolute; 
        box-shadow: 0px 1px;
    }
    .page {
        transform: rotateY(180deg) ;
        animation: turnPage 1s linear;
        transform-origin: right;
    }

    .page-previous {
        transform: rotateY(0deg) ;
        animation: turnPage-previous 1s linear;
        transform-origin: right;
    }

    @keyframes turnPage {
        0%{
            transform: rotateY(0deg) ;   
            box-shadow: 0px 0px;
        }
        30%{
            transform: rotateY(90deg) skewY(30deg);    
            box-shadow: 0px 0px;
        }
        100%{
            transform: rotateY(180deg) ;     
            box-shadow: 0px 0px;
        }
    }

    @keyframes turnPage-previous {
        0%{
            transform: rotateY(180deg) ;   
            box-shadow: 0px 0px;
        }
        30%{
            transform: rotateY(90deg) skewY(30deg);    
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
        margin-top: auto;
        height: 800px;
        margin-top: 10vh;   
        animation: loadBook 1s;
    }

    @keyframes loadBook {
        0%{
        
            transform: translate(-1000px, 0);
        }
        100%{
            transform: translate(0, 0);
        }
    }
</style>