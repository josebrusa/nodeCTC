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
        salrio: 2000
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
    const empleado = empleados.find(e => e.id === id)
    if (empleado){
        callback(null, empleado);
    }else{
        callback(`El empleado ${id} no existe`)
    }
}

// console.log(getEmpleado(6));
getEmpleado(13, (err, empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
});