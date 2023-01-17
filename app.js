// const coffee = require('./lib/coffee');
 
// console.log(coffee);
 
/**
 * node app.js
 *
 * output:
 * { name: 'Tubruk', price: 15000 }
 */

/**
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/
const { firstName, lastName } = require('./user');
 
 
console.log(firstName);
console.log(lastName);
 
 
/**
* output:
* Harry
* Potter
*/
