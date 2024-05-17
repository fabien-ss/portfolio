<template>
    <div class="" style="width:100%; gap: 1%;">
        <div class="card" v-for="(svg, index) in svgData" :key="index">
            <div class="head" >
                <img :src=svg.img alt="SVG Image" style="width: 100%">
            </div>
            <div class="body">
                <p class="text-p" v-text=svg.dcr></p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "Language",
    data(){
        return {
            svgData: [ { img: "/public/language/dotnet.svg", dcr: "Connait, Système d'information", theme: { p: "#1574B8", s : "dark" } },
                       { img: "/public/language/java.svg", dcr: "Connait, Administration système", theme: { p: "#E76F00", s: "#5382A1" } },
                       { img: "/public/language/nest.svg", dcr: "Connait, API rest", theme: "red", theme: { p: "#FF586C", s: "#F7DF1E" } },
                       { img: "/public/language/python.svg", dcr: "Connait, Modele d'apprentissage", theme: { p: "#366D9B;", s: "#FFD545"} },
                       { img: "/public/language/php.svg", dcr: "Connait, Système d'information", theme: { p: "#6F8FC8", s: "dark" } },
                       { img: "/public/language/vue.svg", dcr: "Connait, Flexibilité", theme: { p: "#42d392", s: "black" } }]
        }
    }
}
</script>

<style>
    .card{
        position: absolute;
        transition: 1s;
        width: 30%;
        height: 30%;
        padding-top: 2%;
        float: left;
        margin-left: 3%;
        .body {
            display: none;
            .text-p{
                font-size: 15px;
            }
        }
        .head{
            transition: 1s;
            border-radius: 500px;
            border: 1px solid black;
            overflow: hidden;
        }
    }
   
</style>