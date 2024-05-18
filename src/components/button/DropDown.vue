<template>
    <!--

        <div class="sommaire">
            <select value="Page" @change="chercher">
                <option value="1">Projets</option>
                <option value="2">Projets</option>
                <option value="3">Projets</option>
                <option value="4">Projets</option>
            <option value="5">Projets</option>
            <option value="6">Projets</option>
            <option value="7">Projets</option>
        </select>
    </div>
-->
</template>
<script>
export default{
    methods:{
        chercher(event){
            console.log(event.target.value)
            this.$emit("chercher", event.target.value)
        }
    }
}
</script>
<style>
    .sommaire{
        width: 10%;
        float: right;
        select{
            width: 100%;
            min-height: 40px;
            border: none;
            font-size: 20px;
        }
    }
</style>