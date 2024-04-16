<template>
        <p id="description">{{ Titre }}</p>
        <p>
            <ul>
                <li v-for="item in Languages" :key="item">
                    {{ item }}
                </li>
            </ul>
        </p>    
        <a href="{{ Lien }}">{{ Lien }}</a>
</template>

<script>
    export default{
        name: "Projet",
        props: [ "Titre", "Languages", "Lien" ],
        data(){
            return {}
        }
    }
</script>

<style>
    #description{
    }
</style>