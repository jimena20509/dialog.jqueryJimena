
var celulares;
celulares = [
    {id: 1, marca:'LG'},
    {id: 2, marca:'Xiaomi'},
    {id: 3, marca:'Huawei'},
    {id: 4, marca:'iPhone'}
 ];

function traerDatos() {
    
     return celulares;
}


function eliminar(codi) {

    var nuevos = [];

    for (let i = 0; i < celulares.length; i++) {
        const cell = celulares[i];
        if (cell.id != codi) {
          nuevos.push(cell);  
        }
    }

    celulares = nuevos;
}