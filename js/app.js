// Función para calcular el costo total de 2 productos selecionados por el usario
function productosCostoTotal() {
    let costoTotal = 0;

    for (let i = 1; i <= 2; i++) {
        let costoProducto = prompt("Ingrese el costo del Producto " + i + ":");

        while (costoProducto === "" ) {
            alert("Por favor, tienes que ingresar un numero para calcular el costo del producto" + i + ":");
            costoProducto = prompt("Ingrese el costo del Producto " + i + ":");
        }

        costoTotal += parseFloat(costoProducto);
    }

    //Resultado
    alert("El costo total es: $" + costoTotal.toFixed(2));
}

productosCostoTotal();
