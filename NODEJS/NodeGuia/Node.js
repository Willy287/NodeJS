/**
 * Ejemplo inicial utilizando el modulo http. Con este modulo creamos un servidor web
 * a traves del metodo createServer, alli definimos su codigo de status de respuesta,
 * sus ocntenido en los headers y la acción final al terminar la ejecución del servidor.
 * En este caso imprimimos por pantalla "Hello World".
 */
const http = require('http')

const hostname = '127.0.0.1';
const port = 9001;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
