const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}
let argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
  .command('crear','Crea una nueva tabla de multiplicar y la guarda en archivo', opts)
  .help()
  .argv;

module.exports = {
  argv
}