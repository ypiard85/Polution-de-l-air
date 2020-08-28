<template>
    <div class="conrainer">
        <div class="card-panel teal lighten-2"> {{message}} </div>

    </div>
</template>

<script>
    export default{
        props:{
            message:{
                type: String,
                default: null
            },
            clas:{
                type: String,
                default: null
            }
        }
    }
</script>

<style scoped>


</style>