import fs from 'fs';
//--------EJ05-----------------//

const productos = JSON.parse(fs.readFileSync('productos.json','utf8'));

const buscarProducto = producto => {
    const productoBuscado = productos.find(e => e.nombre === producto);
    if(productoBuscado != false)
    {
        console.log(`Producto encontrado`);
        console.log(`Nombre: ${productoBuscado.nombre}`);
        console.log(`Precio: ${productoBuscado.precio}`);      
    }
    else
    {
        console.log(`Producto no encontrado`);
    }
}
buscarProducto("Mouse");

//--------EJ06-----------------//




const archivoCSV = () =>{
    let csvContent = "nombre;precio\n";
    productos.forEach(p => {
    csvContent += `${p.nombre};${p.precio}\n`
    })
    fs.writeFileSync("productos.csv", csvContent, "utf8");
 }
archivoCSV();