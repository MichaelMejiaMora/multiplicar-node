const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const {argv} = require('./config/yargs')
const colors = require('colors');

let base = argv.base
let limite = argv.limite
let comando = argv._[0]

switch (comando) {
  case 'listar':
  listarTabla(base,limite)
  break;

  case 'crear':
  let getFile = async (base, limite) => {
    let archivo = await crearArchivo(base,limite)
    return archivo
  }
  
  getFile(base, limite)
    .then(file => console.log(`El archivo ${file.green} ha sido creado`))
    .catch(err => console.log(`Ha habido un error ${err}`.red))
  break

  default:
  console.log('Comando desconocido'.red);
}
