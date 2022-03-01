
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

//function loadUnComplete() to issue a sweetalert if there was an error on the data updated
function loadUncomplete()
{
  swal
  ({
    title: "Error",
    text: "Por favor, chequear que los datos sean correctos",
    icon: "error",
  });
}

//function clientUpdate() to issue a sweetalert when a client's info gets updated
function clientUpdate()
{
  swal
  ({
    title: "Cliente actualizado",
    text: "La información del cliente fue actualizada correctamente",
    icon: "success",
  });
}

//function lookForStarted() to issue a sweetalert when the restoreData() starts
function lookForStarted()
{
  swal
  ({
    title: "¡Bienvenido!",
    text: "Danos un momemto mientras buscamos la información de tus pacientes",
    icon: "info",
  });
}

//function lookForStarted() to issue a sweetalert when the restoreData() completes
function lookForCompleted()
{
  swal
  ({
    title: "¡Gracias por la espera!",
    text: "La información ya se recuperó y estamos listos para empezar a trabajar",
    icon: "success",
  });
}

//function lookForStarted() to issue a sweetalert when the restoreData() does not complete
function lookForNotCompleted()
{
  swal
  ({
    title: "Whoops",
    text: "La información no se pudo recuperar, por favor, contactar con soporte",
    icon: "error",
  });
}

//function utilityTBD() to display a warning message for an unwritten feature yet
function utilityTBD()
{
  swal
  ({
    title: "Whoops!",
    text: "Todavía estamos trabajando en esta función, gracias por tu paciencia :)",
    icon: "warning",
  });
}
