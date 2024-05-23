<template>
    <div class="shine" :style="shineStyle">
        <img src="/public/language/dbz-1_ulluss_jeux-video.png" width="100%">
    </div>
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
                transform: `translate(${this.x}px, ${this.y}px)`,
                animation: 'sintiller 2s linear infinite',
                transition: '1s'
            };
        }
    }
}
</script>

<style src="./Star.scss">
</style>
