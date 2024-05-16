<template>
    <div class="loading">
        <div class="loading-box">
            <button class="btn-danger-sup" @click="isLoading()">READY</button>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Loading",
        data(){
            return {}
        },
        mounted(){

        },
        methods:{
            isLoading(){
                this.$emit("isLoading");
            }
        }
    }
</script>

<style>
    .loading{
        width: 100%;
        height: 100%;
        position: fixed;
        transform: translate(0, -90%);
        backdrop-filter: blur(5px);
        display:inline;
        transition: 0.2s;
        .loading-box{
            border-radius: 500%;
            margin: auto;
           /* animation: rotation 1s linear infinite;
            */text-align: center;
        }
        .btn-danger-sup {
            padding: 17px 40px;
            border-radius: 10px;
            border: 0;
            background-color: rgb(255, 56, 86);
            letter-spacing: 1.5px;
            font-size: 15px;
            transition: all 0.3s ease;
            box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
        }
        
        .btn-danger-sup:hover {
            box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
        }
        
        .btn-danger-sup:active {
            background-color: rgb(255, 56, 86);
            /*50, 168, 80*/
            box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
            transform: translateY(5px);
            transition: 200ms;
        }
    }
    
    @keyframes rotation{
        0%{
            transform: rotate(0deg);
            width: 50px;
            height: 50px;
        }
        50%{
            transform: rotate(180deg);
            width: 10px;
            height: 10px;
        }
        100%{
            transform: rotate(360deg);
            width: 50px;
            height: 50px;
        }
    }
</style>