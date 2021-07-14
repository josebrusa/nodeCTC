const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'¿Que deseas hacer?',
        choices:[
            {
                value: 1,
                name:`${ '1.'.cyan } Buscar ciudad`
            },
            {
                value: 2,
                name:`${ '2.'.cyan } Historial`
            },
            {
                value: 3,
                name:`${ '3.'.cyan } Salir`
            }
        ]
    }
];


const inquirerMenu = async () => {
    console.clear();

    console.log('============================'.bgGreen);
    console.log(' * Selecciones una opcion *'.green);
    console.log('============================\n'.bgGreen);

    const { opcion } = await inquirer.prompt( preguntas );
    return opcion;

}


const pausa = async () => {
    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presiona ${'enter'.cyan} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt( question );
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return 'Por favor ingresa un valor'
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt( question );
    return desc;
}



module.exports = {
    leerInput,
    inquirerMenu,
    pausa
}