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
for(let par of setNumeros){
    if(par%2===0){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }
}