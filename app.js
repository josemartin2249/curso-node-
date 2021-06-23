
const{creararchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv=require('./config/yargs');
console.clear();
creararchivo(argv.b,argv.l,argv.h)
    .then(nombrearchivo => console.log(nombrearchivo.rainbow,'creado'))
    .catch(err=>console.log(err));