// // function clasic
// setTimeout(function(){
//     console.log('Hola Mundo');
// }, 1000);

// // whit arrow function

// setTimeout(() => {
//     console.log('Hola Cocho');
// }, 1000);


const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Jose'
    }

    setTimeout(() =>{
        callback(user)
    }, 1500);
};

getUsuarioById(10, (usuario) => {
    console.log(usuario);
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});