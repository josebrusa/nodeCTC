const fs = require('fs')
const colors = require('colors')


const crearArchivo = async ( base = 5, listar ) => {
    let salida = '';
    try {
        for (let i = 0; i <= 10; i++) {
            salida += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
        }
        if(listar){
            console.log('======================'.green)
            console.log('    Tabla del:'.red, colors.blue(base));
            console.log('======================'.green)
            console.log(salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
};