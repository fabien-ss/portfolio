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
                </div>
            <div class="boite_envoie">

                <input class="message" type="text" id="message" value="how are you?">
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
                call: 0
            }
        },
        mounted(){
            this.bot = document.getElementById("bot")
            this.chat = document.getElementById("chat")
            this.askBrainShop("hello")
            
        },
        methods:{
            buttonData(event){
                this.$emit("test", event)
            },
            send(){
                const message = document.getElementById("message").value;
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
                let innerText = "...";
                let divSend = document.createElement("div");
                divSend.classList.add("left");
                divSend.classList.add("response");
                if(this.call > 1){
                    divSend.innerHTML = "...";
                } else {
                    divSend.innerHTML = "Wainting for the server to start, please wait";
                }
                this.chat.appendChild(divSend);
                let apiUrl = "https://brain-shop-3.onrender.com";
                fetch(apiUrl+"/brainshop/"+message)
                    .then(response => response.json())
                    .then(data => {
                        divSend.innerHTML = "";
                        let index = 0;
                        const interval = setInterval(() => {
                        if (index < data.message.cnt.length) {
                            divSend.innerHTML += data.message.cnt.charAt(index);
                            index++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 25);
                    });
                this.call = this.call + 1;
            },
            showBot(){
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
