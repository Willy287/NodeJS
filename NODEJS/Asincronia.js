/**
 * Fundamentalmente la programación asincronica en JavaScript se realiza con devoluciones de llamada (Callback)
 * Callback: Es una función que se crea y luego se pasa como argumento a otra función.
 * Pero esa otra función ejecuta o invoca(devuelve la llamada) a nuestra función cuando se cumple una condición 
 * o se produce algún evento. Este evento es un evento asincronico.
 * 
 * La invocación de la función de llamada notifica la condición o el evento.
 *  
 */




/**
 * La evolución del callback
 */

/**
 * Menejo de errores con callbacks
 * Inconsistencia: No se ejecuta el segundo lector
 */

//Función que nos sirve para leer archivos

import { readFile } from 'fs';

const CACHE = new Map();

function lecturaInconsistente(nombreArchivo, callback) {
    if (CACHE.has(nombreArchivo)) {
        callback(CACHE.get(nombreArchivo));
    } else {
        readFile(nombreArchivo, 'utf-8', (err, data) => {
            CACHE.set(nombreArchivo, data);
            callback(data);
        });
    }
}

function crearLectorArchivo(nombreArchivo) {
    const LISTENERS = [];
    lecturaInconsistente(nombreArchivo, valor => LISTENERS.forEach(listener => listener(valor)));
    return { onDataReady: listener => LISTENERS.push(listener) };
}

const LECTOR1 = crearLectorArchivo('data.txt');
LECTOR1.onDataReady(data => {
    console.log(`Primera llamada a data: ${data}`);
    const LECTOR2 = crearLectorArchivo('data.txt');
    LECTOR2.onDataReady(data => console.log(`Segunda llamada a data: ${data}`));
});

/**
 * (Callback hell) cuando se hace abuso de los callbacks de multiples funciones
 * 
 */
function comprarEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 1;
    callback(empanadas);
}

function comprarTresEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 3;
    callback(empanadas);
}

function comprarCincoEmpanadas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 5;
    callback(empanadas);
}

let empanadas = 0;

comprarEmpanadas(empanadas, primeraCompra => {
    console.log(`Empanadas: ${primeraCompra}`);
    //Me ha gustado!! quiero tres más!
    comprarTresEmpanadas(primeraCompra, segundaCompra => {
        console.log(`Empanadas: ${segundaCompra}`);
        //Me han gustado! quiero cinco más!!
        comprarCincoEmpanadas(segundaCompra, terceraCompra => {
            console.log(`Empanadas ${terceraCompra}`);
        });
    });
});

/**
 * Promesas: (Promises) en JS 
 * Las promesas se crearon en el estandar ES6.
 * Significa que esperamos que se cumpla la promesa y si no se cumple es porque se ha rechazado
 * la promesas. Si la promesa no devuelve nada a esto se le llama un reject.
 * Estado: Resuleto - Rechazado
 */

function comprarEmpanadasConPromesas(empanadasActuales) {
    const empanadas = empanadasActuales + 1;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

function comprarTresEmpanadasConPromesas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 3;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

function comprarCincoEmpanadasConPromesas(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 5;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

let empanadasPromesas = 0;

comprarEmpanadasConPromesas(empanadasPromesas)
    .then(
        resultado => {
            console.log(`Empanadas: ${resultado}`);
            //Ahora quiero 3 empanadas más
            comprarTresEmpanadasConPromesas(resultado)
                .then(
                    resultado => {
                        console.log(`Empanadas: ${resultado}`);
                        //Ahora quiero cinco empanadas!!
                        comprarCincoEmpanadasConPromesas(resultado)
                            .then(
                                resultado => {
                                    console.log(`Empanadas: ${resultado}`);
                                }
                            );
                    }
                );
        }
    );

/**
 * Async Await
 * 
 */
function comprarEmpanadasConAsync(empanadasActuales) {
    const empanadas = empanadasActuales + 1;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

function comprarTresEmpanadasConAsync(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 3;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

function comprarCincoEmpanadasConAsync(empanadasActuales, callback) {
    const empanadas = empanadasActuales + 5;
    let promesa;
    return promesa = new Promise(resolve => resolve(empanadas));
}

let empanadasAsync = 0;

async function comprar() {
    const primerCompra = await comprarEmpanadasConAsync(empanadasAsync);
    console.log(`Empanadas: ${primerCompra}`);
    const segundaCompraAsync = await comprarTresEmpanadasConAsync(primerCompra);
    console.log(`Empanadas: ${segundaCompraAsync}`);
    const terceraCompraAsync = await comprarCincoEmpanadasConAsync(segundaCompraAsync);
    console.log(`Empanadas: ${terceraCompraAsync}`);
}

comprar();

