/**
 * Modulos de Node:
 * 1. https://www.npmjs.com/package/object.assign 
 * 
 * Buffers
 * Es un tipo de dato que nos ayuda a leer datos de archivos o de la red, buffer es una secuencia de bytes
 * en lugar de una secuencia de caracteres. Buffer es una subclase de la clase Unit8Array. Buffer esta
 * diseñado para operar con cadenas de JavaScript, esto significa que se pueden inicializar a partir de cadenas
 * de caracteres o convertirse a cadenas de caracteres.
 * 
 * Caracteristicas del Buffer:
 * 1. Asigna a cada caracter un numero entero.
 * 
 * Las codificaciones admitidas por un buffer de nodejs
 * 1. utf-8: Valor por defecto del Buffer
 * 2. Unicode:
 * 3. UTF-16LE: Unicode de 2 bytes
 * 4. Latin-1: Es para idiomas de Europa Occidental
 * 
 * 5. ASCII: Codificación de la tabla asci, 7 bits
 * 6. Hexadecimal: Convierte cada byte en un par de digios hexadecimales de asci
 * 7. Base64: Convierte cada secuencia de 3 bytes en una secuencia de 4 caracteres ASCII.
 */
console.log(process.argv);

let buffer = Buffer.from([0x41, 0x42, 0x43]);
console.log(buffer.toString());
console.log(buffer.toString('hex'));

let computer = Buffer.from('IBM 3111', 'ASCII');
console.log(computer.toString('ascii'));

console.log(computer.subarray(0, 3).map(x => x + 1).toString());

for (let i = 0; i < computer.length; i++) {
    computer[i]--;
}
console.log(computer.toString('ascii'));

let ceros = Buffer.alloc(1024);
console.log(ceros);

let unos = Buffer.alloc(1028, 1);
console.log(unos);

let patterns = Buffer.alloc(1024, 'DBEF', 'hex');
console.log(patterns);

const { Socket } = require('dgram');
/**
 * Eventos 
 */
const eventEmitter = require('events');
const net = require('net');

let server = new net.Server();

console.log(server instanceof eventEmitter)

server.on('connection', socket => {
    socket.end('Hello World!!!', 'utf-8');
});

/**
 * Streams
 * Readable: Un stream legible, streams fuentes de datos, es decir, generar una fuente. Devuelve un fs.createReadStream
 * Writable: Receptores o destinatarios de datos. Devuelve un fs.createWriteStream
 * Tuplex: Combinan los dos anteriores(Readable y Writtable)
 * Transforms: Transformadores, pueden leer y escribir pero se diferencian de los tuplex en que estos datos
 * que se leen y se escriben en un flujo de datos se transforman solo en legibles.
 */
const stream = require('stream');
const fs = require('fs');

function pipeFileToSocket(fileName, socket) {
    fs.createReadStream(fileName).pipe(socket);
}

/**
 * Process
 */
console.log(process.argv);
console.log(process.arch); // Nos muestra la arquitectura de nuestra CPU
console.log(process.cwd()); // Directorio de trabajo actual
console.log(process.cpuUsage()); // Reporta el uso de la CPU
console.log(process.env);
const os = require('os');
console.log(os.arch());
console.log(os.cpus());
console.log(os.type());
