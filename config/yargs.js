const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    description:'es la base'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    description:'es el numero hasta donde se'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    description:'muestra o no',
                    default:false
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'la base tiene qser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;