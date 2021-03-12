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
let count = 0;
for(let [key,value] of notasAlumnos){
    for(let val of value){
        sumaNotas += val;
        count ++;
    }
    let mapPromedio = new Map();
    mapPromedio.set(1,sumaNotas/5);
    console.log(` Promedio Estudiante ${key} - ` + mapPromedio.get(1));
    promedioTotal += mapPromedio.get(1);
}
console.log("Promedio Total: " + promedioTotal);

////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Arrays Typeds: LOs elementos de una Typed Array son todos numeros. Permiten especificar el tipo y el tamaño de lo numeros que se almacenaran
 * en la matriz cuando se crea y esa longitud nunca puede cambiar. LOs elementos de ua matriz con tipo siempre se inicializan en 0 cuando se
 * crean.
 * 
 */

let bytes = new Uint8Array(1024);//1024 bytes
let matriz = new Float64Array(9);//Matriz 3x3
let point = new Int16Array(3);//Un punto en un espacio de 3d
let rgba = new Uint8ClampedArray(4);//Un valor de pixel de RGBA de 4 bytes

let white = Uint8ClampedArray.of(255,255,255,0);//Creamos el color blanco
let ints = Uint32Array.from(white);//Los mismos 4 numeros como enteros

console.log(Uint8Array.of(1.23,2.99,45000));

//Referencia Opaca
let buffer = new ArrayBuffer(1024*1024);
console.log(buffer.byteLength);//Imprime el tamaño en bytes del buffer

let asBytes = new Uint8Array(buffer);
let asInts = new Int32Array(buffer);

/* 
 * Regular Expressions
 * Una expresión regular es un objeto que describe un patrón textual.
 */
//Utilizando literales
let pattern = /s$/i;

//Utilizando contructor de RegExp
let pattern1 = new RegExp("s$");  // $ metacaracter especial Bandera (flag en inglés). Va a coincidir con el final de una cadena

/*
 * Metacaracteres en expresiones reguales:
 *
 *     ^  $  .  *  +  ?  =  !  :  |  /  \   ( )  [ ] { }
 * 
 * Caracteres de puntuación  ""  @,  no tienen significado especial.
 * 
 * Clases de caracteres:
 * Una clase de caracter coincide con cualquier caracter que contenga los corchetes.
 */

let pattern2 = /[abc]/;  // Coincide con cualquiera de las letras a, b o c.

let pattern3 = /[^abc]/; // Coincide con cualquier caracter que no sea a, b o c.

let pattern4 = /[a-z]/;  // Coincide con cualquier caracter en minúscula del alfabeto latino.

let pattern5 = /[a-zA-Z]/;   // Coincide con cualquier caracter en minúscula o mayúsculas del alfabeto latino.

let pattern6 = /[a-zA-Z0-9]/;  // Coincide con cualquier caracter en minúscula o mayúsculas y digitos del alfabeto latino 

let pattern7 = /[...]/;  //Coincide con cualquier caracter entre corchetes

let pattern8 = /[^...]/;  //Coincide con cualquier caracter que no este entre corchetes

/*
 * Repeticiones en expresiones regulares
 * Son patrones más complejos que utilizan una sintaxis que especifica cuántas veces se puede 
 * repetir un elemento.
 * {n,m}: Esto significa que coincide con el elemento anterior al menos n veces, pero no más de m veces.
 * {n,} : Esto significa que coincide con el elemento anterior n o más veces.
 * {n}  : Esto significa que coincide exactamente con n apariciones del elemento anterior.
 * ?    : Esto significa que coincide con cero o una apariciones del elemento anterior. Esto significa que el elemento anterior es opcional.
 *        Esto es similar a colocar: {0,1}
 * +    : Esto significa que coincide con una o más ocurrencias del elemento anterior. Esto equivale a: {1,}
 * *    : Esto significa que coincide con cero o más ocurrencias del elemento anterior. Esto equivale a: {0,}
 */

let pattern9 = /\d/;  // Coincide con un dígito entre 0 y 9.

let pattern10 = /\d\d/;  // Coincide con dos dígito entre 0 y 9.

let pattern11 = /\d{2,4}/; //Coincide ente 2 y no más de 4 digitos.

