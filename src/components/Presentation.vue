<template>
    <div class="presentation">
        <div class="header">
            <br>
            <h1>{{this.title}}</h1>
            <br>
            <p style="font-style: italic;">
                Etudiant en informatique, actuellement en 3eme année.
            </p>
            <p>
                Bonjour, je suis Fabien, je vous remerci de m'accorder un peu de votre temps pour en savoir un peu plus sur moi et mes compétences.
            </p>
            <p id="intro">
              
            </p>
        </div>
        <div class="contact">
            <p><span class="bold">Numéro: </span>+261 34 75 197 55</p>
            <p><span class="bold">Email: </span>fabrakoto0987@gmail.com</p>
            <p><span class="bold">LiknDin: </span><a href=#>http://www.linkdIn.com</a></p>
            <p><span class="bold">Facebook: </span><a href="#">http://www.facebook.com</a> </p>
        </div>
    </div>
</template>

<style>
    .contact{
        margin-bottom: 10px;
    }

    .contact p{
        font-size: small;
        margin-left: 40px;
    }


    .header{
        margin-left: 20px;
        height: 80%;
        text-align: center;
    }

    .presentation{
        width: 100%;
        height: 100%;
        background-color: #fff;
        background-size: contain;
    }
</style>

<script>
    export default{
        name: "Presentation",
        mounted(){
            var p = document.getElementById("intro");
            let i = this.contenu.length;
            for(let j = 0; j < i; j ++){
                p.innerHTML += this.contenu[j];
            }
        }
        ,
        data(){
            return {
                title: "RAKOTOMANANA Andriniaina Fabien",
                contenu: `
                    Pour une bref introduction, à l'obtention de mon baccalauréat en 2022 je ne pensais pas du tout attérrir dans le
                    monde où je suis aujourd'hui. Mes idées n'étaient pas claires, on m'a suggéré alors l'informatique à 
                    l'IT University. Après quelques cours, je réalise que c'était un bon choix.
                `
            }
        }
    }
</script>
