<template>

    <div class="init" id="bot">
        <button class="up" @click="showBot()">
            <img src="/language/banner.png" class="bt" width="100%" @mouseover="this.buttonData" height="100%">
        </button>
            <div class="boite_dialogue">
            <!--
                <wy-chat :uid="wyuidchat"></wy-chat>
            -->

                <div class="chat" id="chat">
                    <div class="left response">Hello</div>
                </div>
            <div class="boite_envoie">

                <input class="message" type="text" id="message" value="Hello!">
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
            buttonData(event){
              console.log("test")
                this.$emit("test", event)
            },
            send(){
                const message = document.getElementById("message").value;
                console.log(message)
                if(message !== ""){
                    let divSend = document.createElement("div");
                    divSend.classList.add("right");
                    divSend.classList.add("response");
                    divSend.innerHTML = message;
                    this.chat.appendChild(divSend)
                    this.askBrainShop(message)
                }
                document.getElementById("message").value = "";
            },
            askBrainShop(message){
                let apiUrl = "https://brain-shop-3.onrender.com"
                fetch(apiUrl+"/brainshop/"+message)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        let divSend = document.createElement("div");
                        divSend.classList.add("left");
                        divSend.classList.add("response");
                        divSend.innerHTML = data.message.cnt;
                        this.chat.appendChild(divSend)
                    })
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