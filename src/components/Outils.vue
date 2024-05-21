<template>
    <div class="outils" v-if="isActive">
        <br>
        <div class="header">
            <h1>Outils</h1>
            <p>
                <ul>
                    <li ><span class="bold">Développement</span> 
                        <ul>
                            <li>
                                Système d'exploitation
                                <ul>
                                    <li>Linux</li>
                                    <li>Windows</li>
                                </ul>
                            </li>
                            <li>Pour m'assister dans mes recherches j'utilise souvent PHIND (chat bot mais plus adapter pour le developpement) pour m'aider</li>
                            <li>Avec C#: Rider de JetBrains</li>
                            <li>Sur Java: IntelliJ ou netBeans mais le plus souvent sur Visual studio code</li>
                            <li>JS: visual studio code</li>
                            <li>python: visual studio code</li>
                            <li>DataGrip</li>
                            <li>Pencil: dessin d'écran</li>
                            <li>Looping: pour la création de modele mcd, uml, ...</li>
                        </ul>
                    </li>
                    <li>
                        <span class="bold">Autre</span>
                        <ul>
                            <li>Adobe XD pour les maquettes</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobre premier</li>
                        </ul>
                    </li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
    import MotherParent from "./MotherComponent.vue";
    export default{
        extends: MotherParent,
        name: "Outils",
        data(){
            return {}
        }
    }
</script>

<style>
    .outils{
        width: 100%;
        height: 100%;
        /*
        background-image: url("/freepik/tech.jpeg");*/
        background-color: #76ABAE;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: left;
        color: white;
    }
    .bold{
        font-weight: bold;
    }
    li{
        text-align: left;
    }
</style>