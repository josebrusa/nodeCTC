
const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busqeudas = new Busquedas();
    let opt;

        do {

            opt = await inquirerMenu();

                switch( opt ) {

                    case 1:

                        const lugar = await leerInput( 'Ciudad: ' );
                        await busqeudas.ciudad( lugar );



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