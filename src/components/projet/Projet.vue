<template>
    <div class="projet">
        <div class="head">
            {{ Titre }} 
        </div>
        <div class="content">{{ Description }}
            <ul>
                <li v-for="item in Languages" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="footer">
            <a @click.stop="{}" :href="Lien" target="_blank">
                <img class="icon" src="/language/github.svg">
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Projet",
        props: [ "Titre", "Languages", "Lien", "Description"],
        data(){
            return {}
        }
    }
</script>

<style>
    .projet{
        transition: 1s;
        background-color: transparent;
        width: 80%;
        margin: auto;
        min-height: 190px;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        border-bottom: 1px solid;
        .head {
            width: 100%;
            font-size: x-large;
            text-align: center;
            height: 40px;
            padding: 2%;
        }
        .content{
            min-height: 100px;
            text-align: center;
            padding: 1%;
        }
        .footer{
            position: absolute;
            bottom: 6px;
            height: 30px;
            width: 100%;
            text-align: center;
            
            .icon{
                width: 30px;
            }
            .icon:hover{
                cursor: pointer;
            }
        }
     
    }
    
    
</style>