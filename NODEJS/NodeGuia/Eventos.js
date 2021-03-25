/**
 * 
 */
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo();

/**
 * 
 */
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo();

/**
 * Colas de mensajeria ES6
 */
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo();

/**
 * SetTimeout
 */
setTimeout(() => {
    // runs after 2 seconds
  }, 2000)
  
  setTimeout(() => {
    // runs after 50 milliseconds
  }, 50);

  /**
   * Definiendo una nueva función
   */
  const myFunction = (firstParam, secondParam) => {
    // do something
  }
  
  // runs after 2 seconds
  setTimeout(myFunction, 2000, firstParam, secondParam)

  const myFunction = (firstParam, secondParam) => {
    // do something
  }
  
  // runs after 2 seconds
  setTimeout(myFunction, 2000, firstParam, secondParam);

  const id = setTimeout(() => {
    // should run after 2 seconds
  }, 2000)
  
  // I changed my mind
  clearTimeout(id);

  setTimeout(() => {
    console.log('after ')
  }, 0)
  
  console.log(' before ');

  
