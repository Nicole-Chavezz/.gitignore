const prompt = require('prompt-sync')();
// La consola pausa la ejecución hasta que el usuario escribe y presiona Enter
let nombre = prompt("¿Cómo te llamás? ");
console.log(`¡Hola, ${nombre}! Bienvenido a la clase 3.`);


let entradaEdad = prompt("Ingresá tu edad: ");
let edad = Number(entradaEdad);

if (isNaN(edad)) {
console.log("Error: Debes ingresar un número válido.");
} else {
console.log(`Tu edad ingresada es: ${edad}`);
}


let eda = Number(prompt("Ingresá tu edad: "));
if (isNaN(eda) || eda < 0) {
console.log("Por favor, ingresá una edad válida.");
} else {
// Condicional anidado
if (eda >= 18) {
console.log("Acceso concedido: Sos mayor de edad.");
} else {
console.log("Acceso denegado: Sos menor de edad.");
}
}


//Ejercicios para practica//
let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

let suma = numero1 + numero2;

console.log("La suma es: " + suma);

//Ejercio2//
let number1 = prompt("Ingrese el primer número:");
let number2 = prompt("Ingrese el segundo número:");
let suma2 = number1 + number2;
console.log (`La suma es: ${suma}`);

//Ejercicio3//
let precio1 = prompt("Ingrese el precio del primer producto:");
let precio2 = prompt("Ingrese el precio del segundo producto:");

precio1 = Number(precio1);
precio2 = Number(precio2);

let total = precio1 + precio2;

console.log("El total a pagar es: " + total);

//Ejercicio4//
let edad1 = prompt("Ingrese la edad de la primera persona:");
let edad2 = prompt("Ingrese la edad de la segunda persona:");

edad1 = Number(edad1);
edad2 = Number(edad2);

let sumaEdades = edad1 + edad2;

console.log("La suma de las edades es: " + sumaEdades);

//Ejercicio5//
let nota1 = prompt("Ingrese la primera nota:");
let nota2 = prompt("Ingrese la segunda nota:");

nota1 = Number(nota1);
nota2 = Number(nota2);

let sumaNotas = nota1 + nota2;

console.log("La suma de las notas es: " + sumaNotas);

//ejercicio6//
let grupo1 = prompt("Ingrese la cantidad de estudiantes del primer grupo:");
let grupo2 = prompt("Ingrese la cantidad de estudiantes del segundo grupo:");

grupo1 = Number(grupo1);
grupo2 = Number(grupo2);

let totalEstudiantes = grupo1 + grupo2;

console.log("El total de estudiantes es: " + totalEstudiantes);

//ejercicio7//
let dinero1 = prompt("Ingrese la primera cantidad de dinero:");
let dinero2 = prompt("Ingrese la segunda cantidad de dinero:");

dinero1 = Number(dinero1);
dinero2 = Number(dinero2);

let totalDinero = dinero1 + dinero2;

console.log("El total de dinero es: $" + totalDinero);