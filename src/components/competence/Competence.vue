<template>
    <div class="competence" v-if="isActive">
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
    }
}
</script>


<style>
.competence {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-image: url("/freepik/shenron.png");
    background-color: #f4ddcd;

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