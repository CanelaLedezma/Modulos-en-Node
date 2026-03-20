//EJ1
import fs from 'fs';
import dayjs from 'dayjs';
    console.log(`EJ01`);
    console.log(`  `);

  const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));

  console.log('Productos:');
  productos.forEach((producto) => 
    {
    console.log(`${producto.nombre} - $${producto.precio}`);
    });

    //EJ02
        console.log(` - `);
        console.log(`EJ02`);
    console.log(`  `);

function agregarProducto(nombre, precio){
    const productos = JSON.parse(fs.readFileSync('productos.json', 'utf-8'));

    let nuevo = {
        nombre: nombre,
        precio: precio
    };

    console.log(`${nuevo.nombre} - $${nuevo.precio}`);
}
agregarProducto("Monitor", 50000);

//EJ 03
    console.log(` - `);

    console.log(`EJ03`);
    console.log(`  `);

function mostrarFechaHora() {
    const ahora = dayjs();

    const fecha = ahora.format('DD/MM/YYYY');
    const hora = ahora.format('HH:mm');

    console.log(`Fecha actual: ${fecha}`);
    console.log(`Hora actual: ${hora}`);
}

mostrarFechaHora();