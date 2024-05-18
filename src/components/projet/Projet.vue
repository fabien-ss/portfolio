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
        background-color: white;
        width: 80%;
        margin: auto;
        min-height: 190px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        .head {
            width: 100%;
            background-color: rgb(104, 88, 88);
            text-align: center;
            height: 30px;
        }
        .content{
            min-height: 100px;
            text-align: left;
            padding: 1%;
        }
        .footer{
            position: absolute;
            bottom: 0;
            height: 30px;
            width: 100%;
            text-align: center;
            background-color: rgb(104, 88, 88);
            .icon{
                width: 30px;
            }
            .icon:hover{
                cursor: pointer;
            }
        }
     
    }
    
    
</style>