let pattern12 = /\w{3}\d?/; //Coincide exactamente con 3 caracteres de palabras  y 1 dígito opcional.

let pattern13 = /\s+java\s+/; //Coincide con la Java con uno o màs espacios antes y despuès.

let pattern14 = /[^(]*/; //Coincide con 0 o màs caracteres que no sean parentesis abiertos.

/**
 * Flags
 * 
 * g : Esto significa global, es decir que pretendemos usarla para encontrar todas las coincidencias dentro de una cadena
 * en lugar de simplemente encontrar la primera coincidencia.
 * 
 * i: Especifica que la coincidencia no debe distinguir entre mayusculas y minusculas.
 * 
 * m: Especifica que la coincidencia debe realizarse en modo multilinea.
 * 
 * s: Es util cuando se trabaja con texto que incluye nuevas lineas
 * 
 * u: Significa Unicode. Esto hace que la expresiòn regular coincida con los puntos unicode completos en lugar de coincidir con los valores de 16 bits, si no se usa
 *    esta bandera, las expresiones regulares no funcionaran bien contextos que utilizan emojis y otros caracteres como caracteres chinos.
 * 
 * y: Esta bandera indica que la expresiòn regular es sticky (pegajosa) debe coincidir al principio de una cadena o al primer caracter que sigue a la coincidencia anterior.
 * 
 * 
 */

/**
 * Metodos de String para coincidencia de patrones.
 * 
 * search: Toma un argumento de expresiòn regular y devuelve la primera subcadena coincidente si no encuentra coincidencias. NO admite busquedas globales, por
 * lo tanto ignora la bandera g.
 * 
 * replace: Realiza una operaciòn de busqueda y reemplazo. Como primer argumento toma una expresiòn regular y como segundo, una cadena de reemplazo.
 * 
 * Match: Este metodo toma una expresiòn regular como unico argumento y devuelve una matriz que contiene los resultados de la coincidencia,
 * si no encuentra ninguna coincidencia sera nula
 * 
 */

console.log("JavaScript".search(/script/ui));

console.log("Python".search(/script/ui));

let text = "Javascript";

text.replace(/javascript/gi,"JavaScript");
console.log(text);

let times = "15 times 15 is 225";
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16))); // Transformamos los digitos en hexadecimal

console.log(times.replace(/\d+/gu, n => parseInt(n).toString(2)));

console.log(times.replace(/\d+/gu, n => parseInt(n).toString(8)));

console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16)));
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(32)));

let text1 = "7 plus 8 equals 15";
console.log(text1.match(/\d+/g));
// [7, 8, 15]

/**
 * Match
 * 
 */
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text2 = "Visit my blog as: https://www.profesionalreview.com/2019/05/12/cambiar-procesador-portatil";
let match = text2.match(url);
let fullUrl, protocol, host, path;

if(match != null){
    fullUrl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
}

console.log(`match: ${match}`);
console.log(`fullUrl: ${fullUrl}`);
console.log(`protocol: ${protocol}`);
console.log(`host: ${host}`);
console.log(`path: ${path}`);
console.log(text2.match(url).index);
console.log(text2.match(url).input);


/**
 * Method Split: Este metodo divide la cadena en una matriz utilizando como argumento un separador.
 * */
console.log("1,2,3".split(","));
console.log("1, 2, 3, \n4, 5".split(/\s*,\s*/));

const htmlTag = /<([^>]+)>/;  // < followed by one or more non->, followed by >
"Testing<br/>1,2,3".split(htmlTag); // => ["Testing", "br/", "1,2,3"]
console.log("Testing<br/>1,2,3".split(htmlTag));

//Exercise Regular Expressions

let matchExercise = /[aeiou]+/gi;
let world = "Hola";

console.log(world.match(matchExercise));

/**
 * 
 * Exercises Regular Expressions
 * */

//Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales
let regExp = /[B-D]|[F-H]|[J-N]|[P-T]|[V-Z]+/g;
let world1 = "ABCDLHJIOP";
console.log(world1.match(regExp));

