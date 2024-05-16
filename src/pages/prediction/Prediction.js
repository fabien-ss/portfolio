
import Input from "../../components/Input.vue"
import Loading from "../loading/Loading.vue"
import Reponse from "../reponse/Reponse.vue"
export default{
    name: "Prediction",
    data(){
        return {
            model: "Fa-rCer",
            tester: "Test your language here!",
            loading: true,
            reponse: false,
            ml: {
                message: true
            },
            ps: {
                message: true
            }
        }
    },
    components:{
        Input,
        Loading,
        Reponse
    },
    mounted() {
        this.revelerTexte();
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 2000); 
    },
    methods:{
        revelerTexte() {
            console.log("m")
            let texte = "Our model is working on it! .  . . . .";
            this.tester = ""    
            let index = 0;
            const interval = setInterval(() => {
                if (index < texte.length) {
                    this.tester += texte.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 25);
        },
        async grow(language){
            const reponse = await fetch(`http://localhost:3000/is_code/${language}`);
            const data = await reponse.json();
            console.log(data)
            this.ml = data.python
            this.ps = data.ps
            this.revelerTexte()
            this.reponse = !this.reponse;
        }
    },
    mounted(){
        this.image = document.getElementById("image")
    }
}
