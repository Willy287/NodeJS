/**
 * Modulos. Permite que grandes programas se ensamblen y que funcionen correctamente
 * Consiste en ocultar detalles de implementación privada, mantener ordenamo el
 * namespace global para que los modulos no puedan modificar accidentalmente las 
 * variables, funciones y clases definidas por otros modulos.
 * 
 */
const stats = (function () {
    const sum = (x, y) => x + y;
    const square = x => x * x;

    function mean(data) {
        return data.reduce(sum) / data.length;
    }
    function stdDev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    }
    return {
        mean,
        stdDev,
        sum
    };
}());

console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stdDev([1, 3, 5, 9]));
console.log(stats.sum([1, 3, 5, 9]));

const calculator = (function () {
    const multiplicar = (x, y) => x * y;
    const restar = (x, y) => x - y;
    const dividir = (x, y) => x / y;
    const sumar = (x, y) => x + y;

    return {
        multiplicar,
        restar,
        dividir,
        sumar
    };

}());

console.log(calculator.multiplicar(3, 4));

const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['statTest.js'] = (function () {

    const exports = {};
    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    };
    exports.stdDev = function (data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    };

    return exports;
}());

modules['calculatorTest.js'] = (function () {

    const exports = {};

    exports.multiplicar = function (x, y) { return x * Y };
    exports.restar = function (x, y) { return x - y };
    exports.dividir = function (x, y) { return x / Y };
    exports.sumar = function (x, y) { return x + y };

    return exports;

}());

const stats2 = require('statTest.js');
console.log(stats2.mean([1, 2, 3, 9]));

const calculator2 = require('calculatorTest.js');
console.log(calculator2.sumar(1, 4));


/**
 * Ejercicio: Desarrollar un programa que se encargue de calcular el area de una figura dada.
 * 
 */
modules['calcularArea.js'] = (function () {
    const exports = {};
    let PI = Math.PI;

    exports.area = function (x, y, z) {
        if (x.toString().toLowerCase() === "Triangulo".toLowerCase()) {
            return (y * z) / 2;
        }
        if (x.toString().toLowerCase() === "Cuadrado".toLowerCase()) {
            return y * y;
        }
        if (x.toString().toLowerCase() === "Rectangulo".toLowerCase()) {
            return y * z;
        }
        if (x.toString().toLowerCase() === "Rombo".toLowerCase()) {
            return (y * z) / 2;
        }
        return "Debe seleccionar una figura definida";
    };
    exports.perimetro = function (x, y, z, a) {
        if (x.toString().toLowerCase() === "Triangulo".toLowerCase()) {
            return y + z + a;
        }
        if (x.toString().toLowerCase() === "Cuadrado".toLowerCase()) {
            return 4 * y;
        }
        if (x.toString().toLowerCase() === "Rectangulo".toLowerCase()) {
            return (2 * y) + (2 * z);
        }
        if (x.toString().toLowerCase() === "Rombo".toLowerCase()) {
            return 4 * y;
        }

        return "Debe seleccionar una figura definida";
    };
    return exports;
}());

const stats3 = require('calcularArea.js');
console.log("Función area: " + stats3.area("TRIANGULO", 4, 5));
console.log("Función area: " + stats3.area("cuadrado", 4));
console.log("Función area: " + stats3.area("trapecio"));
console.log("Función area: " + stats3.area("recTanGUlo", 45, 68));
console.log("Función area: " + stats3.area("Rombo", 100, 40));
console.log("Función perimetro: " + stats3.perimetro("Trapecio", 100));
console.log("Función perimetro: " + stats3.perimetro("Triangulo", 100, 345, 10));
console.log("Función perimetro: " + stats3.perimetro("CUADRADO", 1200));
console.log("Función perimetro: " + stats3.perimetro("RecTanGulo", 128, 8272));
console.log("Función perimetro: " + stats3.perimetro("rombos", 128, 8272));
console.log("Función perimetro: " + stats3.perimetro("rombo", 750));


