<template>
    <div >
        <div class="card col m4 s12" :class="color" >            
                <h3> {{ city.name }} </h3>
                <p v-if="!loading"> Qualité de l'air : {{ city.iqa }} </p>
                <div v-if="loading" class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-green-only">
                      <div class="circle-clipper left">
                        <div class="circle"></div>
                      </div>
                    </div>
                  </div>
                  <button @click="deleteCity" style="margin-bottom: 20px" class="btn red">Supprimé</button>
        </div>
    </div>
</template>



<script>

    import { AirService } from '@/services/Airservice.js'

    export default{
        props:{
            city:{
                type: Object,
                default: null
            }
        },

        data(){
            return{
                color: "",
                loading: false,
            }
        },


       async mounted(){  
           this.loading = true         
        const infoCity =  await AirService.getAireQualite(this.city.name)
        this.loading = false
        this.city.iqa = infoCity.aqi

            if(this.city.iqa <=30){
                this.color = 'pollution-faible'
            }else if(this.city.iqa > 30 && this.city.iqa < 50 ){
                this.color = 'pollution-medium'
            }else if(this.city.iqa > 50 ){
                this.color = 'pollution-forte'
            }
        },

        methods:{
            deleteCity(){
                this.$emit('deletecity', this.city)
            }
        }



    }
</script>

<style scoped>
.pollution-faible{
    background-color: rgba(0, 128, 0, 0.384);
}

.pollution-medium{
    background-color: rgba(255, 166, 0, 0.384);
}

.pollution-forte{
    background-color: rgba(255, 0, 0, 0.384);
}

</style>
