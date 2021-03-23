/**
 * Ejercicio NodeJS:
 * Escriba un nodo. Programa JS que muestra la hora local del servidor.
 * Sugerencia: Necesita módulo npm -> strftime
 * Escriba un nodo. JS que información de búsqueda en .txt archivo y le devuelve la cantidad de coincidencias 
 * que se encuentran.
 * Si buscas sobre "John", y en tus archivos txt son 2 John, debe devolver 2
 * Sugerencia: Puede intentar guardar todos los datos en una matriz y compararlos con search..
 * 
 */

/**
 * 1 tarea
 */
let strftime = require('strftime');
console.log(strftime('%B %d, %Y %H:%M:%S'));

/**
 * 2 tarea
 * 
 */
var nameToSearch = "hola";


function searchWords(){

let nameLine = require('line-by-line');
let lrName = new nameLine('./Archivito.txt');

 lrName.on('line', function (lineInNameFile) {
    FileSearch(nameToSearch);
 });     


}

 //Function to search in list file

let  FileSearch = function (searchString){

    let LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('./Archivito.txt');

    lr.on('line', function (lineInListFile) {
        let arreglo = lineInListFile.split(nameToSearch);
        console.log(`Palabra encontrada ${arreglo.length-1} veces`);
     });

} 

searchWords();