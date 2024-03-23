<template>
    <div class="row">
        <div class="book" ></div>
    </div>
</template>

<style>
    .book{
        height: 20vh;
        background-color: white;
        
    }
</style>

<script>
    export default{
        name: "Catalogue",
        data(){
            return {}
        },
        props: {
            book: {
                book_size: Number
            }
        }
    }
</script>