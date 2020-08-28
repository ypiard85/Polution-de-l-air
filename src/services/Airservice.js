import axios from 'axios'

const token = "7ebb34e88a23431b81ce8cbc598e773812ee2e8e"
const baseUrl = "http://api.waqi.info/feed"

export const AirService = {

   async getAireQualite(cityName){  
        const url = `${baseUrl}/${cityName}/?token=${token}`
        
        try {
           const result = await axios.get(url)
            return result.data.data;             
        } catch (error) {
           console.log('erreur :', error)
        }
        
        
    }
}