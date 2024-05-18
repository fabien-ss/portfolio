<template>
    <br>
    <div class="card-education">
        <div class="title">
            <p>{{annee}}, {{etablissement}} {{ lieu }}</p>
        </div>
        <div class="body">
            <p>    
                {{diplome}}
            </p>
        </div>
        <div class="footer">
            <p>
                <span>
                    Mention: {{mention}}
                    
                </span>
                <span class="diplome">
                    Diplome
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    export default{
        name: "EducationCard",
        props: ["etablissement", "diplome", "mention", "annee", "lieu"],
        data(){
            return {
            }
        }
    }
</script>

<style>
:root{
    --p: black;
}
.card-education{
    font-family: monospace;
    margin: auto;
    border-radius: 10px;
    margin-top: 2%;
    width: 95%;
    background-image: url("/freepik/paysage/4094511.jpg");
    background-size: cover;
    position: relative;
    color: white;
    div{
        text-align: left; 
    }
    .title{
        min-height: 50px;
    
        p{
            text-align: center;
            transform: translate(0, 50%);
            background-color: white;
            color: black;
            border-radius: 50px;
            margin: auto;
            width: 80%;
        }
    }
    .body{
        min-height: 100px;
        text-align: center;
    }
    .footer{
        height: 50px;
        .diplome{
            background-color: #fd7256;
            border-radius: 5px;
            margin-right: 5%;
            float: right;
            padding: 2%;
            color: black;
        }
        .diplome:hover{
            cursor: pointer;
        }
    }
}
</style>