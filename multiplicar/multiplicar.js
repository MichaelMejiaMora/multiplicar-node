const fs = require('fs')
const colors = require('colors');

let data = ''

let crearArchivo = async (base, limite) => {
  if (!Number(base)) {
    throw new Error ('El valor introducido no es un número')
  }

  for (let i = 1, n = limite; i <=n; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
  }

  fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
    if(err) {
      throw new Error (err)
    }
  });
  return `tabla-${base}.txt`
}

let listarTabla = (base, limite) => {
  console.log('==================='.green);
  console.log(`Tabla del ${base}`.green);
  console.log('==================='.green);
  
  for(let i = 1, n = limite; i <= n; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}
module.exports = {
  crearArchivo,
  listarTabla
}