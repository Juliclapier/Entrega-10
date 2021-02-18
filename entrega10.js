
var inputUno = document.getElementById("nombre")
var inputDos = document.getElementById("pass")

function mostrar(inputUno,inputDos) {
      

    return (inputDos.value, inputUno.value)
  }

    function mostrarDos (){
     $(".div-click").click(mostrarDos)

       if(inputDos.value != 'clapier' && inputUno.vale !='juliana'){
        document.getElementById("saludo").innerHTML= "Usuario incorrecto"
      }
    else {document.getElementById("saludo").innerHTML= "Usuario correcto"}}

    