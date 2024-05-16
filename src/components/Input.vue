<template>
    <div class="root ">
        <div class="label">
            Language: <span v-if="!isValide" class="red">{{ languagevalue }}</span> <span v-if="isValide" class="white">{{ languagevalue }}</span>
        </div>
        <div class="input">
            <input type="text" v-bind:value="languagevalue" @keyup="setLanguageValue" class="language white" id="language"/>
        </div>
        <div class="submit">
            <button @click="clique()" class="button grow">
                <img class="img" src="/public/cursor/arrow.png" />
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Input",
        data() {
            return {
                label: "Language",
                type: "text",
                isCliqued: false,
                language: "d",
                model: "mx-1",
                languagevalue: null,
                isValide: false
            }
        },
        mounted(){
            this.language = document.getElementById("language")
        },
        methods:{
            setLanguageValue(event){
                const valeur = event.target.value;
                const splitted = valeur.split(",");
                if(splitted[splitted.length - 1].length > 7 || splitted.length > 10){
                    this.isValide = false;
                    return;
                } 
                const regex = /^(0|1|,)*$/;
                const match = regex.test(event.target.value);
                this.isValide = match;
                this.languagevalue = event.target.value;
                const routerBoolean = {
                    true: "white",
                    false: "red"
                }
                this.language.classList.remove(routerBoolean[!this.isValide]);
                this.language.classList.add(routerBoolean[this.isValide])
            }
            ,
            clique(){
                if(!this.isCliqued){
                    if(this.isValide){
                        this.$emit("cliqued", this.languagevalue)
                        this.language.classList.add("close");
                    }else{
                        this.$emit("wring")
                    }
                }else{
                    this.language.classList.remove("close");
                }
                this.isCliqued = !this.isCliqued
            }
        }
    }
</script>

<style>
    .white{
        color: white;
    }
    .red{
        color: red;
    }
    .root{      
        .label{
            color: gray;
            font-size: 19px;
            margin-bottom: 10px;
        }
        .input{
            min-width: 300px;
            .language{
                transition: 1s;
                min-height: 40px;
                font-size: 19px;
                width: 90%;
                border: none;
                border-left: 5px solid white;
                border-right: 5px solid white;
                background-color: transparent;
                margin-bottom: 10px;
                
            }
            .close{
                transition: 1s;
                min-height: 40px;
                font-size: 19px;
                border: none;
                border-left: 5px solid white;
                border-right: 5px solid white;
                background-color: transparent;
                color: white;
                margin-bottom: 10px;
                animation: jump 2s; 
            }
        }
        
        .submit{
            margin: auto;
            max-width: 50px;
            text-align: center;
            .button{
                border: none;
                border-radius: 50px;
                overflow: hidden;
                width: 50px;
                .img{
                    border: none;
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    transform: rotate(-90deg);
                    width: 100%;
                    height: 100%;
                    border-radius: 50px;
                }
            }
            .button:hover{
                cursor: pointer;
            }
        }

        .background{
            background-color: white
        }
    }

    @keyframes jump {
        0%{
            transform: translate(0, 0);
        }   
        50%{
            width: 0px;
            border-left: 10px solid white;
            border-right: 10px solid white;
            transform: translate(0, 0px);
        }
        100%{
            width: 0px;
            transform: translate(0, -1000px) ;
        }
    }
</style>