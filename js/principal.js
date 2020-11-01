$(function(){
    $('#dialogEliminar').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            
               'Acepto': function(){
                  alert('Eliminar') 
               },
        },

    });


    $('.btnEliminar').on('click', function(){
       $('#dialogEliminar').dialog('open') ;
    })
})