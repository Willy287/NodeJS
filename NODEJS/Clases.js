/**
 * Clases en JavaScript
 * En JS una clase es un conjunto de objetos que heredan propiedades del mismo objeto prototipo.
 * El objeto prototipo es la caracteristica general de una clase.
 */

//Forma antigua de crear clases en JS.
//Esto es un constructor que inicializa nuevos objetos.
function Range(from, to) {
    this.from = from;
    this.to = to;
}
//Funciona para rangos textuales, de fecha y númerico. Devuelve verdadero si x está en el rango.
Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    [Symbol.iterator]: function* () { //Función generadora que hace iterables los rangos de nuetsra clase.
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};

let range = new Range(1, 10);
console.log(range.includes(3));
console.log(range.includes(30));
console.log(range.toString());
console.log([...range]);

//Forma actual de crear clases en JS

class RangeCurrent {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    includes(x) {
        return this.from <= x && x <= this.to;
    }
    *[Symbol.iterator]() { //Función generadora que hace iterables los rangos de nuetsra clase.
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
    toString() {
        return "(" + this.from + "..." + this.to + ")";
    }
}
let rangeCurrent = new RangeCurrent(1, 10);
console.log(rangeCurrent.includes(3));
console.log(rangeCurrent.includes(30));
console.log(rangeCurrent.toString());
console.log([...rangeCurrent]);

class Span extends RangeCurrent {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

let span1 = new Span(1, 10);
console.log(span1.includes(5));
console.log(span1.toString());

//Función como expresión
let square = function (x) {
    return x * x;
}
console.log(square(6));

let Square = class {
    constructor(x) {
        this.area = x * x;
    }
}

console.log(new Square(4).area);

let squareObject = new Square(7);
console.log(squareObject.area);
/**----------------------------------------------------------------------------------- */
/**
 * Ejemplos de clases propios WILMER GONZALEZ
 * 
 */

//Forma antigua de crear clases
function Edad(firstname, lastname, birthday) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(birthday);
}

Edad.prototype = {
    getEdad: function () {
        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

let edad = new Edad("Wilmer", "Gonzalez", "04-07-1992");
console.log("Edad utilizando la forma antigua: " + edad.getEdad());


//Forma Actual de crear clases
class Person {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(birthday);
    }
    getAge() {
        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let person = new Person("Wilmer", "Gonzalez", "04-07-1992");
console.log("Edad utilizando la forma nueva: " + person.getAge());

//Función como expresión
let age = function (birthday) {
    let date = new Date(birthday);
    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

console.log(age("04-07-1992"));

let ageWilmer = class {
    constructor(firstname, lastname, birthday) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = new Date(birthday);
    }
    getAge() {
        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
console.log("Edad utilizando función como expresión: " + new ageWilmer("Wilmer", "Gonzalez", "04-07-1992").getAge());

class Cuadrado {
    static calcularCuadrado(num){
        return num * num;
    }
    static texto = "Hola";
    #propiedadPrivada = 0;
    metodoAbstracto(){
        throw new Error("Metodo Abstracto");
    }
}

let cuadrado2 = Cuadrado.calcularCuadrado(7);
let cuadrado3 = Cuadrado.texto;

console.log(cuadrado3);

let cuadrado4 = new Cuadrado();
console.log(cuadrado4.propiedadPrivada);





