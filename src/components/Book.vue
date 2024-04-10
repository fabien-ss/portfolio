<template>
    <div class="livre" id="livre">
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/1.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/2.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/3.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/4.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/5.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/6.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/7.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/8.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/9.jpg">
        </div>
        <div class="contenu" @click="e => this.turn(e)">
            <img src="/1.jpg">
        </div>
    </div>

</template>

<script>
    export default{
        name: "Book",
        data(){
            return {}
        },
        mounted(){
            this.livre = document.getElementById("livre");
            this.scale = 0.01;
        },
        methods:{
            turn(event){
                console.log("event: ", event)
                var page1 = event.target.parentElement;
                page1.id = "";
                page1.classList.add("page");
                this.livre.appendChild(page1);
                this.scale += 0.01;
            },
            previous(event){
                console.log("event: ", event)
                var page1 = event.target.parentElement;
                page1.id = "";
                page1.classList.add("page-previous");
                this.livre.appendChild(page1);
            }
        }
    }
</script>

<style>
    img {
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
        transform: rotateY(180deg);
        animation: turnPage 1s linear;
        transform-origin: right;
        box-shadow: 0px 1px;
    }

    .page-previous {
        transform: rotateY(0deg);
        animation: turnPage-previous 4s linear;
        transform-origin: right;
        box-shadow: 0px 1px;
    }

    @keyframes turnPage {
        0%{
            transform: rotateY(0deg);   
            box-shadow: 0px 0px;
        }
        50%{
            transform: rotateY(90deg) skewY(15deg);    
            box-shadow: 0px 0px;
        }
        100%{
            transform: rotateY(180deg);     
            box-shadow: 0px 0px;
        }
    }

    @keyframes turnPage-previous {
        0%{
            transform: rotateY(180deg);   
            box-shadow: 0px 0px;
        }
        50%{
            transform: rotateY(90deg) skewY(15deg);    
            box-shadow: 0px 0px;
        }
        100%{
            transform: rotateY(0deg);     
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
    }
</style>