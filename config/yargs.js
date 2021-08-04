const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar.'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en la consola.'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es hasta donde la tabla multiplica.'
                })
                .check( (argv, options) =>{
                    if (isNaN( argv.b)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .check( (argv, options) =>{
                    if (isNaN( argv.h)) {
                        throw 'El hasta tiene que ser un numero'
                    }
                    return true
                })
                .argv;

module.exports = argv