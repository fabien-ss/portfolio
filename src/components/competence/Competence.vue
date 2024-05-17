<template>
    <div class="competence" >
        <br>
        <div class="header" style="height: auto;">
            <h1 style="color: white;">{{ this.title }}</h1>

            <p v-text="message"></p>
        </div>
        <div class="body">
            <Language />
        </div>
<!--
        <img src="/gif/dev.gif" style="transform: translate(0, -20%)">
        -->
    </div>
</template>

<script>
import Language from "../language/Language.vue"
export default {
    name: "Competence",
    data() {
        return {
            title: "Compétences",
            message: ""
        }
    },
    components: {
        Language
    }
}
</script>


<style>
.competence {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: black;
    background-image: url("/freepik/shenron.png");
    background-repeat: no-repeat;
    background-size: cover;

    .body{
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

.progress-bar-fill  {
    height: 10px;
    background-color: #ffff;
}
.comp{
    display: block ruby;
    direction: rtl;
}
.r{
    direction: rtl;
}
</style>