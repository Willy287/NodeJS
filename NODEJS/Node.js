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

console.log(process.argv); // Una matriz de argumentos de la línea de comandos.
console.log(process.arch); // La arquitectura de la CPU: "x64", por ejemplo.
console.log(process.cwd()); // Devuelve el directorio de trabajo actual.
//console.log(process.chdir()); // Establece el directorio de trabajo actual.
console.log(process.cpuUsage()); // Informa el uso de la CPU.
console.log(process.env); // Un objeto de variables de entorno.
console.log(process.execPath); // La ruta absoluta del sistema de archivos al ejecutable del nodo.
console.log(process.exit()); // Termina el programa.
console.log(process.exitCode); // Un código entero que se informará cuando se cierre el programa.
//console.log(process.getuid()); // Devuelve el ID de usuario de Unix del usuario actual.
console.log(process.hrtime.bigint()); // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
//console.log(process.kill()); // Envía una señal a otro proceso.
console.log(process.memoryUsage()); // Devuelve un objeto con detalles de uso de memoria.
//console.log(process.nextTick()); // Como setImmediate (), invoca una función pronto.
console.log(process.pid); // El ID de proceso del proceso actual.
console.log(process.ppid); // El ID del proceso padre.
console.log(process.platform); // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
console.log(process.resourceUsage()); // Devuelve un objeto con detalles de uso de recursos.
//console.log(process.setuid()); // Establece el usuario actual, por id o nombre.
console.log(process.title); // El nombre del proceso que aparece en los listados `ps`.
console.log(process.umask()); // Establece o devuelve los permisos predeterminados para nuevos archivos.
console.log(process.uptime()); // Devuelve el tiempo de actividad de Node en segundos.
console.log(process.version); // Cadena de versión de Node
console.log(process.versions) // Cadenas de versión para las bibliotecas de las que depende Node.

/**
 * Sistema Operativo
 */
console.log(os.arch());
console.log(os.constants);
console.log(os.cpus());
console.log(os.endianness());
console.log(os.EOL);
console.log(os.freemem());
console.log(os.getPriority());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
//console.log(os.setPriority());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());

/**
 * Modulo FS (FileSystem): Es una API para trabajar con archivos y directorios
 * La mayoria de sus funciones son asincronas
 * fs.readFile() => fs.readFileSync()
 * fs.promises.readFile() Después de la versión 10 de NodeJS
 * Paths: 
 * 
 */

console.log(process.cwd());
console.log(__filename); // Ruta absoluta del archivo donde nos encontramos trabajando, es decir del archivo que contiene el codigo actual
console.log(__dirname); // Ruta del directorio que contiene _fileName

console.log(os.homedir());

const PATH = require("path");
console.log(PATH.sep); // Slash de la ruta según el sistema operativo

let directorio = "src/pkg/test.js";
console.log(PATH.basename(directorio));
console.log(PATH.extname(directorio));
console.log(PATH.dirname(directorio));
console.log(PATH.basename(path.dirname(directorio)));

/**
 * Normalize: corrige las rutas
 */
console.log(PATH.normalize("a/b/c../d/"));
console.log(PATH.normalize("a/./b"));
console.log(PATH.normalize("//a//b//"));

//Joins
console.log("src", "pkg", "t.js");

// Resolve
console.log(PATH.resolve());
console.log(PATH.resolve("t.js"));
console.log(PATH.resolve("/tmp", "t.js"));
console.log(PATH.resolve("/a", "/b", "t.js"));

console.log(PATH.posix);

/**
 * Lectura de archivos
 */
const fs2 = require('fs');

let buffer2 = fs.readFileSync("fs.txt");
console.log(buffer2);

let text = fs2.readFileSync("fs.txt", "utf-8");
console.log(text);

//Lectura de forma asincrona con callbacks
fs2.readFile("fs.txt", (err, buffer) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`OK: ${buffer}`);
    }
});

// Lectura de archivos con promises
fs.promises.readFile("fs.txt", "utf-8")
    .then(processFileText => {
        console.log(processFileText);
    }).catch(handledReadError => {
        console.log(handledReadError);
    });

//Lectura de archivo con Async Await

async function processText(fileName, encoding = "utf-8") {
    let text2 = await fs2.promises.readFile(fileName, encoding);
    console.log(text2);
}

processText("fs.txt");

/**
 * Salida estandar a nivel de contenedores:
 * Regala General: En contenedores lanzar los logs por la salida estandar (stdout)
 * 
 * Herramientas de monitorización:
 * 
 * Kibana
 * Cloud Trail
 * Grafana: https://hub.docker.com/r/grafana/grafana
 * Prometheus: https://hub.docker.com/r/prom/prometheus
 * 
 */

function printFile(fileName, encoding = "utf-8") {
    fs.createReadStream(fileName, encoding).pipe(process.stdout);
}

