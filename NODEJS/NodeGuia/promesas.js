/**
 * Creando promesas
 */
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone();

/**
 * 
 */
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
});

const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return        // and we don't want to go any further
      }
      resolve(data)
    })
  })
}

getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err));

/**
 * Consumiendo una promesas
 */
const isItDoneYet = new Promise(/* ... as above ... */)
//...

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

/**
 * Encadenamiento de promesas
 */
const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
  }
  
  const json = response => response.json()
  
  fetch('/todos.json')
    .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
      console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
      console.log('Request failed', error)
    });

    /**
     * Promise.race()
     */
    const first = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'first')
      })
      const second = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'second')
      })
      
      Promise.race([first, second]).then(result => {
        console.log(result) // second
      })
      