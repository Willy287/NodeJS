/**
 * Ejecutando una función de forma asincrona
 */
const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  doSomething()
  console.log('After');

  /**
   * Con codigo más sencillo de leer
   */
  const getFirstUserData = () => {
    return fetch('/users.json') // get users list
      .then(response => response.json()) // parse JSON
      .then(users => users[0]) // pick first user
      .then(user => fetch(`/users/${user.name}`)) // get user data
      .then(userResponse => userResponse.json()) // parse JSON
  }
  
  getFirstUserData();

  /**
   * Usando await async
   */
  const getFirstUserData = async () => {
    const response = await fetch('/users.json') // get users list
    const users = await response.json() // parse JSON
    const user = users[0] // pick first user
    const userResponse = await fetch(`/users/${user.name}`) // get user data
    const userData = await userResponse.json() // parse JSON
    return userData
  }
  
  getFirstUserData();

  const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000)
    })
  }
  
  const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
  }
  
  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
  });

  