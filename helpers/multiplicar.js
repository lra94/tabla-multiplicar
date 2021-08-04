const fs = require('fs')
const app = require('../app')
const colors = require('colors')
const yargs = require('yargs')


const crearArchivo = async(tabla, listar, hasta) => {
    try {
            
//return new Promise( (resolve, reject)=>{
    console.log('======================='.green.bold)
    console.log(`    TABLA DEL: ${tabla} hasta ${hasta}`.green.bold)
    console.log('======================='.green.bold)
    let contador = hasta
    let salida, consola = ''

    for (let i = 1; i <= contador; i++) {
        const calculo = tabla * i
        salida += `${tabla} X ${i} = ${calculo}\n`
        consola += `${tabla} ${'X'.green} ${i} ${'='.green}  ${calculo}\n`
    }

    if (listar) {
        console.log(`Tabla del ${tabla} Lista`.yellow.bold)
        console.log(consola)
    } else{
        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida)
        // console.log(`Tabla del ${tabla} creada`)

        return `Tabla del ${tabla} creada`
    }        
  
        } catch (error) {
            throw error
        }





}

module.exports = {crearArchivo}




