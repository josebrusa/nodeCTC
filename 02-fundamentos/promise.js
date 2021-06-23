const empleados = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Pablo'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
    {
        id: 3
    }
];


const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    return new Promise(( resolve, reject ) => {
        ( empleado )
        ? resolve( empleado )
        : reject(`No existe empleado con el id: ${ id }`)
        }
    );
}

const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id)?.salario;

    return new Promise(( resolve, reject ) => {
        ( salario )
        ? resolve( salario )
        : reject(`No existe salario del empleado ${nombre}`)
    });
}


// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err))
// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))
// promise Hell
// getEmpleado(id)
//     .then(empleado =>{
    //         getSalario(id)
    //             .then(salario => {
        //                 console.log('El empleado:', empleado, 'tiene un salario:', salario);
        //             })
        //             .catch(err => console.log(err))
        //     })
        //     .catch(err => console.log(err))
        
        const id = 2;
        let nombre;
        
        getEmpleado(id)
        .then( empleado => {
            nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch( err => console.log(err))