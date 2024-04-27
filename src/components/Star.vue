<template>
    <div class="shine" :style="{ transform: `translate(-${x}px, ${y}px)` }"></div>
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
        box-shadow: 0 0 100px #ffff, 0 0 500px #ffff, 0 0 100px #ffff, 0 0 100px #ffff;
    }
    100%{
        box-shadow: 0 0 40px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
    }
}
</style>
