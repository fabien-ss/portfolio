<template>
    <div class="lumiere_container" >
       
        <div class="lanterne" @click="lumiere" id="lumiere" style="display: flex; align-items: center; justify-content: center; gap: 10px;"> 
            <span v-if="!this.light" style="align-items: center; justify-content: center;">
                    LIGHT -
                    <svg
                    class="slider"
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                    style="fill: white;" ></path>
                </svg>
            </span>   
            <span v-if="this.light" style="color: black; font-weight: bold; align-items: center; justify-content: center;">
                    LIGHT -
                    <svg
                        class="slider"
                        viewBox="0 0 512 512"
                        height="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                    ></path>
                </svg>
            </span>    
        </div>
    
    </div>
    <div class="livre" id="livre">
        <div class="description">
            <p v-text="texte" style=""></p>
        </div>

        <div class="contenu" @click="this.turn">
            <Education />
        </div>

        <div class="contenu" @click="this.turn">
            <Education />
        </div>

        <div class="contenu" @click="this.turn">
            <Education />
        </div>
        <div class="contenu" @click="this.turn">
            <Education />
        </div>
        <div class="contenu" @click="this.turn">
            <Education />
        </div>
      
        <div class="contenu" @click="this.turn">    
            <BlankPage/>
        </div>
        
        <div class="contenu" @click="this.turn">
            <Outils />
        </div>
        <div class="contenu" @click="this.turn">
            <Competence :title="OK"/>
        </div>
        <div class="contenu" @click="this.turn">
            <Realisation />
        </div>
        <div class="contenu" @click="this.turn">
            <Presentation />
        </div>
        <div class="contenu" @click="this.turn">
            <Couverture />
        </div>
    </div>
    <video class="hide" id="myCam" ></video>

    <canvas class="hide" id="videoCanvas"></canvas>
    <canvas class="hide" id="blendCanvas"></canvas>
</template>

