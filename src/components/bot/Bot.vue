<template>
    <div class="init" id="bot">
        <button class="up" @click="showBot()">
            <img src="/public/cursor/arrow.png" width="30px" height="30px">
        </button>
        <div class="boite_dialogue ">
            <div class="chat scroll-bottom" id="chat">
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
            async askBrainShop(){
                const response = await fetch("http://api.brainshop.ai/get?bid=181719&key=OKSMtzCJeg3gKnqs&uid=123123&msg=hello");
                const message = await response.json();
            },
            async send(){
                const message = document.getElementById("message").value;
                console.log(message)
                if(message !== ""){
                    let divSend = document.createElement("div");
                    divSend.classList.add("right");
                    divSend.classList.add("response");
                    divSend.innerHTML = message;
                    this.chat.appendChild(divSend)

                    const botReponse = { "cnt": "Sorry, I'm under training revision to answer you as right as possible"};//await this.askBrainShop();
                    let divLeft = document.createElement("div");
                    divLeft.classList.add("left");
                    divLeft.classList.add("response");
                    divLeft.innerHTML = botReponse.cnt;
                    this.chat.appendChild(divLeft)
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