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


//--------EJ07-----------------//

const contar10 = () =>{
let i = 0;
const id = setInterval(() => {
i++
console.log(i)
}, 1000);
setTimeout(() =>{
    console.log("contador terminado");
    clearInterval(id);
},10500)
}
contar10();

//--------EJ08-----------------//

const vocales = ["a","e","i" ,"o","u"];

const analizarTexto =  texto => {
    const textoSeparado = [...texto];
    let textoAnalizado ={
        vocales: 0,
        consonantes: 0,
        palabras: 1
    }
    let letraAnterior = false;
    textoSeparado.forEach(e =>{
        let vocal = false;
        vocales.forEach(u =>{
            if(e === u)
            {
                textoAnalizado.vocales ++;
                vocal = true;
            }
        })
        if(!vocal){
            if(letraAnterior != false){
                if(e === " "){
                    textoAnalizado.palabras ++;
                }
                else{
                        textoAnalizado.consonantes ++;
                }
                }
                else{
                    if(e != " "){
                    textoAnalizado.consonantes ++;
                    }
            }
        }
        letraAnterior = e;
    })
    console.log(textoAnalizado)
    
}

analizarTexto("hola mundo chau mundo");