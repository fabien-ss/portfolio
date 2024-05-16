<template>
    <Reponse v-if="reponse" :-m-l="ml" :-p-s="ps" />
    <div v-if="!loading" class="root border">
        <div class="growImage" id="image">
            <img srcset="/freepik/3.png" class="" src="/freepik/3.png" alt="Robot hand">
        </div>
        <div class="card">
            <div class="title">
                <h1 v-text="model"></h1>
            </div>
            <div class="content">
                <Input @cliqued="grow"/>
            </div>
            <div class="footer">
                <p v-text="tester">
                </p>
                <hr>
            </div>
        </div>
    </div>
    
</template>

<script src="./Prediction.js"></script>

<style src="./Prediction.scss"></style>