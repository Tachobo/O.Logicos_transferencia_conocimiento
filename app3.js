alert(`En este programa se pedira un numero entero
y se mostrara si es positivo, negativo, o cero`);
//asignamos variables y pedimos numeros
let numero = parseInt(prompt(`Por favor ingrese el numero`));
if (numero>0){
    alert("Número positivo")
}else if (numero<0){
    alert("Número negativo")
}else if(numero==0){
    alert("Cero")
}

//Extensión: ¿Cómo cambiaría la solución si quieres que, además, se verifique si el
//número es par o impar?

/*
le añadiria otro if y else, porque se esta evaluando otra propiedad distinta
se usa el operador modulo %, con este calculamos si el resultado de la division
tiene un residuo, si no lo tiene por ende es cero, lo cual indica que es par
si lo tiene, seria impar, matematicas hijo
if (numero % 2 === 0) {
alert("Número par");
} else {
alert("Número impar");
}hasta ahora me dio por buscar como hacer la cadena
de comentario, lo aplicare de ahora en mas
*/
