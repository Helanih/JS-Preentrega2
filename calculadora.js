const precios = {
    lavaplatos: { precio: 1800, marca: 'San Cristobal' },
    cloro: { precio: 2000, marca: 'La Purísima' },
    desinfectante: { precio: 1500, marca: 'Brillante Sol' },
};

function calcularTotal() {
    const productoSeleccionado = document.getElementById('producto').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    if (isNaN(cantidad)) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    const precioUnitario = precios[productoSeleccionado].precio;
    const marca = precios[productoSeleccionado].marca;
    const total = cantidad * precioUnitario;

    document.getElementById('total').textContent = `Total: ${total} ARS - Marca: ${marca}`;
}

