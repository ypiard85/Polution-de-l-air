<template>
  <div id="app">
    <div class="container">
      <h4>Mesure de la qualité de l'air</h4>
      <div class="row" >
        <div v-for="city in citie" :key="city.index" >
          <City :city="city" @deletecity="deleteaction" />
        </div>
      </div>
      <CityForm @cityaddevent="addCityAction" />
      <Alerte v-if="showAlerte" :message="messageAlerte" />
    </div>
  </div>
</template>

<script>
  import City from '@/components/City'
  import CityForm from '@/components/CityForm'
  import Alerte from '@/components/Alerte'

  import { AirService } from '@/services/Airservice.js'

  export default{
    components:{
      City, CityForm, Alerte
    },
    data(){
      return{
        citie:[
          { name: 'Lyon', iqa: null },
          { name: 'Paris', iqa: null },
          { name: 'Séoul', iqa: null}
        ],

        messageAlerte: null,
        showAlerte: false,
        clas: '',
      }
    },

    methods:{
     async addCityAction(cityName){

        const dataService  = await AirService.getAireQualite(cityName)

        if(dataService !== "Unknown station"){
          this.citie.push({
          name: cityName,
          iqa: null
          })
          this.messageAlerte = "Ville ajouter avec succes"
          this.showAlerte = true
          
        }else{
          this.messageAlerte = "Ville non trouvé"
          this.showAlerte = true
        
        }
        
      },
      deleteaction(citie){
          const indexCity  = this.citie.findIndex(cityItem => cityItem.name === citie.name)
          this.citie.splice(indexCity, 1)
        }
    }
  }
</script>

<style lang="scss">
body{
  background-color: rgba(202, 201, 201, 0.219);
}

.success{
  background-color: green;
}

.danger{
  background-color: red;
}
</style>
