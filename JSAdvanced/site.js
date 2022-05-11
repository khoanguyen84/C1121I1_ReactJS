// hoisting         --> ok
// clourse          --> ok
// toán tử spread   --> ok
// toán rest        --> ok
// callback         --> ok
// prototype        --> ok
// polyfill         --> ok
// Destructuring    --> ok
// arrow function   --> ok
// IIFE             --> ok
// module           --> ok
// truthy and falsy --> ok
// this             --> ok
// Promise          --> ok
// fetch            --> ok

// import sum, { multiple, subtract } from './myLib.js'
import myMath from './myLib.js'
const { sum, multiple, subtract } = myMath
console.log(sum(5, 6))
console.log(multiple(5, 6))
console.log(subtract(5, 6))