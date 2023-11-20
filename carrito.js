
let carrito = [];
const productos = [
    { nombre: "Lavadora", precio: 200000 },
    { nombre: "Plancha", precio: 5000 },
    { nombre: "Tostadora", precio: 6000 }
];


function agregarAlCarrito() {
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));


    if (!isNaN(codigoProducto) && codigoProducto >= 1 && codigoProducto <= productos.length && !isNaN(cantidad) && cantidad > 0) {
        let productoSeleccionado = productos[codigoProducto - 1];
        let subtotal = productoSeleccionado.precio * cantidad;


        carrito.push({ producto: productoSeleccionado.nombre, cantidad, subtotal });

        console.log("Producto agregado al carrito:", productoSeleccionado.nombre);
    } else {
        console.log("Código de producto o cantidad inválidos");
    }
}


function mostrarCarrito() {
    console.log("Carrito de Compras:");
    let total = 0;


    carrito.forEach(item => {
        console.log(`${item.producto} - Cantidad: ${item.cantidad} - Subtotal: $${item.subtotal}`);
        total += item.subtotal;
    });

    console.log(`Total a pagar: $${total}`);
    
}


function operacionSobreCarrito(operacion) {
    return function () {
        carrito.forEach(item => {
            item.subtotal = operacion(item.subtotal);
        });
    }
}


const aplicarDescuento = operacionSobreCarrito(subtotal => subtotal * 0.9);

agregarAlCarrito();
agregarAlCarrito();


mostrarCarrito();
aplicarDescuento();
mostrarCarrito();

