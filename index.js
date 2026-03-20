import fs from 'fs';

fs.readFile('productos.json', 'utf-8', (err, data) => {
  if (err) {
    console.log('El archivo no se pudo leer:', err.message);
    return;
  }

  const productos = JSON.parse(data);

  console.log('Productos:');
  productos.forEach((producto) => 
    {
    console.log(`${producto.nombre} - $${producto.precio}`);
    });
});