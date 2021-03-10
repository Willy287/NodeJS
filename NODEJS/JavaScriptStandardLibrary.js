/*
* Set Class: Un set es una colecciòn de valores como lo es una matriz. Sin embargo a diferencia
* de las matrices los sets no estan ordenados ni indexados y no permiten duplicafos.
* Un valor es miembro de un set o no es miembro. NO es posible preguntar cuantas veces aparece un valor conjunto
*/
let setOne = new Set();//set vacios
let setTwo = new Set([1,setOne]);//Conjunto
let setThree = new Set(setOne);//Un nuevo set que copia los elementos de set
let setFour = new Set("Missisipi");//COlocaremos 4 elementos: "M", "i", "s", "p"
console.log(setFour.size);
setOne.add(1);
setOne.add("1");
setOne.add(true);
setOne.add([1,2,3]);
setOne.add("Texto");
console.log(setOne.size);
setOne.delete(1);
console.log(setOne.size);
setOne.delete("Texto");
console.log(setOne.size);
setOne.clear();
console.log(setOne.size);
setOne.add("a").add("b").add("c");
console.log(setOne.size);

// Verificaciòn de si un valor es miembro del set

let digitPrimes = new Set([2,3,5,7]);
console.log(digitPrimes.has(2));
console.log(digitPrimes.has("2"));
console.log(digitPrimes.has(70));

let sum = 0;
//Buclets con Sets
for(let prime of digitPrimes){
    sum += prime;
}
console.log(sum);

//Conversiòn a matrices
console.log([...digitPrimes]); 

console.log(Math.max(...digitPrimes));

//foreachr
let product = 1;
digitPrimes.forEach(prime => product *= prime);
console.log(product);

/**
 * Ejercicio: Crear un programa que dada una lista de numeros, 
 * indique por cada numero si este numero es par o impar.
 * 
 */
let setNumeros = new Set([2,5,8,9,3,7,30,45]);
let setNUmerosPares = new Set();
let setNumerosImpares = new Set();
for(let par of setNumeros){
    if(par%2===0){
        setNUmerosPares.add(par);
        console.log("El numero es par");
    }else{
        setNumerosImpares.add(par);
        console.log("El numero es impar");
    }

}
    console.log("Numeros Pares:");
    for(let numero of setNUmerosPares){
        console.log(numero);

    }
    console.log("Numeros Impares:");
    for(let numero of setNumerosImpares){
        console.log(numero);
    }

/**
 * Map Class: Representa un conjunto de valores conocidos como claves, donde cada clave tiene otro valor asociado(o mapeado), un map o mapa es como
 * una matriz pero en lugar de usar un conjunto de numeros enteros secuenciales como claves, los mapas nos permiten usar valores arbitrarios 
 * como indices.
 * 
 */
let mapOne = new Map();//Empty Map o Map vacio
let mapTwo = new Map([ //Un nuevo mapa inicializado con claves de tipo String y mapeadas a numeros
    ["one",1],
    ["two",2]
]);
let mapThree = new Map(mapTwo);//Esto es una copia de mapTwo
let obj = {x:1,y:2};
let mapFour = new Map(Object.entries(obj));//Igual a new Map([["x",1],["y",2]])


let mapFive = new Map();
console.log(mapFive.size);

mapFive.set("one",1);
mapFive.set("two",2);
console.log(mapFive.size);

console.log(mapFive.get("two"));
mapFive.set("one",true);
console.log(mapFive.get("one"));

console.log(mapFive.has("one"));
console.log(mapFive.has(true));//El metodo has solo busca claves

mapFive.delete("one");
console.log(mapFive.size);
mapFive.clear();
console.log(mapFive.size);

mapFive.set("one",1).set("two",2).set("three",3);
console.log(mapFive.size);

let mapSix = new Map();
mapSix.set({},1);
mapSix.set({},2);
console.log(mapSix.size);
console.log(mapSix.get({}));
mapSix.set("one",undefined);
console.log(mapSix.get("one"));
console.log(mapSix.get("two"));

let mapSeven = new Map();

mapSeven.set("one",1).set("two",2).set("three",3);
console.log([...mapSeven]);
for(let [key,value] of mapSeven ){
    console.log(` llave ${key} - valor ${value}`);
}

//Traemos las keys y las convertimos en un arreglo
console.log([...mapSeven.keys()]);
//Traemos los values del map 
console.log([...mapSeven.values()]);
console.log([...mapSeven.entries()]);
//Iterando con forEach()
mapSeven.forEach((key,value)=> console.log(`llave: ${key} - valor: ${value}`));

/**
 * Ejercicio con map:
 * Se seleccionaron 3 estudiantes de un salon, cada uno con sus respectivas notas que obtuvo a lo largo del periodo. Calcular el promedio
 * de cada uno y posteriormente el promedio total y mostar esta informaciòn.
 * 
 */
let notasPrimerAlumno = new Set([3,2,5,1,8]);
let notasSegundoAlumno = new Set([1,5,6,7,9]);
let notasTercerAlumno = new Set([4,10,8,6,5]);
let notasAlumnos = new Map([
    [1,notasPrimerAlumno],
    [2,notasSegundoAlumno],
    [3,notasTercerAlumno]
]);
let sumaNotas = 0;
let promedioTotal = 0;
for(let [key,value] of notasAlumnos){
    for(let val of value){
        sumaNotas += val;
    }
    let mapPromedio = new Map();
    mapPromedio.set(1,sumaNotas/5);
    console.log(` Promedio Estudiante ${key} - ` + mapPromedio.get(1));
    promedioTotal += mapPromedio.get(1);
}
console.log("Promedio Total: " + promedioTotal);