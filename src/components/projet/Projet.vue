<template>
    <div class="projet">
        <div class="head">{{ Titre }}</div>
        <div class="content">{{ Description }}</div>
            <ul>
                <li v-for="item in Languages" :key="item">
                    {{ item }}
                </li>
            </ul>
        <a @click.stop="{}" :href="Lien" target="_blank">{{ Lien }}</a>
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
        background-color: white;
        width: 40%;
        margin-top: 10px;
        .head {

            width: 100%;
            background-color: red;
        }
    }
    
    
</style>