
const saludar = () => 'Hola cocho'; // sin argumentos y con un return implicito
// es igual a la funcion de abajo
//            V
// const saludar = () => {
//     return 'hola cocho'
// }
//     o esta!
// function saludar(){
//     return 'Hola cocho'
// }

const sumar = (a, b) => a + b;  // con argumentos y con un return implicito
// es igual a la funcion de abajo
//            V
// const sumar = (a, b) => {
//     return a + b;
// }
//       o esta!
// function sumar(a, b) {
//     return a + b;
// }
console.log(sumar(5, 10));
console.log(saludar());