const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('========================='.white.bgGreen);
    console.log('* Seleccione una opcion *'.green);
    console.log('=========================\n'.white.bgGreen);

    const opt = await inquirer.prompt(preguntas);

    return opt;
}


module.exports = {
    inquirerMenu
}