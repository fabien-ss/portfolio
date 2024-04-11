<template>
    <div class="realisation">
        <h1 style="color: white">TOP 3 PROJET</h1>
        <p id="description">1) Panneau solaire</p>
        <video width="80%" style="margin-top: 5px;" title="Dotnet projet" controls>
            <source src="/video.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p id="description">2) Artit: projet qualification hackaton interne</p>
        <video width="80%" style="margin-top: 5px;" title="Dotnet projet" controls>
            <source src="/video.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>
        <p id="description">3) Fifo-lifo</p>
        <video width="80%" style="margin-top: 5px;" title="Dotnet projet" controls>
            <source src="/video.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>

    </div>
</template>

<script>
    export default{
        name: "Realisation",
        data(){
            return {}
        }
    }
</script>

<style>
    #description{
        color: white;
    }
    .realisation{
        overflow-y: scroll
    }
</style>