<script>
    import BlankPage from "./BlankPage.vue";
    import Presentation from "./Presentation.vue";
    import Competence from "./Competence.vue";
    import Outils from "./Outils.vue";
    import Realisation from "./Realisation.vue";
    import Couverture from "./Couverture.vue";
    import Education from "./Education.vue";
    export default{
        name: "Book",
        data(){
            return {
                isMoving: false,
                scale: "30deg",
                light: false,
                texte: "Hello I'm an IT Student from Madagascar, I invite you to open the book.",   
            }
        },
        mounted(){
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
          //  this.debut();
          //  this.fin()
            this.initCamera()
            
        },
        components:{
            BlankPage,
            Presentation,
            Competence,
            Outils,
            Realisation,
            Couverture,
            Education
        },
        methods:{
            initCamera(){
                this.video = document.getElementById("myCam");
                this.videoCanvas = document.getElementById("videoCanvas");
                this.videoContext = videoCanvas.getContext("2d");

                this.blendCanvas = document.getElementById("blendCanvas");
                this.blendContext = blendCanvas.getContext("2d");

                this.lastImageData = null;

                // Instantiate navigator
                navigator.mediaDevices.getUserMedia({video: true})
                    .then(this.gotStream)
                    .catch(this.noStream);

                    console.log("got stream ", navigator)
            },
            sendForm(event){
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
            turnPerPage(){
                let page1 = this.contenus[this.contenus.length - 1 - this.index];//.classList.add("BlankPage");
                page1.classList.add("page");
                page1.classList.remove("page-previous");
                this.index ++;
            },
            checkHotspots() {
                // getImageData obtient les pixels d'un element
                const blendedData = this.blendContext.getImageData(0, 0, 50, 50);
                let sum = 0;
                const countPixels = blendedData.data.length / 4;
                for (let i = 0; i < countPixels; i++) {
                    sum += (blendedData.data[i*4] + blendedData.data[i*4 + 1] + blendedData.data[i*4 + 2]); 
                }

                const average = Math.round(sum / (3 * countPixels));  
                
                if(average >= 10/* && average < 7*/){
                    if(this.firstPage === true){
                        this.lumiere();
                    }else{
                        this.lumiere();
                    }
                //this.turnPerPage()
                /*
                this.firstPage = !this.firstPage;
                console.log(this.firstPage)
                
                if(this.firstPage === true){
                    this.lumiere();
                }else{
                    this.lumiere();
                }
                */
                } else {
                }
            },
            checkDiff(currentImage, lastImage, output) {
                for (let i = 0; i < currentImage.length; i += 4) {    
                    const average1 = (currentImage[i] + currentImage[i+1] + currentImage[i+2]) / 3;
                    const average2 = (lastImage[i] + lastImage[i+1] + lastImage[i+2]) / 3;
                    const diff = average1 - average2;
                    output[i] = diff;
                    output[i+1] = diff;
                    output[i+2] = diff;
                    output[i+3] = 0xff;
                }
            },
            captureFrame() {
                if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
                    this.videoContext.drawImage(this.video, 0, 0, this.videoCanvas.width, this.videoCanvas.height);
                    const currentImageData = this.videoContext.getImageData(0, 0, this.videoCanvas.width, this.videoCanvas.height);
                    //console.log(currentImageData.data.length);
                    if (this.lastImageData) {
                        const output = this.blendContext.createImageData(this.videoCanvas.width, this.videoCanvas.height);
                        this.checkDiff(currentImageData.data, this.lastImageData.data, output.data);
                        this.blendContext.putImageData(output, 0, 0);
                        this.checkHotspots();
                    }
                    this.lastImageData = currentImageData;
                }
                requestAnimationFrame(this.captureFrame);
            },
            gotStream(stream) {
                this.video.srcObject = stream;
                this.video.play();
                this.captureFrame();
            },
            noStream(error) {
                console.log("error ", error);
                alert(error);
            }
            ,
            debut(){
                this.canTurn = false;
                this.firstPage = !this.firstPage;
                let index = 0;

                const interval = setInterval(() => {
                    if (index < this.contenus.length) {
                        if(this.firstPage == true) {
                            this.contenus[this.contenus.length -index - 1].classList.remove("page-previous");
                            this.contenus[this.contenus.length -index - 1].classList.add("page");
                        }else{
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
            lumiere(){
                this.light = !this.light;
                if(this.light){
                    this.livre.style.filter = "brightness(1)";
                    this.lampe.classList.add("lumiere");
                }else{
                    this.livre.style.filter = "brightness(0.5)";
                    this.lampe.classList.remove("lumiere");
                }
            },
            turn(event){
                var page1 = this.getContenu(event.target);
                console.log(page1.classList.contains("page"))
                page1.removeEventListener("click", this.turn);
                console.log("turning");
                page1.addEventListener("click", this.previous);
                page1.classList.add("page");
                page1.classList.remove("page-previous");
                this.livre.appendChild(page1);
            },
            previous(event){
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
    .hide{
        display: none;
    }
    .description{
        width: 50%;
        position: absolute;
        transform: translate(-100%, 0);
        height: 800px;
        color: white;
        text-align: left;
        align-items: center;
        justify-content: center;
    }

    .description p{
        margin-right: 15%;
    }

    .next {
        position: fixed;
        transform: translate(266px, -32px);
    }
    :root{
        --page-background-color: white;;
    }
    .image {
        width: 100%;
        height: 100%;
    }
    .contenu{
        width: 50%;
        height: 100%;
        position: absolute; 
        box-shadow: 0px 1px;
        background-color: rgb(255, 255, 255);
        text-align: center;
        overflow: scroll;
        border-left: 1px solid #c9cfcf;
        border-radius: 0px 15px 15px 0px;
    }
    .contenu:hover{
        cursor: pointer;
    }
    .page {
        transform: rotateY(180deg) ;
        animation: turnPage 0.5s linear;
        transform-origin: left;
        background-color: var(--page-background-color);
        background-repeat: no-repeat;
        background-size: cover;
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
            background-color: var(--page-background-color);
            background-repeat: no-repeat;
            background-size: cover;
        }
        100%{
            transform: rotateY(180deg) ;     
            box-shadow: 0px 0px;
            background-color: var(--page-background-color);
            background-repeat: no-repeat;
            background-size: cover;
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
        31%{
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .page-previous {
        transform: rotateY(0deg) ;
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
        31%{
            opacity: 100%;
        }
        100% {
            opacity: 100%;
        }
    }


    @keyframes turnPage-previous {
        0%{
            transform: rotateY(180deg) ;   
            box-shadow: 0px 0px;
            background-color: var(--page-background-color);
            background-repeat: no-repeat;
            background-size: cover;
        }
        30%{
            transform: rotateY(90deg) skewY(-30deg);    
            box-shadow: 0px 0px;

            background-color: var(--page-background-color);
            background-repeat: no-repeat;
            background-size: cover;
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
        margin-top: 4vh;   
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
        width: 10%;
        height: 40px;
        border-radius: 50px; 
        margin: auto;
        background-color: #0b0c0d;
        border: 0.5px white;
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
        transform: translate(0 ,950px);
    }

    #arrow{
        transform: translate(560px, -2px);
        animation: arrowUp 0.5s infinite;
    }

    @keyframes arrowUp {
        0%{
            transform: translate(551px, -50px);
        }
        100%{
            transform: translate(551px, -2px);
        }
    }

</style>