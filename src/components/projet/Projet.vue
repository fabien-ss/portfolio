<template>
    <div class="projet" >
        <div class="image-container">
            <div class="image">

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
                    <img src="/language/github.svg" width=80% height=100%/>
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

    @keyframes inOut{
        0%{
            tranform: scale(041.1)
        }
        100%{
            tranform: scale(15.1)
        }
    }
    .projet{
        color: white;
        margin-top: 20px;
        transition: 1s;
        width: 85%;
        height: 80%;
        margin: auto;
        overflow: hidden;
        border-radius: 5px;
        display: flex;
        box-shadow: 0 0 1px 0 #bdbcbc;
        transform: scale(1.1);
        .image-container{
            width: 35%;
            position: relative;
            background-color: #31363f;
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
                height: 29%;
                padding: 2%;
            }
            .content{
                text-align: center;
                padding: 1%;
                height: 44%;
                    font-size: 12px;

            }
            .footer{
                height: 30px;
                float: center;
                font-size: 11px;
                height: 15%;
                .icon{
                    float: rigth;
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