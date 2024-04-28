<template>
    <div class="shine" :style="shineStyle">
        <p>Hey</p>
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
