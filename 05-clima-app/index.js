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

                        const termino = await leerInput( 'Ciudad: ' );
                        const lugares = await busquedas.ciudad( termino );
                        const id = await listarLugares( lugares );
                        console.log( { id } );

                        console.log('\nInformacion de la ciudad\n'.cyan);
                        console.log('Ciudad: ');
                        console.log('Latitud: ');
                        console.log('Long: ');
                        console.log('Temperatura: ');
                        console.log('Minima: ');
                        console.log('Maxima: ');
                    break;
                }

            if( opt !== 0 ) await pausa();

        } while ( opt !== 0 )
}



main();