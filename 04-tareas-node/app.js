require('colors')
const { inquirerMenu, pause } = require('./helpers/inquirer');


console.clear()



// const main = async () => {
//     console.log('hola mundo');

//     let opt = '';
//     do {
//         opt = await inquirerMenu();
//         console.log({ opt });
//         if(opt !== '0') await pausa();
//     } while ( opt !== '0' );
// }

const main = async () => {
    let opt = '';
    do {
        opt = await inquirerMenu();
        await pause();
    } while( opt !== '0');
}

main();