function Presentacion(nombre, admin) {
  if(admin) {
    let rol= "Administrador"
  } else {
    rol = "Usuario"
  }

  console.log(`Soy el ${nombre} y mi rol es ${rol}`)
}

Presentacion("Eugenia", true); //rol is not defined