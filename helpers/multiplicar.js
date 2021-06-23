const fs = require('fs');
const colors = require('colors');




const creararchivo = async(base = 5,listar = false, hasta=10)=>{
    
    try{
    
    let salida,consola='';


    for(let i=1;i<=hasta;i++){
    
        consola+=`${base} ${'x'.green} ${i}${'='.green}${base*i}\n`;
        salida+=`${base} ${'x'} ${i}${'='}${base*i}\n`;
    
    }
    if(listar){
        console.log("===========================".rainbow);
        console.log('tabla del :'.green,colors.blue(base));
        console.log("===========================".rainbow);
        console.log(consola);
    }
    
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
    return (`tabla-${base}.txt `);


    }
    catch(error){
        throw error;
 }
    

}



module.exports= {
    creararchivo:creararchivo

}