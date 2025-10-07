alert(`En este programa se evaluara a un estudiante
como aprobado o reprobado si cumple o no las condiciones`);
//Ya se la saben: Asignamos y pedimos variables
let notafinal = parseFloat(prompt(`Por favor digite su nota final`));
let asistencia = parseFloat(prompt(`Por favor digite su asistencia`));
if (notafinal >= 60 && asistencia >= 80){
    alert("Aprobado")
}else {
    alert("Reprobado")
}
/*¿Qué operador lógico garantiza que ambas condiciones se
evalúen al mismo tiempo?*/
/*Respues:Operador AND "&&", lo que hace es que si ambas condiciones
son verdaderas, el resultado total sera verdader, sin embargo si una
de las dos es falsa, el resultado sera false, o en este caso Reprobado*/