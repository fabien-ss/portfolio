<template>
    <div class="etoile" id="etoile">
        <button @click="addStars" style="position: fixed">Add Star </button>
        <Star v-for="star in stars" :key="star.id" :x="star.x" :y="star.y" />
    </div> 
</template>

<script>
import Star from "./Star.vue"
export default {
    name: "Stars",
    data(){
        return {
            stars: []
        }
    },
    components:{
        Star
    },
    methods:{
        addStars(){
            this.stars.push({
                id: this.generateUniqueId(),
                x: this.getRandomX(),
                y: this.getRandomY()
            });
        },
        getRandomX(){
            return Math.floor(Math.random() * 600);
        },
        getRandomY(){
            return Math.floor(Math.random() * 30);
        },
        generateUniqueId() {
            return Date.now() + Math.random().toString(36).substr(2, 9);
        }
    }
}
</script>

<style>
.etoile{
    transform: translate(0, -30px);
    position: absolute;
    width: 100%;
    max-height: 65px;
}
</style>
