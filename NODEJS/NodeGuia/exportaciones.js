/**
 * Importando otros modulos de NodeJS construidos por nosotros mismos
 */
const library = require('./library');

// car.js
const car = {
    brand: 'Ford',
    model: 'Fiesta'
  }

  module.exports = car;

  // index.js
const car = require('./car');

const car = {
    brand: 'Ford',
    model: 'Fiesta'
  }
  
  exports.car = car;

  exports.car = {
    brand: 'Ford',
    model: 'Fiesta'
  }

const items = require('./items')
items.car

const car = require('./items').car


