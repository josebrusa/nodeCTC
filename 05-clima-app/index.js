require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {

    const busquedas = new Busquedas();
    let opt;

        do {

            opt = await inquirerMenu();

                switch( opt ) {

                    case 1:
                        // Mostrar mensaje
                        const termino = await leerInput( 'Ciudad: ' );
                        // Buscar  los lugares
                        const lugares = await busquedas.ciudad( termino );
                        // Seleccionar lugar
                        const id = await listarLugares( lugares );
                        const lugarSelect = lugares.find( l => l.id === id );

                        // Clima

                        console.log('\nInformacion de la ciudad\n'.cyan);
                        console.log('Ciudad: ', lugarSelect.nombre );
                        console.log('Lat: ', lugarSelect.lat );
                        console.log('Lng: ', lugarSelect.lng );
                        console.log('Temperatura: ');
                        console.log('Minima: ');
                        console.log('Maxima: ');
                    break;
                }

            if( opt !== 0 ) await pausa();

        } while ( opt !== 0 )
}



main();