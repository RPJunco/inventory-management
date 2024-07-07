// Gestión de Inventario de Productos

// Declaracion de la variable 'inventario' que contiene un arreglo de objetos
let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];

// AGREGAR PRODUCTOS
// Implementa una función 'agregarProducto' que reciba un objeto producto (con las propiedades mencionadas) y lo añada al array 'inventario'.

function agregarProducto(producto) {
    if(producto && producto.nombre && producto.categoria && producto.precio && producto.cantidad && producto.codigo){
        inventario.push(producto)
        console.log(`El producto {$producto.nombre} se agrego al inventario`)
    }
    else {
        console.log(`El producto no cumple con las especificaciones, producto omitido..`)
    }
}

// ELIMINAR PRODUCTOS
// Implementa una función 'eliminarProducto' que reciba el código de un producto y lo elimine del array 'inventario'.

function eliminarProducto(codigoProducto){
    const longitudInventario = inventario.length
    for(let i = 0; i < longitudInventario; i++){
        if(inventario[i].codigo === codigoProducto){
            let productoEliminado = inventario.splice(i, 1)
            console.log(`Se elimino el siguiente producto: ${productoEliminado[0]}`)
            return;
        }
    }
    console.log(`No se encontro ningun producto con el codigo ${codigoProducto}`)
}

// ACTUALIZAR CANTIDAD DE PRODUCTOS
// Implementa una función 'actualizarCantidad' que reciba el código de un producto y una nueva cantidad, y actualice la cantidad del producto correspondiente en el array 'inventario'.
