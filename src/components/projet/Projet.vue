<template>
    <div class="projet">
        <p id="description">{{ Titre }}</p>
        <p id="">{{ Description }}</p>
        <p>
            <ul>
                <li v-for="item in Languages" :key="item">
                    {{ item }}
                </li>
            </ul>
        </p>
        
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
        width: 80%;
        margin: auto;
        padding: 1%;
        margin-top: 10px;
        border-radius: 10px;
        text-align: center;
    }
</style>