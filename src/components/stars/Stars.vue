<template>
    <div class="etoile" id="etoile">
        <button class="addStars" @click="addStars" style="position: fixed">
            <img src="/star/star.png" />
        </button>
        <Star v-for="star in stars" :key="star.id" :x="star.x" :y="star.y" />
    </div> 
</template>

<script>
import Star from "./Star.vue"
export default {
    name: "Stars",
    data(){
        return {
            stars: [],
            hasClicked : false
        }
    },
    components:{
        Star
    },
    methods:{
        addStars(){
            console.log("le ", this.stars.length)
         //   if(this.stars.length <= 5){
          //      this.$emit("addStarts")
                this.stars.push({
                    id: this.generateUniqueId(),
                    x: this.getRandomX(),
                    y: this.getRandomY()
                });
         //   }else{
          //      this.stars = []
           //     this.$emit("addStarts")
           // }
            this.hasClicked = true;
        },
        getRandomX(){
            return Math.floor(Math.random() * 1200);
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

.addStars img{
    max-height : 30px;
    max-width: 30px;   
}
.addStars{
    background-color: transparent;
    border-radius: 50px;
    animation: rotateStar 2s linear infinite;
}

.addStars:hover{
    background-color: yellow
}

@keyframes rotateStar {
    0%{
        transform: rotate(0deg);
        background-color: yellow;
        filter: grayscale(0%);
    }
    100%{
        transform: rotate(360deg)
    }
}

.etoile{
    filter: grayscale(100%);
    transform: translate(0, -30px);
    position: absolute;
    width: 45%;
    max-height: 65px;
}
.etoile:hover{
    filter: grayscale(0%);
}
</style>
