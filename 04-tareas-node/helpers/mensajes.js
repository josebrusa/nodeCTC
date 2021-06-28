require('colors');


const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('========================='.white.bgGreen);
        console.log('* Seleccione una opcion *'.green);
        console.log('=========================\n'.white.bgGreen);

        console.log(`${'1.'.cyan} Crear tarea`);
        console.log(`${'2.'.cyan} Listar tarea`);
        console.log(`${'3.'.cyan} Listar tareas completadas`);
        console.log(`${'4.'.cyan} Listar tareas pendientes`);
        console.log(`${'5.'.cyan} Completar tare(s)`);
        console.log(`${'6.'.cyan} Borrar tarea`);
        console.log(`${'0.'.cyan} Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccion una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}


const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresciona ${'ENTER'.cyan} para continuar`, (opt) => {
            readline.close();
            resolve(opt);
        });
    });

}


module.exports = {
    mostrarMenu,
    pausa
}