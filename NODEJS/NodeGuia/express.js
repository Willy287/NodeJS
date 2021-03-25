/**
 * Inicializando un servidor HTTP con express Framework.
 * Express es un framework de NodeJS que usa el modulo http
 * y nos permite crear instancias de servidores de una 
 * manera más rapida y facil. Esto lo hace a traves de su
 * metodo listen()
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});

process.env.NODE_ENV; // Me permite acceder a la variable de entorno NODE_ENV que se establecio
                      // en un entorno de desarrollo.


/**
 * Modo REPL
 * Cuando escribimos el comando Node + "Nombre del programa" ejecutamos este programa en la consola de salida.
 * Pero si omitimos el nombre del programa lo usamos como REPL(Read Value Print Loop)
 * Ejemplo: Node
 * Number.
 * Explorar objetos globales: global.
 */

 /**
  * Modulo Console: NodeJS provee el modulo console que permite acceder al metodo log()
  * el cual imprime una cadena dada por consola
  */
 const x = 'x';
 const y = 'y';
 console.log(x, y);

 /**
  * Imprimiendo de forma agradable con especificador de formato
  */
 console.log('My %s has %d years', 'cat', 2)

 /**
  * Limpiando la consola
  */
 console.clear();

 


