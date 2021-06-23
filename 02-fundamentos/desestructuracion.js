const deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    // edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
// console.log(deadpool.getNombre());

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;


    // const { nombre, apellido, poder, edad = 0 } = deadpool
    
    // console.log(nombre, apellido, poder, edad);

// function imprimeHero(hero){
    
//     const { nombre, apellido, poder, edad = 0 } = hero
    
//     console.log(nombre, apellido, poder, edad);

// }
// imprimeHero(deadpool);

function imprimeHero({ nombre, apellido, poder, edad = 0 }){

    console.log(nombre, apellido, poder, edad);

}
// imprimeHero(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// const [h1, h2, h3] = heroes;
// console.log(h1, h2, h3);

const [, , h3] = heroes;
console.log(h3);