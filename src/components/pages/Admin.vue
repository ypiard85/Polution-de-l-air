<template>
    <div>
        <h1>Admin</h1>
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

        <ul>
            <li v-for="city of citie" :key="city.id" > {{city.name}} <button @click="deleteCity(city)" class="btn btn-small red">Supprimer</button> </li>
        </ul>
    </div>
  </template>


  <script>
    import { CitiesService } from '@/services/City.service.js'

      export default{
        data(){
            return{
                citie: [],
                newCity: null,
            }
        },
        async mounted(){
            this.citie  = await CitiesService.getCity()
        },

        methods:{
          async  addCityAction(){
            const city =  { name: this.newCity, iqa: 0 }
            const idCity =  await CitiesService.addCity(city)
            city.id = idCity

            console.log(city)
            this.citie.push(city)
                
            },

            deleteCity(city){

                CitiesService.deleteCity(city)

                const index = this.citie.findIndex(cityItem => city.id === cityItem.id )
                this.citie.splice(index, 1)
            }
        }
      }
  </script>
  
  <style scoped>
      li{
          margin: 20px 0;
      }
  </style>