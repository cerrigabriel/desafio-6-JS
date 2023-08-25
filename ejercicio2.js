let ingresoTotal = prompt("ingrese el monto total");

let gastosNecesarios = ingresoTotal / 2;
let gastosOpcionales = (ingresoTotal * 30) / 100;
let ahorroEInversion = (ingresoTotal * 20) / 100;

alert("El monto para cada categoria es el siguiente:");
alert("El monto para los gastos necesarios es de: $" + gastosNecesarios);
alert("El monto para los gastos opcionales es de: $" + gastosOpcionales);
alert("El monto para ahorro e inversión es de: $" + ahorroEInversion);


