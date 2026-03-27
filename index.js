//EJ1
import fs from 'fs';
import dayjs from 'dayjs';
import axios from 'axios'

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

//--------EJ04-----------------//


async function obtenerPais(nombrePais) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`)
        const data = response.data
        const pais = data[0]

        console.log("País:", pais.name.common);
        console.log("Capital:", pais.capital[0]);
        console.log("Región:", pais.region);
        console.log("Población:", pais.population);
    } catch (error) {
        console.error("Error al obtener el país:", error.message)
    }
}

obtenerPais("Argentina")


