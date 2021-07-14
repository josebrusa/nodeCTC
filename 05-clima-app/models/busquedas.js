const axios = require('axios');



class Busquedas {

    historial = ['Cordoba'];

    constructor(){

    }

    get paramsMapbox(){
        return {
            'access_token': 'pk.eyJ1Ijoiam9zZWJydXNhIiwiYSI6ImNrcjQwa2w1dDJyNmMycHJ1aDVqbDdyZXYifQ.CjerDcFVaVbYX4qg-lL2sQ',
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(  lugar = '' ) {

        try {

            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });
            const resp = await intance.get();
            console.log( resp.data );

            return []

        } catch (error) {
            return []
        }
    }
}



module.exports = Busquedas;



// https://api.mapbox.com/geocoding/v5/mapbox.places/Cor.json?access_token=pk.eyJ1Ijoiam9zZWJydXNhIiwiYSI6ImNrcjQwa2w1dDJyNmMycHJ1aDVqbDdyZXYifQ.CjerDcFVaVbYX4qg-lL2sQ&limit=5&language=es