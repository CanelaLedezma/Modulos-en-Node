//EJ1
import fs from 'fs';

  const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));

  console.log('Productos:');
  productos.forEach((producto) => 
    {
    console.log(`${producto.nombre} - $${producto.precio}`);
    });

    //EJ02
function agregarProducto(nombre, precio){
    const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));

    let nuevo = {
        nombre: nombre,
        precio: precio
    };

    console.log(`${nuevo.nombre} - $${nuevo.precio}`);
}
agregarProducto("Monitor", 50000);