/**
 *  A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, 
    sino extraer determinadas partes de él. Por ejemplo, si una fecha está en el 
    formato "27/11/2012" puede interesarnos extraer los números. 
    Una expresión regular que vale para esta cadena puede ser
 * 
 *  */ 
 let regExp1 = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
 let world2 = "27/11/2012";
 console.log(world2.match(regExp1));
 

/**
 * Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays en javascript.
 * 
 */
 function Euclid_gcd(a, b) {
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
      return [NaN, NaN, NaN];
    }
    
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
      return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
      return false;
    }
    var signX = (a < 0) ? -1 : 1,
      signY = (b < 0) ? -1 : 1,
      x = 0,
      y = 1,
      u = 1,
      v = 0,
      q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a !== 0) {
      q = Math.floor(b / a);
      r = b % a;
      m = x - u * q;
      n = y - v * q;
      b = a;
      a = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }
    return [b, signX * x, signY * y];
  }
  
  console.log(Euclid_gcd(150, 39));


/**
 * Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
 * 
 */
let regExp2 = /(["']).*\1/;
let text3 = "'hola tu' tururú";
console.log(text3.match(regExp2));

/**
 * - Programe una expresión regular que de este texto   "papa" tururú" obtenga ["papa", "pa"]
 */
let regExp3 = /(pa){2}/;
let text4 = "papa tururú";
console.log(text4.match(regExp3));

/**
 * Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
 * 
 */
let regExp4 = /\java\b/;
let text5 = "java es güay";
console.log(text5.match(regExp4));

/**
 * Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
 * 
 */
let regExp5 = /\d+(?= km)/;
let text6 = "11 millas 10 km";
console.log(text6.match(regExp5));

/**
 * Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]
 * 
 */
let regExp6 = /\d+ km/;
let text7 = "11 millas 10 km";
console.log(text7.match(regExp6));

/**
 * Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
 * 
 */
let regExp7 = /(?=\.)\.\d+/;
let text8 = "11.22";
console.log(text8.match(regExp7));

/**
 * Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]
 * 
 */
let regExp8 = /\d{2}(?! km)/;
let text9 = "11 km 12 km 14 m";
console.log(text9.match((regExp8)));

/**
 * ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?
 * 
 */
console.log("hola".match(/HOLA/)); // Devuelve null porque debemos indicarle que la coincidencia no debe distinguir entre mayusculas o minusculas, para que funcione 
                                  // se debe adicionar el flag i
console.log("hola".match(/HOLA/i));

/**
 * Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]
 * 
 */
let regExp9 = /^tu/m;
let text10 = "hola\ntu";
console.log(text10.match(regExp9));

/**
 *DATES AND TIMES:   
 * La clase date es la api de javascript para trabajar con fechas y horas
 * 
 */
let now = new Date(); // Toma la fecha de la maquina local
console.log(now);

let epoch = new Date(0); // Toma el numero de milisegundos desde 1970
console.log(epoch);

let century = new Date(2100, //Año 2100
    0, //enero
    1, //primero del mes 
    2,3,4); //02:03:04.005 hora local
console.log(century);

let century2 = new Date(2100, //Año 2100
    0, //enero
    1 //primero del mes 
); //Deja las horas en 0, media noche
console.log(century2);

/**
 * UTC-Tiempo Universal Coordinado: Es el principal estandar de tiempo por medio del cual el mundo regula los relojes
 * 
 *  */ 
let century3 = Date.UTC(2100,0,1); // Marca de tiempo en milisegundos
console.log(century3);

let century4 = new Date(Date.UTC(2100,0,1)); // Convierte los milisegundos en una fecha normal
console.log(century4);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());

//Metodos GetUTC
console.log(now.getUTCDate());
console.log(now.getUTCDay());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCMinutes());
console.log(now.getUTCMonth());
console.log(now.getUTCSeconds());

//Usar UTC como estandar
console.log(now.getUTCDate());
console.log(now.getUTCDay());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCMinutes());
console.log(now.getUTCMonth());
console.log(now.getUTCSeconds());

// Metodos set de UTC
console.log(now.setUTCDate(20/02/20202));
console.log(now.setUTCFullYear(2030));
console.log(now.setUTCHours(12));
console.log(now.setUTCMilliseconds(230));
console.log(now.setUTCMinutes(50));
console.log(now.setUTCMonth(5));
console.log(now.setUTCSeconds(10));

