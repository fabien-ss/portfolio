<template>
    <div class="competence area" v-if="isActive">
        <br>
        <ul class="circles" id="li_image">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class="header" style="height: auto;">
            <h1 style="color: white;">{{ this.title }}</h1>
            <p v-text="message" style="color: white;"></p>
        </div>
        <div class="body">
            <Language @image="showImage"/>
        </div>
    </div>
</template>

<script>
import Language from "../language/Language.vue"
import MotherComponent from "../MotherComponent.vue"

export default {
    extends: MotherComponent,
    name: "Competence",
    data() {
        return {
            title: "Compétences",
            message: "",
            canLoad: true
        }
    },
    components: {
        Language
    },
    methods:{
        showImage(image){
            let liste = document.getElementById("li_image");
            let childs = liste.childNodes;
            childs.forEach(element => {   
                console.log(element.style)
                element.style.backgroundImage = image;
            }); 
        }
    }
}
</script>

<style lang="scss">
.area {
    background: #bec0d8;
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    width: 100%;
    height: 100vh;
}

.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background-image: url("/language/banner.png") ;
        background-size: 100%;
        animation: animate 25s linear infinite;
        bottom: -150px;

        &:nth-child(1) {
            left: 25%;
            width: 80px;
            height: 80px;
            animation-delay: 0s;
        }

        &:nth-child(2) {
            left: 10%;
            width: 20px;
            height: 20px;
            animation-delay: 2s;
            animation-duration: 12s;
        }

        &:nth-child(3) {
            left: 70%;
            width: 20px;
            height: 20px;
            animation-delay: 4s;
        }

        &:nth-child(4) {
            left: 40%;
            width: 60px;
            height: 60px;
            animation-delay: 0s;
            animation-duration: 18s;
        }

        &:nth-child(5) {
            left: 65%;
            width: 20px;
            height: 20px;
            animation-delay: 0s;
        }

        &:nth-child(6) {
            left: 75%;
            width: 110px;
            height: 110px;
            animation-delay: 3s;
        }

        &:nth-child(7) {
            left: 35%;
            width: 150px;
            height: 150px;
            animation-delay: 7s;
        }

        &:nth-child(8) {
            left: 50%;
            width: 25px;
            height: 25px;
            animation-delay: 15s;
            animation-duration: 45s;
        }

        &:nth-child(9) {
            left: 20%;
            width: 15px;
            height: 15px;
            animation-delay: 2s;
            animation-duration: 35s;
        }

        &:nth-child(10) {
            left: 85%;
            width: 150px;
            height: 150px;
            animation-delay: 0s;
            animation-duration: 11s;
        }
    }
}

@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.competence {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: #2c2e4e;

    .body {
        width: 80%;
        display: flex;
        margin: auto;
    }
}

.bold {
    font-weight: bold;
}

.progress-bar {
    width: 70%;
    background-color: #031214;
}

.progress-bar-fill {
    height: 10px;
    background-color: #ffff;
}

.comp {
    display: block ruby;
    direction: rtl;
}

.r {
    direction: rtl;
}
</style>
