$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   

  $('h3').on("dblclick",function(){
    $(this).css("color", "red")
  });

  $('#enviarcorreo').on("click",function(){
        alert('El correo fue enviado correctamente...');
  });

  $('.plato').on("click", function(){
      $('.descripcion').toggle()
  });
})

