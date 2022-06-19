function Presentacion(nombre, admin) {
  if(admin) {
    var rol= "Administrador"
  } else {
    rol = "Usuario"
  }

  console.log(`Soy el ${nombre} y mi rol es ${rol}`)
}

Presentacion("Eugenia", true); //invoco a la funcion