/**
 * Modulos de ECMAScript6: Los modulos en ES6 son oficiales para la mayoria de los navegadores excepto internet Explorer. En los modulos de ES6
 * cada archivo tiene su propio contexto privado y se puede usar las declaraciones de importación y exportación. Los modulos en ES6 están en
 * modo estricto.
 * 
 */
export const PI = Math.PI;

export function degreesToRadians(gradees) {
    return (gradees * PI) / 180;
}

export class Circle {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return PI * this.radio * this.radio;
    }
}

/**
 * Segunda alternativa para exportar
 * 
 */
const PI2 = Math.PI;

function degreesToRadians2(gradees) {
    return (gradees * PI) / 180;
}

class Circle2 {
    constructor(radio) {
        this.radio = radio;
    }
    area2() {
        return PI * this.radio * this.radio;
    }
}


export {PI2,degreesToRadians2,Circle2};

/**
 * En el caso de que solo queramos exportar un solo elemento utilizamos:
 * Solo se puede hacer un default por modulo
 */
/**
 * La palabra clave export solo debe aparecer en el nivel superior de nuestro codigo JavaScript, es decir, 
 * no se puede utilizar export dentro de una clase(for,while), dentro de un ciclo, dentro de un condicional 
 * 
 */

export default class BitSet {}

/**
 * Importt: Importa los elementos exportados de los modulos
 */
import BitSet from './bitset.js'; // Importando elementos con default

import {mean,stdDev} from './stats.js'; // Importando varios elementos 

/**
 * Para tener en cuenta y evitar errores:
 * 1. Las exportaciones solo pueden aparecer a nivel superior del modulo.
 * 2. Por convención las importaciones se colocan al inicio del modulo(Buena practica de programación).
 * 3. Para la ruta del modulo se pueden usar comillas simples o dobles ("path",'path').
 * 4. En los modulos se pueden importar todos los elementos con una sola palabra
 */
import * as stats from 'stats.js'; // Importamos todos los elementos de un modulo

stats.mean(); //Llama a los metodos definidos en el modulo stats

/**
 * Import para los casos especiales en los que se tenga un export default y otras exportaciones
 * Suponiendo que el archivo bitset.js tenga default y otros elementos exportados
 */
import BitSet, {otroElementoExportado,otroSegundoElementoExportado} from '.bitset.js';

/**
 * Para exportar modulos que no tienen anotaciones de export
 */
import './archivosSinExports.js';

// import renombrado: se utiliza cuando se tenga que importar dos modulos con elementos exportados que tengan nombres iguales

import {mean,stdDev} from './stats.js';
import {mean as menOther,stdDev2} from './otherstats.js';
//renombrando elementos exportados con default
import  {default as nuevoNombre} from './module.js';

// Renombrado en los exports
export {
    PI2 as NumeroPI, 
    degreesToRadians as convertir, 
    Cicle2 as Circulo
};

/**
 * Tener en cuenta con los exports:
 * 1. Expresiones, por ejemplo Math.cos no están permitidas dentro del export, esto generar un 
 * error de sintaxis.
 */

 /**
  * Re-exports: Re-exportaciones; Implica unir dos modulos en uno solo
  * Re-export desde nuevo archivo 'stat.js'
  */
import { mean } from "./stats/mean.js";
import { stdDev } from "./stats/stdDev.js";

//Re-export desde nuevo archivo 'stat.js'
export {mean, stdDev};

// Re-export desde los import
export {mean} from './stats.js';
export {stdDev} from '/stats/stdDev.js';

// Re-export de todos los elementos desde los import
export * from './stats.js';
export * from '/stats/stdDev.js';

/**
 * Importar modulos re-exportados, también se pueden renombrar
 */
import {mean as meanOtherName, stdDev} from './stat.js';

/**
 * Re-Exportar elementos default
 */
export {default as mean} from './stats/mean.js';

export {default as stdDev} from './stats/stdDev.js';