printFile("fs.txt");

// Escribir archivos

// Forma Sincrona
let configuracion = { name: "Wilmer", apellido: "Gonzalez" };
fs.writeFileSync(PATH.resolve(__dirname, "configuracion.json"), JSON.stringify(configuracion));

// Forma Sincrona con Callback
fs.writeFile(PATH.resolve(__dirname, "configuracion2.json"), JSON.stringify(configuracion), err => {
    if (err) {
        console.log(err);
    } else {
        console.log("El archivo ha sido escrito exitosamente");
    }
});

// Forma Promises
fs.promises.writeFile(PATH.resolve(__dirname, "configuracion3.json"), JSON.stringify(configuracion))
    .then(() => {
        console.log("El archivo ha sido escrito exitosamente");
    }).catch(handledWriteError => {
        console.log(handledWriteError);
    });

// Forma Sync Await
//Regla: Siempre se debe colocar sobre try-catch
async function writeFileText(nameFile = PATH.resolve(__dirname, "configuracion4.json"), config = JSON.stringify(configuracion)) {
    try {
        await fs.promises.writeFile(nameFile, config);
        console.log("El archivo ha sido escrito exitosamente");
    } catch (error) {
        console.log(error);
    }

};

writeFileText();

// Agregar al final del archivo de forma asincrona con callback
fs.appendFile(PATH.resolve(__dirname, "configuracion.json"), "Word-config-extra", err => {
    if (err) {
        console.log(err);
    } else {
        let configuracionText = fs.readFileSync(PATH.resolve(__dirname, "configuracion.json"), "utf-8");
        console.log(configuracionText);
    }
});

/**
 * Se debe elegir sincrono cuando el archivo es muy pequeño o cuando hay muchos recursos en el servidor
 * Se debe elegir asincrono cuando el archivo es grande y cuando hay pocos recursos en el servidor
 * Se debe elegir si usar callbacks, promises o async await
 */

// fs.appendFileSync

// fs.promises.appendFile
// fs.write con async await y promises

/**
 * Metadatos de archivos
 */
let stats = fs.statSync("configuracion.json");
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size); // Nos retorna el tamaño del archivo en bytes
console.log(stats.atime); // Nos registra la fecha de la ultima vez que fue leido el archivo
console.log(stats.mtime); // Nos registra la ultima vez que fue modificado el archivo
console.log(stats.uid); // Nos retorna el id del usuario dueño del archivo
console.log(stats.gid); // Nos retorna el id del grupo dueño del archivo
console.log(stats.mode.toString(8)); // Imprime un octal en string de los permisos del archivo

/**
 * Copia de archivos
 */
fs.copyFileSync("configuracion.json", "configuracionCopia.json");

/**
 * Escribir de 0 a 100 hacia abajo
 */
let output = fs.createWriteStream("configuracion.json");
for (let i = 0; i <= 100; i++) {
    output.write(`${i}\n`);
}

console.log(output.end());

/**
 * HTTP, HTTPS, HTTP2
 * Estos son los modulos por excelencia de node que implementan protocolos HTTP, tienen
 * funciones de bajo nivel.
 * 1. Crear un nuevo objeto de servidor
 * 2. Llamar al listener para que se escuchen solicitudes de un puerto especifico
 * 3. Registrar un controlador de eventos para eventos de request
 * 
 */
const http = require('http'); // Usar HTTPS si se tiene un certificado
const url = require('url'); // Para analizar Urls
const path = require('path'); // Para manipular rutas de sistemas de archivos
const fs5 = require('fs'); // Para leer archivos

function serve(rootDirectory, port) {
    let serv = new http.Server(); // Se crea un nuevo servidor http
    serv.listen(port); // Escucha en el puerto especificado
    console.log(`Listening on port: ${port}`);

    serv.on("request", (request, response) => { // Cuando lleguen solicitudes las manipulamos con esta función
        let endpoint = url.parse(request.url).pathname; // Obtiene la ruta de la url que trae la solicitud.
        // se ignora los parametros de consulta que se le agregue
        if (endpoint === "/test/mirror") {
            response.setHeader("Content-Type", "text/plain; charset=UTF-8");
            response.writeHead(200); //Especifica el codigo de estado de la respuesta (200 - OK)
            response.write(`${request.method} ${request.url} HTTP/${ // Esto es el cuerpo de la respuesta
                request.httpVersion
                }\r\n`);
            let headers = request.rawHeaders;
            for (let i = 0; i < headers.length; i += 2) {
                response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
            }
            response.write("\r\n"); // Finalizar los headers con una linea en blanco
            request.pipe(response); // Copiamos cualquier cuerpo del request al cuerpo del response, dado que ambos son flujos
        }
    });

}

serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);

