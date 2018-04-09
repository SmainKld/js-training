'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */
const cutLast = (s) => {
 	let str = s.split("")
 	let popOne = str.pop()
 	let popTwo = str.pop()
 	let newStr = str.join("")
 	return newStr
 }

 
  const cutFirst = (s) => {
 	let str = s.split("")
 	let shiftOne = str.shift()
 	let shiftTwo = str.shift()
 	let newStr = str.join("")
 	return newStr
 }


const cutFirstLast = (s) => {
	let str = s.split("")
	let popOne = str.pop()
 	let popTwo = str.pop()
 	let shiftOne = str.shift()
 	let shiftTwo = str.shift()
 	 let newStr = str.join("")
 	return newStr
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('FuckChris'), ('ckChris'))
assert.strictEqual(cutLast('FuckChris'), ('FuckChr'))
assert.strictEqual(cutFirstLast('FuckChris'), ('ckChr'))
// End of tests */
