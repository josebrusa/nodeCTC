const fs = require('fs')

const crearArchivo = async ( base = 5 ) => {
    console.log('======================')
    console.log('     Tabla del:', base);
    console.log('======================')

    let salida = '';
    try {
        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}
// const crearArchivo = ( base = 5 ) => {

//     console.log('======================')
//     console.log('     Tabla del:', base);
//     console.log('======================')
//     let salida = '';
//     return new Promise((resolve, reject) => {

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base*i}\n`;
//         }
//         console.log(salida);
//         // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//         //     if(err) throw err;
//         //     console.log(`tabla-${base}.txt creado`);
//         // })
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             resolve(`tabla-${base}.txt creado`);
//     })
// }



module.exports = {
    crearArchivo
};