//Numero de enteros que permite javascript en milisegundos: 8640.000.000.000.000 de milisegundos. Esto equivale a 270.000 años
console.log(now.setTime(now.getTime()+30000));

let startTime = Date.now();

let endTime = Date.now();
console.log(`tiempo de ejecuciòn: ${endTime-startTime}`);

/**
 * Formateo de fechas, convertir los objetos de fecha en cadenas
 * 
 */
let dateText = now.toString();
console.log(dateText);

let dateTextUTC = now.toUTCString();
console.log(dateTextUTC);

/**
 * toIsoString: Transforma la fecha a un formato ISO en texto. 
 * T => Separa la fecha de la salida de la hora
 * Z => Especifica la hora local
 */
let dateISOText = now.toISOString();
console.log(dateISOText); // Este formato imprime año-mes-dia hora:minutos:segundos.ms(milisegundos)

let dateUTC = Date.UTC(2021,3,2);
console.log(dateUTC);

// Hora en texto local
console.log(now.toLocaleString());

// Omite la hora
console.log(now.toDateString());

console.log(now.toLocaleDateString());
console.log(now.toTimeString());
console.log(now.toLocaleTimeString());

// Transformaciòn de cadenas a fechas

let dateTransform = Date.parse('2012/06/23');
console.log(dateTransform);

/**
 * Ejercicio utilizando fechas:
 * Dados tres valores (año, mes y dia), convertir esta informaciòn en una fecha y posteriormente converir esta fecha en formato UTC y formato ISO
 * 
 */
let year = 1992;
let month = 06;
let day = 04;

let dateBirth = new Date(year,month,day);
console.log("Fecha normal: " + dateBirth);
console.log("Fecha ISO: " + dateBirth.toISOString());
console.log("Fecha UTC: " + dateBirth.toUTCString());

//Imprima año , mes y dia a partir de esta fecha
console.log("Anio : " + dateBirth.getFullYear());
console.log("Mes : " + dateBirth.getMonth());
console.log("Dia : " + dateBirth.getDay());

// Convertir ahora la fecha en formato UTC e imprimir por pantalla
let dateUTC1 = Date.UTC(1992,07,04,0 , 0, 0, 0);
console.log("Fecha UTC: " + dateUTC1);

//Calcular los dias transcurridos entre su fecha de nacimiento y la fecha actual
let dateActual = new Date();
console.log("Fecha Actual: " + dateActual.toLocaleDateString());

let milisecondsDay = 24 * 60 * 60 * 1000;
console.log("Miliseconds for Day: " + milisecondsDay);
let milisecondsElapsed = Math.abs(dateBirth - dateActual);
console.log("Diference in miliseconds: " + milisecondsElapsed);
let daysElapsed = Math.round(milisecondsElapsed / milisecondsDay);
console.log("Days Elapsed: " + daysElapsed);

//Por ultimo calcule su edad a partir de las dos fechas dadas e imprima esta informaciòn en dias, horas, minutos y milisegundos

let yearsWilmer = dateActual.getFullYear() - dateBirth.getFullYear();
//Esta operaciòn se realiza para detectar si la persona aùn no ha cumplido un año o es un bebe, de tal manera que si la persona nacio en esta año 
//la edad es 0
dateBirth.setFullYear(dateActual.getFullYear());
if(dateActual < dateBirth){
    --yearsWilmer;
}
console.log("Years Wilmer: " + yearsWilmer);

/**
 * Ejercicio 5 Librerias JavaScript: Date and Time
 * 
 */
 function agregarMinutoFecha(fecha, minuto) {
    //now4.setTime(now4.getTime()+30000);
    fecha.setTime(fecha.getTime() + minuto * 60000);
    return fecha.toLocaleString();
}
let now4 = new Date();
let fecha2 = new Date(2021, 2, 12, 11, 40);
console.log(fecha2);
console.log(agregarMinutoFecha(now4, 20));
/**
 * Funcion que da un saludo al usuario nombre, dependiendo del parametro de fecha
 * @param {*} fecha2 fecha para el saludo
 * @param {*} nombre nombre del usuario
 * @returns saludo
 */
