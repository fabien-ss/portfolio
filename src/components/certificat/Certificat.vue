<template>

    <div class="certificat" v-if="isActive">
        <br>
        <h1 style="color: white;">Certificats</h1>
        <img src="/certificat/cs.png" />
        <img src="/certificat/java.png" />
        <img src="/certificat/javascript.png" />
        <img src="https://cdn01.alison-static.net/parchment-previews/7009cb226d813d5b411966522f2bdbf0.jpg" alt="Java, Alison certificat"/>
        <img src="https://cdn01.alison-static.net/parchment-previews/c2342deac5311c805062f01c6dc86fc4.jpg" alt="Python, Alison certificat"/>
        <img src="/certificat/ratatype.jpg" alt="Dactylo, Ratatype" />
    </div>
</template>

<script>
    import MotherComponent from "../MotherComponent.vue";
export default{
    extends: MotherComponent,
    name: "Certificat",
    data(){
        return {
            canLoad: true
        }
    }
}
</script>

<style>
    .certificat{
        img {
            width: 80%;
            margin-top: 10px;
        }
    }
</style>