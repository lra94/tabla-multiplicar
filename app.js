
//const { argv, option } = require('yargs')
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


//Tabla
console.clear()
//const tabla = 10
crearArchivo(argv.b, argv.l, argv.h)
    .then(crearArchivo => console.log(`Tabla Creada`.underline.green.bold))
    .catch( err => console.log(err))



