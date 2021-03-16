/**
 * Modulos. Permite que grandes programas se ensamblen y que funcionen correctamente
 * Consiste en ocultar detalles de implementación privada, mantener ordenamo el
 * namespace global para que los modulos no puedan modificar accidentalmente las 
 * variables, funciones y clases definidas por otros modulos.
 * 
 */
const stats = (function(){
    const sum = (x,y)=> x + y;
    const square = x => x*x;

    function mean(data){
        return data.reduce(sum)/data.length;
    }
    function stdDev(data){
        let m = mean(data);
        return Math.sqrt(
            data.map(x=>x-m).map(square).reduce(sum)/(data.length-1)
        );
    }
    return {
        mean,
        stdDev,
        sum
    };
}());

console.log(stats.mean([1,3,5,7,9]));
console.log(stats.stdDev([1,3,5,9]));
console.log(stats.sum([1,3,5,9]));

const calculator = (function (){
    const multiplicar = (x,y) => x*y;
    const restar = (x,y) => x-y;
    const dividir = (x,y) => x / y;
    const sumar = (x,y) => x+y;

    return{
        multiplicar,
        restar,
        dividir,
        sumar
    };

}());

console.log(calculator.multiplicar(3,4));

const modules = {};

function require(moduleName){
    return modules[moduleName];
}

modules['statTest.js'] = (function(){

    const exports = {};
    const sum = (x,y)=> x + y;
    const square = x => x*x;

    exports.mean = function (data){
        return data.reduce(sum)/data.length;
    };
    exports.stdDev = function(data){
        let m = mean(data);
        return Math.sqrt(
            data.map(x=>x-m).map(square).reduce(sum)/(data.length-1)
        );
    };

    return exports;
}());

modules['calculatorTest.js'] = (function (){

    const exports = {};

    exports.multiplicar = function(x,y){return x *Y};
    exports.restar = function(x,y){return x-y};
    exports.dividir = function(x,y){return x/Y};
    exports.sumar = function(x,y){return x+y};

    return exports;

}());

const stats2 = require('statTest.js');
console.log(stats2.mean([1,2,3,9]));

const calculator2 = require('calculatorTest.js');
console.log(calculator2.sumar(1,4));


/**
 * Ejercicio: Desarrollar un programa que se encargue de calcular el area de una figura dada.
 * 
 */
modules['calcularArea.js'] = (function(){
    const exports = {};
    let PI = Math.PI;

    exports.area = function(x,y,z){
        if(x.toString().toLowerCase() ==="Triangulo".toLowerCase()){
            return (y * z) / 2;
        }
        if(x.toString().toLowerCase() ==="Cuadrado".toLowerCase()){
            return  y * y;
        }
        if(x.toString().toLowerCase() ==="Rectangulo".toLowerCase()){
            return  y * z;
        }
        if(x.toString().toLowerCase() ==="Rombo".toLowerCase()){
            return  (y * z) / 2;
        }
            return "Debe seleccionar una figura definida";
    };
    exports.perimetro = function(x,y,z,a){
        if(x.toString().toLowerCase() ==="Triangulo".toLowerCase()){
            return y + z + a;
        }
        if(x.toString().toLowerCase() ==="Cuadrado".toLowerCase()){
            return 4 * y;
        }
        if(x.toString().toLowerCase() ==="Rectangulo".toLowerCase()){
            return (2*y) + (2*z);
        }
        if(x.toString().toLowerCase() ==="Rombo".toLowerCase()){
            return 4 * y;
        }

        return "Debe seleccionar una figura definida";
    };
    return exports;
}());

const stats3 = require('calcularArea.js');
console.log("Función area: " + stats3.area("TRIANGULO",4,5));
console.log("Función area: " + stats3.area("cuadrado",4));
console.log("Función area: " + stats3.area("trapecio"));
console.log("Función area: " + stats3.area("recTanGUlo",45,68));
console.log("Función area: " + stats3.area("Rombo",100,40));
console.log("Función perimetro: " + stats3.perimetro("Trapecio",100));
console.log("Función perimetro: " + stats3.perimetro("Triangulo",100,345,10));
console.log("Función perimetro: " + stats3.perimetro("CUADRADO",1200));
console.log("Función perimetro: " + stats3.perimetro("RecTanGulo",128,8272));
console.log("Función perimetro: " + stats3.perimetro("rombos",128,8272));
console.log("Función perimetro: " + stats3.perimetro("rombo",750));

