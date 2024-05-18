<template>
    <div class="" style="gap: 1%;
    bottom: 0px;
    position: absolute;
  ">
        <div class="card" v-for="(svg, index) in svgData" :key="index">
            <div :class=svg.theme.cls>
                <img :src=svg.img style="width: 100%">
                <div class="banner">
                    <p>
                        {{ svg.prct }}
                    </p>
                </div>
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
            svgData: [ { img: "/public/language/dotnet.svg", prct: "Dotnet - 65%", dcr: "SI", theme: { p: "#1574B8", s : "dark", cls:"four head" }, display: 1 },
                       { img: "/public/language/java.svg", prct: "Java - 70%",dcr: "Administration système", theme: { p: "#E76F00", s: "#5382A1", cls:"one head" }, display: 2 },
                       { img: "/public/language/nest.svg", prct: "Nest - 50%",dcr: "API rest", theme: "red", theme: { p: "#FF586C", s: "#F7DF1E", cls:"nest head" }, display: 1 },
                       { img: "/public/language/python.svg", prct: "Python - 70%",dcr: "Machine learning", theme: { p: "#366D9B;", s: "#FFD545", cls:"three head" }, display: 1 },
                       { img: "/public/language/php.svg", prct: "PHP - 40%",dcr: "SI", theme: { p: "#6F8FC8", s: "dark", cls:"two head" }, display: 2 },
                       { img: "/public/language/vue.svg", prct: "Vue - 70%",dcr: "Front-end", theme: { p: "#42d392", s: "black", cls:"vue head" }, display: 1 },
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
        --bg-rd: white;
    }
    .card{
        transition: 1s;
        max-width: 100px;
        max-height: 100px;
        padding-top: 1%;
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
                transform: translate(0,210px);
            }
        }
        .head:hover{
            .banner{
                transition: 0.5s;
                background-color: black;
                width:100px;
                min-height: 100px;
                transform: translate(0,-105px);
                color: white;
                font-size: 20px;
                text-align: center;
                padding: 10%;
            }
        }
        @keyframes tourner {
            0%{

            }
            100%{

            }
        }
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
        margin-top: -70%;
    }
    .nest{
        background-image: url("/freepik/eclair.gif");
        margin-top: -300%;
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