<template>
    <div>
        <div class="row">
            <form class="col m2 s12 ajouter-ville" @submit.prevent="addCityAction" >
                <div class="row">
                    <input placeholder="Ajoutez une ville" id="first_name" type="text" class="form-control" v-model="newCity" >
                    <button type="submit" class="btn blue" >Ajouter</button>                    
                </div>
            </form>
       </div>     
    </div>
</template>



<script>
    export default{
        data(){
            return{
                newCity: null
            }
        },

        methods:{
            addCityAction(){
                if(this.newCity){
                    this.$emit('cityaddevent', this.newCity)
                }
            }
        }
    }
</script>

<style scoped>
    .ajouter-ville{
        margin-top: 2em;
    }
</style>
    