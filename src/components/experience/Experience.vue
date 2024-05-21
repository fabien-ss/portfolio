<template>
    <div class="experience" v-if="isActive">
        <br>
        <h1>Expérience</h1>
    </div>
</template>

<script>
    import MotherComponent from "../MotherComponent.vue";
export default{
    extends: MotherComponent,
    name: "Experience",
    data(){
        return {
            canLoad: true
        }
    }
}
</script>

<style>
    .experience{
        height: 100%;
        width: 100%;
        background-color: #997777;
    }
</style>