<style>
    .presentation{
        margin-top: 30%;
    }
    .presentation h1{
        line-height: 2.5;
        font-family: 'Courier New', Courier, monospace;
        color: white;
    }
    .cover {
        margin-top: 8%;
        height: 90vh;
        box-shadow: 5px 5px 5px rgb(206, 203, 203);
    }
    .black{
        background: linear-gradient(to top, black 40%, gray 80%, white);
    }
    .white{
        background-color: white;
        text-align: center;
    }
    .white h1{
        letter-spacing: 0.4em;
        margin-top: 50%;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
    .lines{
        margin-top: 50%;
        display: flex;
    }
    .lines hr{
        border: solid 1px white;
    }
    .line1{
        width: 20%;
    }
    .line2{
        width: 10%;
        transform: rotate(-50deg)
    }
    .line3{
        width: 10%;
    }
    .footer1{
        color: white;
        margin-top: 10%;
    }

    .content1 {
        margin-left: 10%;
    }

    @keyframes moveToCenter {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(0deg)
            /*transform: rotate(360deg)*/   
        }
    }

    .animate-move {
    }

</style>

<template>
    <div class="row cover">
        <div class="col-9 black">
            <div class="content1">
                <div class="presentation">
                    <h1>Andriniaina Fabien</h1>
                    
                    <h1>RAKOTOMANANA    </h1>
                </div>
                <div class="lines">
                    <hr class="line1">
                    <hr class="line2">
                    <hr class="line3">
                </div>
                <div class="footer1">
                    SELECTED WORK 
                    <br>
                    2020-2024
                </div>
            </div>
        </div>
        <div class="col-3 white">
            <h1>
                2020 
                2024
            </h1>
        </div>
    </div>
</template> 

<script>
    export default{
        name: "Couverture",
        data(){
            return {}
        },
        mounted(){
            document.getElementById('myDiv').addEventListener('click', function() {
                this.classList.add('animate-move');
            });
        }
    }
</script>

