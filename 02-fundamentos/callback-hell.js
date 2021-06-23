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

// const getEmpleado = (id) => {
//     const empleado = empleados.find((e) => {
//         return e.id === id
//     })
//     return empleado;
// }

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado){
        callback(null, empleado);
    }else{
        callback(`El empleado ${id} no existe`)
    }
}
const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    if(salario){
        callback(null, salario);
    } else {
        callback(`No existe salario del id ${id}`)
    }
}
// console.log(getEmpleado(6));
const id = 2;

getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if(err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    })
});

// my function
// const getSalario = (id, callback) => {
//     const salario = salarios.find(s => s.id === id)
//     if(salario){
//         callback(null, salario);
//     }else{
//         callback(`El empleado ${id} no tiene salario`)
//     }
// }

// getSalario(3, (err, salario) => {
//     if(err){
//         console.log('ERROR!');
//         return console.log(err);
//     }
//     console.log('El empleado tiene salario');
//     console.log(salario);
// })



