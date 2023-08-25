let costosFijos;
let precioDeVenta;
let costosVariables;
let cantidadVentas;

costosFijos = prompt("ingrese los costos fijos");
precioDeVenta = prompt("ingrese el precio de venta");
costosVariables = prompt("ingrese los costos variables");

cantidadVentas = costosFijos / (precioDeVenta - costosVariables);

alert("El punto de equilibrio es de " + cantidadVentas);