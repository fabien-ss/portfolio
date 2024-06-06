<template>
    <div class="outils" v-if="isActive">
        <br>
        <div class="header">
            <h1>Outils</h1>
            <p>
            <ul>
                <li><span class="bold">Développement</span>
                    <ul>
                        <li>
                            Système d'exploitation
                            <ul>
                                <li>Linux</li>
                                <li>Windows</li>
                            </ul>
                        </li>
                        <li>PHIND</li>
                        <li>Rider</li>
                        <li>NetBeans</li>
                        <li>IntelliJ</li>
                        <li>Visual studio code</li>
                        <li>DataGrip</li>
                        <li>Pencil</li>
                        <li>Looping</li>
                    </ul>
                </li>
                <li>
                    <span class="bold">Autre</span>
                    <ul>
                        <li>Figma</li>
                        <li>Canva</li>
                        <li>Adobe XD</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobre Premier Pro</li>
                    </ul>
                </li>
            </ul>
            </p>
        </div>
    </div>
</template>

<script>
import MotherParent from "./MotherComponent.vue";
export default {
    extends: MotherParent,
    name: "Outils",
    data() {
        return {}
    }
}
</script>

<style>
.outils {
    width: 100%;
    height: 100%;
    /*
        background-image: url("/freepik/tech.jpeg");*/
    background-color: #76ABAE;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    color: black;

    height: 100%;
    color: black;
    background-color: #76ABAE;
    width: 100%;
    height: 100%;
    background: rgb(235, 233, 233);
    background-image: linear-gradient(90deg,
            transparent 50px,
            #ffb4b8 50px,
            #ffb4b8 52px,
            transparent 52px),
        linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
    background-size: 100% 30px;
    .header{
        margin-left: 50px;
    }
}

.bold {
    font-weight: bold;
}

li {
    text-align: left;
}
</style>