<template>
    <div class="container">
        <div class="row">
            <div class="col-6"><Couverture /></div>
            <div class="col-6">
                <div class="row catalogue">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .catalogue{
        margin-left: 10%;
        margin-top: 8%;
        height: 90vh;
        background-image: url("/public/image/pexels-pixabay-162389.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: scroll;
    }

    .catalogue h1{
        color: white;
    }

</style>

<script>
    import Couverture from "../../components/couverture/Couverture.vue";
    import Catalogue from "@/components/couverture/Catalogue.vue";
    import Information from "./Information.vue";
    export default{
        name: "Accueil",
        components: {
            Couverture,
            Catalogue,
            Information,
        },
        data() {
            return {
            }
        }
    }
</script>