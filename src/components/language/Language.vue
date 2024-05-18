<template>
    <div class="" style="gap: 1%;
    bottom: 0px;
    position: absolute;
  ">
        <div class="card" v-for="(svg, index) in svgData" :key="index">
            <div :class=svg.theme.cls>
                <img :src=svg.img style="width: 100%">
                <div class="banner">{{ svg.prct }}</div>
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
            svgData: [ { img: "/public/language/dotnet.svg", prct: "Connait", dcr: "SI", theme: { p: "#1574B8", s : "dark", cls:"four head" }, display: 1 },
                       { img: "/public/language/java.svg", prct: "Connait",dcr: "Administration système", theme: { p: "#E76F00", s: "#5382A1", cls:"one head" }, display: 2 },
                       { img: "/public/language/nest.svg", prct: "Connait",dcr: "API rest", theme: "red", theme: { p: "#FF586C", s: "#F7DF1E", cls:"nest head" }, display: 1 },
                       { img: "/public/language/python.svg", prct: "Connait",dcr: "Machine learning", theme: { p: "#366D9B;", s: "#FFD545", cls:"three head" }, display: 1 },
                       { img: "/public/language/php.svg", prct: "Connait",dcr: "SI", theme: { p: "#6F8FC8", s: "dark", cls:"two head" }, display: 2 },
                       { img: "/public/language/vue.svg", prct: "Connait",dcr: "Front-end", theme: { p: "#42d392", s: "black", cls:"vue head" }, display: 1 },
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
    :root{
        --bg: yellow;
        --bg-rd: rgb(219, 219, 98);
    }
    .card{
        transition: 1s;
        max-width: 100px;
        max-height: 100px;
        padding-top: 10%;
        float: left;
        margin-left: 3%;
        .body {
            display: none;
            color: var(--bg);
            .text-p{
                font-size: 15px;
            }
        }
        .head{
            cursor: pointer;
            background-color:var(--bg-rd);
            transition: 1s;
            overflow: hidden;
            max-height: 100px;
            border-radius: 50px;
            animation: clignotant 1s linear infinite;

            .banner{
                background-color: rgb(38, 79, 16);
                width:100px;
                min-height: 100px;
                transform: translate(0,-210px);
            }
        }
        /*.head:hover{
            .banner{
                background-color: rgb(38, 79, 16);
                width:100px;
                min-height: 100px;
                transform: translate(0,-105px);
                color: #e5e55b;
            }
        }*/
        .body{
            text-align: center;
        }
    }

    .one{
        margin-top: -50%;
    }
    .two{
        margin-top: -100%;
    }
    .three{
        margin-top: -250%;
    }
    .four{
        margin-top: -250%;
    }
    .vue{   
        margin-top: -150%;
    }
    .nest{
        background-image: url("/freepik/eclair.gif");
        margin-top: -150%;
    }

    @keyframes instable{
        0%{
            transform: translate(-50px, -50px);
        }
        25%{
            transform: translate(-5px, 0px);
        }
        50%{
            transform: translate(-100px, -5px);
        }
        75%{
            transform: translate(-10px, 0px);
        }
        100%{
            transform: translate(-5px, -5px);   
        }
    }
    @keyframes clignotant{
        0%{
            box-shadow: 0 0 0px var(--bg), 0 0 10px var(--bg), 0 0 0px var(--bg), 0 0 10px var(--bg);
        }
        50%{
            box-shadow: 0 0 5px var(--bg), 0 0 0px var(--bg), 0 0 0px var(--bg), 0 0 5px var(--bg);
        }
        100%{
            box-shadow: 0 0 0px var(--bg), 0 0 10px var(--bg), 0 0 0px var(--bg), 0 0 10px var(--bg);
        }
    }
</style>