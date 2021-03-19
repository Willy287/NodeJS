function cuadrado(x) {
    return x * x;
}

console.log('Antes');
console.log(cuadrado(4));
console.log('Después');

function cuadradoWithAsync(x, callback) {
    setTimeout(() => callback(x * x), 100);
}

console.log('-------------------------------------');
console.log('Antes');
console.log(cuadradoWithAsync((4), resultado => console.log(`result ${resultado}`)));
console.log('Después');

/**
 * Eliminar el detalle de las dependencias en los callbacks
 * 
 */
let seconds = 30;

function comenzarCuentaRegresiva(callback) {
    setInterval(() => {
        seconds--;
        callback();
    }, 1000);
}

function mostrarSegundos() {
    console.log(seconds);
}

comenzarCuentaRegresiva(mostrarSegundos);