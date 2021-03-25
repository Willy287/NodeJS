const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)

/**
 * Contando Manzanas y Naranajas
 */
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

/**
 * Imprimiendo el StackTrace
 */
const function2 = () => console.trace();
const function1 = () => function2();
function1();

/**
 * Calcular el tiempo invertido
 * time() y timeEnd() me permiten calcular cuanto tiempo tarda una función en ejecutarse.
 */
const doSomething = () => console.log('test');
const measureDoingSomething = () => {
  console.time('doSomething()');
  //do something, and measure the time it takes
  doSomething();
  console.timeEnd('doSomething()');
}
measureDoingSomething();

/**
 * Creando una barra de progreso
 */
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)

/**
 * 
 */