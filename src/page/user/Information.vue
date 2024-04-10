<style>
    .book-div{
        margin-top: 3%;
        height: 90vh;
        overflow: scroll;
    }
    .left-div{
        height: 90%;
        writing-mode: vertical-rl;
        background-color: white;
        letter-spacing: 2em;
        word-spacing: 100%;
        text-align: center;
    }
    .middle-div{
        line-break:inherit;
        background: linear-gradient(to right, black , rgb(50, 50, 50) , rgb(0, 0, 0) );
        color: white;
        overflow: scroll;
        padding-left: 10%;
    }
    #name{
        margin-top: 15%
    }
    #contact-1{
        margin-top: 50%;
    }
    .information-group-1{
        margin-top: 50%;
        line-height: 1em;
    }
</style>

<template>
    <div class="container">
        <div class="row book-div">
            <div class="col-6">
                <div class="row">
                    <div class="col-2 left-div">
                        <h1 style="">THANK YOU</h1>
                    </div>
                    <div class="col-10 middle-div">
                        <h1 id="contact-1">CONTACT</h1>
                        <div class="information-group-1">
                            <p>RAKOTOMANANA Andriniaina Fabien</p>
                            <p>Ivato K1 309 Antananarivo, Madagascar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-10 middle-div">
                        <h1 id="name">RAKOTOMANANA Andriniaina Fabien</h1>
                        <h1 id="name">Web developper</h1>
                    </div>
                    <div class="col-2 left-div">
                        <h1>Lorem ipsum</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Information",
        data(){
            return {}
        }
    }
</script>