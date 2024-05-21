<template>
    <div v-if="canLoad" class="" style="gap: 1%;
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Language",
    data() {
        return {
            canLoad: true,
            svgData: [{ img: "/language/dotnet.svg", prct: "SI", dcr: "SI", theme: { p: "#1574B8", s: "dark", cls: "four head" }, display: 1 },
            { img: "/language/java.svg", prct: "Admin-Sys", dcr: "Administration système", theme: { p: "#E76F00", s: "#5382A1", cls: "one head" }, display: 2 },
            { img: "/language/nest.svg", prct: "API Rest", dcr: "API rest", theme: "red", theme: { p: "#FF586C", s: "#F7DF1E", cls: "nest head" }, display: 1 },
            { img: "/language/python.svg", prct: "IA-ML", dcr: "Machine learning", theme: { p: "#366D9B;", s: "#FFD545", cls: "three head" }, display: 1 },
            { img: "/language/php.svg", prct: "SI", dcr: "SI", theme: { p: "#6F8FC8", s: "dark", cls: "two head" }, display: 2 },
            { img: "/language/vue.svg", prct: "FRONT", dcr: "Front-end", theme: { p: "#42d392", s: "black", cls: "vue head" }, display: 1 },
            ]
        }
    },
    mounted() {
    },
    methods: {
        follow(event) {
            console.log(event.target)
            const nest = this.getParent(event.target);
            console.log("nest ", nest)
        },
        getParent(el) {
            if (el.classList.contains("nest")) return el;
            else return this.getParent(el);
        }
    }
}
</script>

<style>
:root {
    --bg: yellow;
    --bg-rd: rgb(248, 248, 234);
}

.card {
    transition: 1s;
    max-width: 100px;
    max-height: 100px;
    padding-top: 1%;
    float: left;
    margin-left: 3%;

    .body {
        display: none;
        color: var(--bg);

        .text-p {
            font-size: 15px;
        }
    }

    .head {
        cursor: pointer;
        background-color: var(--bg-rd);
        transition: 1s;
        overflow: hidden;
        max-height: 100px;
        border-radius: 50px;
        ;

        animation: bright 1s linear infinite;


        .banner {
            width: 100px;
            min-height: 100px;
            transform: translate(0, 210px);
            transition: 1s;

        }
    }

    .head:hover {
        .banner {
            transition: 500ms;
            background-color: black;
            width: 100px;
            min-height: 100px;
            transform: translate(0, -105px);
            color: white;
            font-size: 20px;
            text-align: center;
            padding: 2%;
        }
    }

    .body {
        text-align: center;
    }
}

@keyframes afficher {
    0% {
    }
    25%{
        transform: translate(0, -105px);
    }
    50%{

        transform: translate(0, -105px);
    }
    100% {
    }
}

@keyframes tourner {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}

.one {
    margin-top: -50%;
}

.two {
    margin-top: -100%;
}

.three {
    margin-top: -250%;
}

.four {
    margin-top: -250%;
}

.vue {
    margin-top: -70%;
}

.nest {
    background-image: url("/freepik/eclair.gif");
    margin-top: -300%;
}

@keyframes bright {
    0% {
        filter: brightness(1);
    }

    50% {
        filter: brightness(2);
        box-shadow: 0 0 5px var(--bg), 0 0 0px var(--bg), 0 0 0px var(--bg), 0 0 50px var(--bg);
    }

    100% {
        filter: brightness(1);
    }
}
</style>