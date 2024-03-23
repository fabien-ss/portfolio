<template>
    <div class="container">
        <div class="row">
            <div class="col-6"><Couverture /></div>
            <div class="col-6">
                <div class="row catalogue">
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                    <div class="col-5">
                        <Catalogue />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
   .catalogue{
        margin-left: 10%;
        margin-top: 8%;
   }
   .catalogue div{
         margin-bottom: 2%;
         margin-right: 1%;
   }
</style>

<script>
    import Couverture from "../../components/couverture/Couverture.vue";
    import Catalogue from "@/components/couverture/Catalogue.vue";
    export default{
        name: "Accueil",
        components: {
            Couverture,
            Catalogue
        },
        data() {
            return {
            }
        }
    }
</script>