function saludo(fecha2, nombre) {
    let greeting = "";
    let greeting2 = "";
    if (fecha2.toLocaleTimeString('es-CO').match(/p.\sm/gi) == null) {
        greeting = "Buenas días";
    } else if (fecha2.toLocaleTimeString('es-CO', { hour12: false }).match(/\d{2}/)[0] < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
    greeting2 =
        fecha2.toLocaleString('es-CO', {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        }) +
        " y son las " + fecha2.getHours() + " horas y " + fecha2.getMinutes() + " minutos";
    return `${greeting}, ${nombre}. Hoy es ${greeting2} de ${greeting.match(/(?<=Buenas\s)\w*[^s]/)}`;
}
console.log(saludo(new Date(2021,2,2,19,23), "Wilman"));

/**
 * Excepciones en javascript
 * Los objetos error tienen dos propiedades, mensaje y el nombre
 * Se pueden definir las propias subclases de error
 * Siempre manejar las excepciones con trhow
 *
 */
class HTTPError extends Error {
    constructor(status,statusText,url){
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }

    get name(){
        return "HTTPError";

    }
}

let error = new HTTPError(404,"Not Found", "http://example.com/");
console.log(error.status);
console.log(error.message);
console.log(error.name);


/**
 * Subclases de error propias: AritmeticError
 * 
 */
class AritmeticError extends Error {
    constructor(codigo, descripcion){
        super(`${codigo} ${descripcion}`);
        this.codigo = codigo;
        this.descripcion = descripcion;

    }

    get name(){
        return "Error, no se puede convertir cadena a numero";
    }
}
let error2 = new AritmeticError(2,"Error en operaciòn matematica");
console.log(error2.codigo);
console.log(error2.message);
console.log(error2.name);


/**
 * Subclases de error propias: AritmeticError
 * 
 */
class ParamError extends Error {
    constructor(codigo, descripcion, parametro){
        super(`${codigo} ${descripcion} ${parametro}`);
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.parametro = parametro;
    }

    get name(){
        return `EL parametro ${this.parametro} no puede estar vacio ni nulo`;
    }
}
let error3 = new ParamError(4,"Error de parametros invalidos", "cedula");
console.log(error3.codigo);
console.log(error3.message);
console.log(error3.name);

function validateCedula(cedula){
    if(cedula == ""){
        throw new ParamError(2,"Error de parametros invalidos", "cedula");
    }
}
try {
    validateCedula("");
} catch (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
}

function validateNumero(cadena){
    if(isNaN(cadena)){
        console.log("entra");
        throw new AritmeticError(3,"Error de conversiòn de campo numerico");
    }
    console.log("Valor correcto");
}
try {
    validateNumero("hola");
} catch (error1) {
    console.error(error1.name);
    console.error(error1.message);
    console.error(error1.stack);
}

/**
 * Serializaciones:
 * Cuando se va a transmitir datos a traves de la red, necesitamos convertir estructuras de datos en cadenas y para esto necesitamos serializar.
 * La mejor forma para serializar estructuras de datos es utilizar JSON
 * ¿Que admite JSON? cadenas, numeros primitivos(enteros, double, float...), matrices y objetos javascript
 * ¿Que no admite? Maps, Sets, objetos de tipo RegExp(regular expression), typed arrays y dates
 * Funciones para serializar y deserializar:
 * JSON.stringify(); Esta funciòn nos permite serializar
 * JSON.parse(); Esta funciòn nos permite deserializar
 */

let object = {s:"",n:0,a:[true,false,null]};
let serialization = JSON.stringify(object);
let deserialization = JSON.parseInt(serialization);
console.log("Objeto serializado: " + serialization);
console.log("Objeto deserializado" + deserialization);

 console.log(JSON.stringify(object,null,2)); // recomendado 2 espacios de sangria
 console.log(JSON.parse(JSON.stringify(object,null,2))); // El metodo parse ignora los espacios (sangria) que se le asignan en string

 /**
*Api de internacionalización: nos permite formatear numeros, que se muestren como formato de moneda, formato de porcentajes
, ect
*/
let euro = Intl.NumberFormat("es",{style:"currency",currency:"EUR"});
console.log(euro.format(10));