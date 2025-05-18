<template>
    <div class="experience" v-if="isActive">
        <br>
        <h1>Expériences</h1>
        <div class="experience-item">
            <h3>Développeur Easytech Madagascar - 17 Juillet 2024 - Maintenant</h3>
            <p>En tant que développeur je concois des applications utilisées par la production.</p>
            <ul>
                <li>Développeur fullstack C#</li>
                <li>DevOps</li>
            </ul>
        </div>
        <div class="experience-item">
            <h3>Participation WEBCUP 4-5 Mai 2024</h3>
            <p>
                Concours annuel de développement web, Océan Indien.
            </p>
            <ul>
                <li>Développeur fullstack</li>
                <li>Intégration des librairies TensorFlow</li>
                <li>Responsable du déploiement</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import MotherComponent from "../MotherComponent.vue";
export default {
    extends: MotherComponent,
    name: "Experience",
    data() {
        return {
            canLoad: true
        };
    },
    mounted(){
    }
};
</script>

<style>
.experience {
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
}

.experience h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.experience-item {
    margin-bottom: 30px;
    margin-left: 50px;
}

.experience-item h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.experience-item p {
    color: black;
    margin-bottom: 10px;
    font-size: 16px;
}

.experience-item ul {
    margin-left: 20px;
    color: black;
    padding-left: 0;

    li {
        list-style: none;
        margin-bottom: 5px;
        color: black;
    }
}
</style>
