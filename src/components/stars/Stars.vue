<template>
    <div class="etoile" id="etoile">
        <div class="addStars" @click="addStars" style="position: fixed; border: none" width=50px height=50px>
            <img src="/public/language/dbz-2_ulluss_jeux-video.png" width="100%"/>
        </div>
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
    border: 5px solid white;
  border-radius: 50px;
    width: 100%;
    height: 100%;
}
.addStars{
    width: 50px;
    height: 50px;
    background-color: none;
}

.addStars:hover{
    transform: scale(1.1);
}

@keyframes rotateStar {
    0%{
        transform: rotate(0deg);
        filter: grayscale(0%);
    }
    100%{
        transform: rotate(360deg)
    }
}

.etoile{
    transform: translate(0, -30px);
    position: absolute;
    width: 45%;
    max-height: 65px;
}
.etoile:hover{
    filter: grayscale(0%);
}
</style>
