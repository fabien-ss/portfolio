<template>

    <div class="init" id="bot">
        <button class="up" @click="showBot()">
            <img src="/language/banner.png" width="100%" height="100%">
        </button>
            <div class="boite_dialogue">
            <!--
                <wy-chat :uid="wyuidchat"></wy-chat>
            -->

                <div class="chat" id="chat">
                    <div class="left response">Hello</div>
                </div>
            <div class="boite_envoie">

                <input class="message" type="text" id="message" value="Who is Fabien?">
                <button class="submit" @click="send()">
                    Send
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Bot",
        data(){
            return {
                show: false,
            }
        },
        mounted(){
            this.bot = document.getElementById("bot")
            this.chat = document.getElementById("chat")
        },
        methods:{
            send(){
                const message = document.getElementById("message").value;
                console.log(message)
                if(message !== ""){
                    let divSend = document.createElement("div");
                    divSend.classList.add("right");
                    divSend.classList.add("response");
                    divSend.innerHTML = message;
                    this.chat.appendChild(divSend)
                }
                document.getElementById("message").value = "";
                
            },
            showBot(){
                console.log("show");
                if(!this.show){
                    this.bot.classList.add("bot");
                    this.bot.classList.remove("init");
                }else{
                    this.bot.classList.add("init")
                    this.bot.classList.remove("bot");
                }
                this.show = !this.show;
            }
        }
    }
</script>

<style src="./Bot.scss"></style>