const elMayor = (a, b) => (a > b) ? a : b;

console.log(elMayor(20, 15));

const tieneMembresia = (miembro) => (miembro) ? 'USD 2' : 'USD 10'
tieneMembresia(true)
tieneMembresia(false)

const amigo = true
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Lock'
]
// Como amigo es true vemos Thor

const note = 65
const grado = note >= 95 ? 'A+' :
              note >= 90 ? 'A' :
              note >= 85 ? 'B+' :
              note >= 80 ? 'B' :
              note >= 75 ? 'C+' :
              note >= 70 ? 'C' : 'F'

console.log({ note, grado})