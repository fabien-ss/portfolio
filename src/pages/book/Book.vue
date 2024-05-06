<template> 
    <div class="lumiere_container">
        <div class="lanterne" @click="lumiere" id="lumiere"
            style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <span v-if="!this.light" style="align-items: center; justify-content: center;">
                LIGHT -
                <svg class="slider" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                        style="fill: white;"></path>
                </svg>
            </span>
            <span v-if="this.light"
                style="color: black; font-weight: bold; align-items: center; justify-content: center;">
                LIGHT -
                <svg class="slider" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z">
                    </path>
                </svg>
            </span>
        </div>
    </div>
<!--

    <Stars @addStarts="l()"/>
-->  
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

</template>
<script src="./Book.ts">

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