<template>
    <div class="main">
        <div class="message">
            <h1 v-text="title"></h1>
            <p v-text="details"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Loading",
    mounted() {
        //this.revelerTexte()
    },
    data() {
        return {
            title: "",
            details: ""
        }
    },
    methods: {
        revelerTexte() {
            let texte = "Artificial intelligence is future";
            this.title = ""
            let index = 0;
            const interval = setInterval(() => {
                if (index < texte.length) {
                    this.title += texte.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        },
    }
}
</script>

<style>
.main {
    position: fixed;
    /* Fixed/sticky position */
    top: 0;
    /* Stay at the top */
    left: 0;
    /* Stay at the left */
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    background-image: url("/ia/futur.gif");
    background-size: cover;
    /* Cover the entire div */
    background-position: center;
    /* Center the background image */
    z-index: 9999;
    /* Ensure it's above other content */
    color: white;
    text-align: left;

}
</style>