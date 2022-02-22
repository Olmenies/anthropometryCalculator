
//function loadComplete() to issue a sweetalert if all the data has been properly updated
function loadComplete()
{
  swal
  ({
    title: "Carga completa",
    text: "Estamos calculando los resultados",
    icon: "success",
  });
}//end of function

//function loadUnComplete() to issue a sweealert if there was an error on the data updated
function loadUncomplete() {
  swal
  ({
    title: "Error",
    text: "Por favor, chequear que los datos sean correctos",
    icon: "error",
  });
}

function clientUpdate() {
  swal
  ({
    title: "Cliente actualizado",
    text: "La información del cliente fue actualizada correctamente",
    icon: "success",
  });
}
