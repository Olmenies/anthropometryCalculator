
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

function clientUpdate() {
  swal
  ({
    title: "Cliente actualizado",
    text: "La información del cliente fue actualizada correctamente",
    icon: "success",
  });
}

function utilityTBD() {
  swal
  ({
    title: "Whoops!",
    text: "Todavía estamos trabajando en esta función, gracias por tu paciencia :)",
    icon: "warning",
  });
}

function lookForStarted() {
  swal
  ({
    title: "¡Bienvenido!",
    text: "Danos un momemto mientras buscamos la información de tus pacientes",
    icon: "info",
  });
}

function lookForCompleted() {
  swal
  ({
    title: "¡Gracias por la espera!",
    text: "La información ya se recuperó y estamos listos para empezar a trabajar",
    icon: "success",
  });
}
