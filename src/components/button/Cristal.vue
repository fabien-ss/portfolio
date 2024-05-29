<template>
    <button class="open">
        <img src="/language/banner.png" width="50px">
    </button>
</template>
<script>
export default {
    name: "Cristal",
    data(){
        return {
            image: "/language/banner.png"
        }
    },
    methods:{
       
    }
}
</script>

<style>
.open {
    color: #d18d64;
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
    border: none;
    position: fixed;
    cursor: pointer;
    top: 46.5%;
    right: 1%;
    img {
        border-radius: 50px;
    }
    img:active {    
        border-radius: 50px;
        transform: scale(1.05);
        background-color: white;   
        border: 1px solid #0087ff;
        
    }
    img:hover{
        filter: brightness(1.4);
    }

}


</style>