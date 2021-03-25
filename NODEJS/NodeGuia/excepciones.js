/**
 * Creando excepciones con promesas
 */
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => console.error(err));

  /**
   * Para saber cuando ocurrio el error
   */
  const doSomething1 = () => {
    //...
    try {
      //...
    } catch (err) {
      //... handle it locally
      throw new Error(err.message)
    }
    //...
  }
  