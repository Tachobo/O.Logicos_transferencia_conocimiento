alert(`En este programa se presentan las opciones de un cajero automatico
1. Consultar saldo
2. Retirar dinero
3. Depositar dinero
4. Salir`);
//Pedimos y asignamos variables
let opcion = parseInt(prompt(`Por favor digite la opcion que desea realizar`));
//evaluamos la variable opcion, y damos las respuestas a los casos
switch (opcion) {
    case 1:
    alert("Consultar saldo");
    break;
    case 2:
    alert("Retirar dinero");
    break;
    case 3:
    alert("Depositar dinero");
    break;
    case 4:
    alert("Salir");
    break;
}
/*¿Qué pasaría si el usuario ingresa un número que no está entre 1
y 4?*/
/*Pues en este caso no puse ningun default
asi que no mostrara mensaje alguno al no tener coincidencia
, en caso de poner un default, mostrara el mensaje que ponga
ejemplo:
default
alert("opcion no valida");
break
lo que hara el programa sera mostrar opcion no valida*/