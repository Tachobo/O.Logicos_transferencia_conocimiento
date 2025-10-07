alert(`En este programa se le dara acceso a un usuario
siempre y cuando cumpla con las siguientes condiciones
usuario:admin
contraseña:1234
en caso contrario se le denegara el acceso`);
//Asignamos y pedimos variables
let usuario = prompt(`Por favor digite su nombre de usuario`);
let contraseña = parseInt(prompt(`Por favor digite su contraseña`));
//programamos las condicionales
//se pone en comillas admin, para que se sepa que se
//trabaja con una cadena de texto, si no lo hago, es como si trabajara
//con una variable no definida, y no me daria respuesta
if (usuario === "admin" && contraseña === 1234){
    alert("Acceso permitido")
}else{
    alert("Acceso denegado")
}