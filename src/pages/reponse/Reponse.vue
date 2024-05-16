<template>
    <div class="reponse">
        <div class="prediction">
            <h1>PS</h1>
            <img v-if="PS.message" class="true" src="/public/ia/9.jpeg">
            <img v-if="!PS.message" class="wrong" src="/public/ia/8.jpeg">
        </div>
        <div class="prediction">
            <h1>ML</h1>
            <img v-if="ML.message" class="true" src="/public/ia/9.jpeg">
            <img v-if="!ML.message" class="wrong" src="/public/ia/8.jpeg">
        </div>
    </div>
</template>
<script>

export default {
    props: {
        ML: {
            type: Object,
            required: false
        },
        PS: {
            type: Object,
            required: false
        }
    },
    name: "Reponse",
    data() {
        return {
            name: "IA"
        }
    },
    created() {
    }
}
</script>
<style>
.reponse {
    display: inline-table;
    width: 50%;
    height: 50%;
    color: white;
    text-align: left;
    position: fixed;
    top: 50%; /* Positions the top edge of the div at the middle of the container */
    left: 50%; /* Positions the left edge of the div at the middle of the container */
    transform: translate(-50%, -100%)  rotateY(720deg);
     /* Moves the div up and left by half its own width and height, effectively centering it */
    display: flex;
    
    .prediction {text-align: center;
        width: 70%;
   
        img{
            width: 60%; 
            min-width: 324px;
            min-height: 324px;
        }
    }
    animation: flou 5s;
    transition: 0.2s;
    .prediction:hover{
        transform: scale(1.08);
    }
}

.true{
    box-shadow: 0 0 0px #ffff, 0 0 10px #ffff, 0 0 20px #ffff, 0 0 30px #ffff;
}

.wrong{
    box-shadow: 0 0 100px #110f0f, 0 0 200px #110f0f, 0 0 30px #110f0f, 0 0 40px #110f0f; 
}

@keyframes flou {

    0% {
        transform: translate(-50%, -500%) rotateY(0deg); 
    }

    80%{
        transform: translate(-50%, -100%) rotateY(720deg);
        filter: blur(20px);
    }
    100% {
        transform: translate(-50%, -100%) rotateY(720deg);
        
    }
}
</style>