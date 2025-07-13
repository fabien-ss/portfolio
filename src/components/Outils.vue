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
                                <li>Linux (WSL, MicroK8s)</li>
                                <li>Windows (Docker Desktop)</li>
                            </ul>
                        </li>
                        <li>Visual Studio</li>
                        <li>Visual Studio Code</li>
                        <li>JetBrains Rider</li>
                        <li>NetBeans</li>
                        <li>IntelliJ IDEA</li>
                        <li>DataGrip</li>
                        <li>Git</li>
                        <li>Bash / Shell (sh, dash)</li>
                        <li>Docker</li>
                        <li>Docker Compose</li>
                        <li>Kubernetes (kubeadm, MicroK8s)</li>
                        <li>Helm</li>
                        <li>Systemd</li>
                        <li>Nginx</li>
                        <li>CI/CD (GitHub Actions)</li>
                        <li>Apache Kafka</li>
                        <li>Kafka Connect</li>
                        <li>Apache Flink</li>
                        <li>StarRocks</li>
                        <li>PostgreSQL</li>
                        <li>Redis</li>
                        <li>SQLite (ancien usage)</li>
                        <li>Vue.js</li>
                        <li>Flask</li>
                        <li>ASP.NET Core</li>
                        <li>Entity Framework</li>
                    </ul>
                </li>
                <li>
                    <span class="bold">Autre</span>
                    <ul>
                        <li>Figma</li>
                        <li>Canva</li>
                        <li>Adobe XD</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Premiere Pro</li>
                        <li>Pencil</li>
                        <li>Looping</li>
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
    background-color: #76ABAE;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    color: black;

    background: rgb(235, 233, 233);
    background-image: linear-gradient(90deg,
            transparent 50px,
            #ffb4b8 50px,
            #ffb4b8 52px,
            transparent 52px),
        linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
    background-size: 100% 30px;
}
.header {
    margin-left: 50px;
}

.bold {
    font-weight: bold;
}

li {
    text-align: left;
}
</style>
