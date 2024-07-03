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
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F'

console.log({ nota, grado})