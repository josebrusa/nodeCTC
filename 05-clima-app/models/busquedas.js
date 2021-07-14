const axios = require("axios");



class Busquedas {

    historial = [''];

    constructor(){

    }

    async ciudad(  lugar = '' ) {

        try {
            const resp = await axios.get( 'https://api.mapbox.com/geocoding/v5/mapbox.places/Cor.json?access_token=pk.eyJ1Ijoiam9zZWJydXNhIiwiYSI6ImNrcjQwa2w1dDJyNmMycHJ1aDVqbDdyZXYifQ.CjerDcFVaVbYX4qg-lL2sQ&limit=5&language=es' );
            console.log( resp.data );

            return [];
        } catch (error) {
            return [];
        }
    }
}


module.exports = Busquedas;