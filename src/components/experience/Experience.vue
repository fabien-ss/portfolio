<template>
  <div class="experience" v-if="isActive">
    <br>
    <h1>Expérience</h1>
    <div class="experience-item">
        <h3>WEBCUP 4-5 Mai 2024</h3>
        <p>
            Concours de développement où j'ai acquis de nouvelles compétences malgré les imprévus.
        </p>
        <ul>
            <li>Développeur back-end</li>
            <li>Intégration des librairies TensorFlow</li>
            <li>Responsable du déploiement</li>
        </ul>
    </div>
    <div class="experience-item">
        <h3>HIU Mars 2024</h3>
        <p>Première expérience de mise en situation dans un concours de développement.</p>
        <ul>
            <li>Développeur back-end</li>
            <li>Intégration d'API pour l'intelligence artificielle</li>
        </ul>
    </div>
    <div class="experience-item">
        <h3>Maintenance d'ordinateur de bureau</h3>
        <p>Installation de l'OS et maintenance matérielle.</p>
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
    }
};
</script>

<style>
.experience {
    height: 100%;
    color: white;
    background-color: #76ABAE;
}

.experience h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.experience-item {
    margin-bottom: 30px;
}

.experience-item h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.experience-item p {
    color: white;
    margin-bottom: 10px;
    font-size: 16px;
}

.experience-item ul {
    margin-left: 20px;
    padding-left: 0;
}

.experience-item ul li {
    list-style: none;
    margin-bottom: 5px;
    color: #fff;
}
</style>
