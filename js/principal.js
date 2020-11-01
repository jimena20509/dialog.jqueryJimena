$(function(){


    var celulares = [
       'LG', 'Xiaomi', 'Huawei', 'iPhone' 
    ]


    
    for (let i = 0; i < celulares.length; i++) {
        const cell = celulares[i];
        console.log(cell);
        $('#lista-celulares').append(`
            <li>
            <span class="row">

                <span class="col">
                ${cell}
                </span>
                <span class="col">
                    <a herf="a" class="btnEliminar">Eliminar</a>
                </span>
            </span>
                
            </li>
        `);

    }


    $('#dialogEliminar').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
           Acepto: function(){
                alert('Eliminado') ;
            },
            
           Cancelar: function(){
                console.log('Bye') ;
            },
          },
    });


    $('#lista-celulares').on('click', '.btnEliminar', function (){
        $("#dialogEliminar").dialog('open');
    })


})