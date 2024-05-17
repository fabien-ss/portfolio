<template>
    <div class="" style="width:100%; gap: 1%;">
        <div class="card" v-for="(svg, index) in svgData" :key="index">
            <div :class=svg.theme.cls>
                <img :src=svg.img style="width: 100%">
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
            svgData: [ { img: "/public/language/dotnet.svg", dcr: "Connait, Système d'information", theme: { p: "#1574B8", s : "dark", cls:"four head" }, display: 1 },
                       { img: "/public/language/java.svg", dcr: "Connait, Administration système", theme: { p: "#E76F00", s: "#5382A1", cls:"one head" }, display: 2 },
                       { img: "/public/language/nest.svg", dcr: "Connait, API rest", theme: "red", theme: { p: "#FF586C", s: "#F7DF1E", cls:"nest head" }, display: 1 },
                       { img: "/public/language/python.svg", dcr: "Connait, Modele d'apprentissage", theme: { p: "#366D9B;", s: "#FFD545", cls:"three head" }, display: 1 },
                       { img: "/public/language/php.svg", dcr: "Connait, Système d'information", theme: { p: "#6F8FC8", s: "dark", cls:"two head" }, display: 2 },
                       { img: "/public/language/vue.svg", dcr: "Connait, Flexibilité", theme: { p: "#42d392", s: "black", cls:"vue head" }, display: 1 },
                       ]
        }
    },
    mounted(){
    },
    methods:{
        follow(event){
            console.log(event.target)
            const nest = this.getParent(event.target);
            console.log("nest ", nest)
        },
        getParent(el){
            if(el.classList.contains("nest")) return el;
            else return this.getParent(el);
        }
    }
}
</script>

<style>
    .card{
        display: absolute;
        transition: 1s;
        width: 30%;
        height: 30%;
        padding-top: 10%;
        float: left;
        margin-left: 3%;
        .body {
            display: none;
            color: white;
            .text-p{
                font-size: 15px;
            }
        }
        .head{
            background-color: #fff;
            transition: 1s;
            border-radius: 500px;
            overflow: hidden;
            animation: clignotant 1s linear infinite;
        }
    }

    .one{
        margin-top: 50%;
    }
    .two{
        margin-top: -1%;
        transform: translate(-0px, 0%);
    }
    .three{
        margin-top: 15%;
    }
    .four{
        margin-top: -30%;
    }
    .nest{

    }
    .one:hover{

    }
    @keyframes clignotant{
        0%{
            box-shadow: 0 0 10px #e5e55b, 0 0 10px #e5e55b, 0 0 0px #e5e55b, 0 0 10px #e5e55b;
        }
        50%{
            box-shadow: 0 0 5px #e5e55b, 0 0 0px #e5e55b, 0 0 1px #e5e55b, 0 0 20px #e5e55b;
        }
        100%{
            box-shadow: 0 0 10px #e5e55b, 0 0 10px #e5e55b, 0 0 0px #e5e55b, 0 0 10px #e5e55b;
        }
    }
</style>