/**
 * Funciones: es un bloque de codigo JavaScript que se define una vez pero puede ejecutarse
 * tantas veces como se desee.
 * 
 * Argumento: Valor que le pasamos a la función
 * Parametro: Variable que se define en la función
 * 
 * Las funciones en JavaScript son objetos, como son objetos podemos establecer propiedades, también podemos invocar
 * otras funciones, las definiciones de funciones se pueden anidar dentro de otra función.
 * Las funciones que estan anidadas tienen acceso a cualquier variable de las funciones en las que se encuentran.
 * Formas de definir funciones: 
 * 1. ES6 se define lo que es las funciones flecha
 * 
 */

console.log(factorial(24)); // Las funciones de expresión solo existen cuando se crea la expresión de la función y no se puede usar
//antes de esta expresión.

//Declaración de función.
function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial(x - 1);
}

console.log(factorial(6));

//Expresión de Función.
const factorial2 = function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial2(x - 1);
}
console.log(factorial2(33));

//
const cuadrado = function (x) {
    return x * x;
}
console.log(cuadrado(4));

//Expresión de función que se autoinvoca
let cuadradoV2 = (function(x){
    return x * x;
}(4));
console.log(cuadradoV2);

/**
 * Funciones Flechas, son expresiónes de función, pero a diferencia de las primeras, esta es más compacta, notación matematica
 * 
 */
const suma = (x,y) => {return x + y};
console.log(suma(3,4));

/**
 * Función flecha más compacta
 */
const sumaV2 = (x,y) => x+y;
console.log(sumaV2(5,8));

// Con un solo parametro
const polinomio = x => x*x+2*x+3;
console.log(polinomio(25));

/**
 * Función flecha sin parametro
 */
const devolverConstante = () => 10;
console.log(devolverConstante());


