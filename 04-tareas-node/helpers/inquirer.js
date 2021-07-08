const inquirer = require('inquirer')
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('========================='.white.bgGreen);
    console.log('* Seleccione una opcion *'.green);
    console.log('=========================\n'.white.bgGreen);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}


const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.cyan} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async ( message ) => {
    const question = [
        {
            type:'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0 ){
                    return 'Por favor ingresa un valor'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


const listadoTareasBorrar = async( tareas = []) => {

    const choices = tareas.map(( tarea, i ) => {
        const idx = `${i + 1}.`.cyan;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.cyan + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt( preguntas )
    return id;
}


const confirmar = async( message ) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt( question );
    return ok;
}


const mostrarListadoChecklist  = async( tareas = [] ) => {

    const choices = tareas.map(( tarea, i ) => {
        const idx = `${ i + 1}.`.cyan;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type:'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt( pregunta );
    return ids;
}








module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}