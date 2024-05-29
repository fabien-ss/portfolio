<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            
        }
    },
    name: "MotherComponent",
    methods: {
        mouseOver(event){
            this.$emit("test")
        }
    }
}
</script>