//¿Qué estructura condicional usarías para resolver este caso: if-
//else if-else o switch? ¿Por qué?
//pues el switch me sirve cuando comparo valores exactos contra varios
//casos fijos, pero el ejercicio me pide rangos de edades, varian
//asi que usare if else-if, porque cumple con lo que necesito
alert(`En este programa mostraremos el valor de la entrada a cine
dependiendo su edad, y si es estudiante`);
//Asignamos y pedimos variables
//Pedimos la edad del cliente
let edad = parseInt(prompt(`Por favor digite su edad`));
//preguntamos si es estudiante
//se usa el .toLowerCase(), para que acepte las distintas maneras de poner "si"
//que mayuscula "SI", que minuscula "si", o mezcla de ambas "Si sI",
//si no se usa, no aplica el descuento si no escriben exactamente
//como se asigno
let estudiante = prompt("¿Es estudiante? responda (si/no)").toLowerCase();
//asignamos variable para guardar el precio base de cada entrada
let precio;
//programamos las condicionales para mostrar el precio, dependiendo la edad
//o si es estudiante
if (edad<12){
    precio =5000;
}else if(edad>=12 && edad<=18 ){
    precio=8000;
}else{
    precio=10000;
}

// si es estudiante se aplica el descuento, si no demalas, paga completo
if (estudiante === "si") {
  precio *= 0.8; // se usa el operador compuesto *=, para no tener que multiplicar
//el precio por 0.20, y ese resultado restarselo al preciobase
//lo que hace es multiplicar el precio por el valor 0.8 al cual ya se le resto el descuento
// de normal sin descuento la representacion es 1.0, pero con descuento se rebaja a 0.8,
// si fuera descuento del 30%, seria 0.7, y eso se guarda en precio
}

// se muestra el precio
alert(`El precio de su entrada es: ${precio}`);
