<template>
    <div class="competence">
        <br>
        <div class="header" style="height: auto;">
            <h1>{{ this.title }}</h1>

            <p>Alors je suis plus à l'aise quand il s'agit metier, j'adore implémenter des algorithmes efficaces dans ce
                que je fais, mais je suis aussi apte à m'occuper de la présentation de l'application et aussi de la
                conception.</p>
            <p>Je suis particulièrement attiré par le <em>Machine learning</em> et tout ce qui concerne l'Intelligence
                artificielle.</p>
        </div>
        <p>
            <span class="bold">Languages les mieux maitriser</span>:
        <ul>
            <li class="">
                Côté back:
                <ul>
                    <li class="comp">
                        Java
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 25%;"></div>
                        </div>
                    </li>
                    <li class="comp">
                        Dotnet
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 30%;"></div>
                        </div>
                    </li>
                    <li class="comp">
                        Node
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 50%;"></div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="">
                Côté front:
                <ul>
                    <li class="comp">VueJs
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 40%;"></div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        </p>

        <p>
            <span class="bold">Base de données:</span>
        <ul>
            <li class="">
                Relationnelle:
                <ul>
                    <li class="comp">Postgresql
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 20%;"></div>
                        </div>
                    </li>
                    <li class="comp">MySql
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 40%;"></div>
                        </div>
                    </li>
                    <li class="comp">SqlServer
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 50%;"></div>
                        </div>
                    </li>
                    <li class="comp">Oracle
                        <div class="progress-bar">
                            <div class="progress-bar-fill r" style="width: 60%;"></div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        </p>
        <img src="/gif/dev.gif" style="transform: translate(0, -20%)">
    </div>
</template>

<script>
export default {
    name: "Competence",
    data() {
        return {
            title: "Compétences",
        }
    }
}
</script>


<style>
.competence {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
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