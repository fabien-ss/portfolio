<template>
    <div class="competence">
        <br>
        <div class="header" style="height: auto;">
            <h1>{{this.title}}</h1>
        
        <p>Alors mon côté fort c'est la logique metier (back-end), j'adore implémenter des algorithmes efficaces dans ce que je fais, mais je suis aussi apte à m'occuper de la présentation de l'application et aussi de la conception.</p>
        <p>Je suis particulièrement attiré par le <em>Machine learning</em> et tout ce qui concerne l'Intelligence artificielle.</p>
        </div>
        <p><span class="bold">Languages les mieux maitriser</span>:
            <ul>
                <li class="">
                    Côté back:
                    <ul>
                        <li>
                            c#: dotnet mvc, dotnet webapi
                        </li>
                        <li>java: spring-boot, java web application (jsp)</li>
                        <li>nodejs: nestjs, express</li>
                        <li>python: django web, django rest</li>
                    </ul>
                </li>
            
                <li class="">
                    Côté front:
                    <ul>
                        <li>VueJs</li>
                        <li>React native</li>
                        <li>Ionic</li>
                        <li>Angular</li>
                    </ul>
                </li>
            </ul>
        </p>
        <p>
            <span class="bold">Base de données:</span>
            <ul>
                <li >
                    Relationnelle:
                    <ul>
                        <li>Postgresql</li>
                        <li>SqlServer</li>
                        <li>MySql</li>
                        <li>Oracle</li>
                    </ul>
                </li>
                
            </ul>
        </p>
        <img src="/gif/dev.gif" style="transform: translate(150px, -250px);"/>
    </div>
</template>

<script>
    export default{
        name: "Competence",
        data(){
            return {
                title: "Compétences",
            }
        }
    }
</script>


<style>
    .competence{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: white;    
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bold{
        font-weight: bold;
    }
</style>