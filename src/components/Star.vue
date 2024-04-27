<template>
    <div class="shine" :style="shineStyle"></div>
</template>

<script>
export default {
    name: "Star",
    props: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        }
    },
    computed: {
        shineStyle() {
            return {
                transform: `translate(-${this.x}px, ${this.y}px)`,
                animation: 'sintiller 2s linear infinite',
                transition: '1s'
            };
        }
    }
}
</script>

<style>
.shine{
    background-color: #ffff;
    animation: sintiller 2s linear infinite;
    margin: auto;
    width: 7px;
    height: 7px;
    border-radius: 50px;
}

@keyframes sintiller {
    0%{
        box-shadow: 0 0 10px #ffff, 0 0 50px #ffff, 0 0 10px #ffff, 0 0 10px #ffff;
    }
    100%{
        box-shadow: 0 0 40px yellow, 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow;
    }
}
</style>
