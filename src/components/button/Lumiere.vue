<template>
        <div class="lumiere_container">
        <div class="lanterne" @click="lumiere" id="lumiere"
            style="display: flex; align-items: center; justify-content: center; gap: 10px; cursor: pointer;">
            <span v-if="!this.light" style="align-items: center; justify-content: center;">
                LIGHT -
                <svg class="slider" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                        style="fill: white;"></path>
                </svg>
            </span>
            <span v-if="this.light"
                style="color: black; font-weight: bold; align-items: center; justify-content: center;">
                LIGHT -
                <svg class="slider" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z">
                    </path>
                </svg>
            </span>
        </div>
    </div>
</template>
<script>
    export default{
        name: "Lumiere",
        mouted(){
            
            this.lumiere();
        }
        ,data(){ 
            return {}
        }
        , methods:{
            lumiere() {
                this.$emit("lumiere")
            },
        }
    }
</script>
<style>
.lanterne {
    width: 10%;
    height: 40px;
    border-radius: 50px;
    margin: auto;
    background-color: #0b0c0d;
    border: 0.5px white;
    color: white;
    font-size: small;
}

.lumiere {
    background-color: #ffff;
    box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
    animation: lumiere 2s linear;
    margin: auto;
}

@keyframes lumiere {

    0%,
    100% {
        box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff, 0 0 40px #ffff;
    }

    50% {
        box-shadow: 0 0 20px #ffff, 0 0 40px #ffff, 0 0 60px #ffff, 0 0 60px #ffff;
    }
}

</style>