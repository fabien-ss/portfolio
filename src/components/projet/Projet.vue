<template>
    <div class="projet" >
        <div class="image-container">
            <div class="image">
                <img src="/freepik/ordi.jpeg" width=100% height=100%/>
            </div>
        </div>
        <div class="description-projet">
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
        width: 80%;
        margin: auto;
        min-height: 190px;
        overflow: hidden;
        border-radius: 5px;
        display: flex;
        box-shadow: 1px 1px 1px 1px #d9d8d8;
        .image-container{
            width: 35%;
            position: relative;
           n-height: 190px;
            .image{
                width: 100%;
            }
        }
        .description-projet{
            width: 65%;
            .head {
                width: 100%;
                font-size: larger;
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
                height: 30px;
                float: center;
                font-size: 11px;
                .icon{
                    width: 30px;
                }
                .icon:hover{
                    cursor: pointer;
                }
            }
            .footer:hover{
                transform: scale(1.1)
            }
        }
    }

</style>