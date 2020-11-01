$(function(){



   

    function llenarListaPagina() {
        $('#lista-celulares').html(''); 
        var celulares = traerDatos();
        for (let i = 0; i < celulares.length; i++) {
            const cell = celulares[i];
            
            $('#lista-celulares').append(`
                <li>
                <span class="row">

                    <span class="col">
                    ${cell.id}. ${cell.marca}
                    </span>
                    <span class="col">
                        <a herf="a" data-id="${cell.id}" class="btnEliminar">Eliminar</a>
                    </span>
                </span>
                    
                </li>
            `);

        }

    }
    llenarListaPagina();

    $('#dialogEliminar').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
           Acepto: function(){
               eliminar(idCell);
               llenarListaPagina();
               $(this).dialog('close');
                alert('Eliminado') ;
                
            },
            
           Cancelar: function(){
                console.log('Bye') ;
            },
          },
    });


    var idCell = null;

    $('#lista-celulares').on('click', '.btnEliminar', function (){
        idCell = $(this).data('id');
        $("#dialogEliminar").dialog('open');
    })


})