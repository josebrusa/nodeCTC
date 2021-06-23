console.log('Inicio de programa');

setTimeout( () => {
    console.log('primer timeOut');
}, 3000);

setTimeout(() => {
    console.log('segundo timeOut');
}, 0);

setTimeout(() =>{
    console.log('tercer timeOut');
}, 0);


console.log('Fin de programa');