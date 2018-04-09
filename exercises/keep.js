'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (s) => {
 	let str = s.split("")
 	let keepF = str.slice(0,3)
	let keepFJ = keepF.join()
 	return keepFJ
 }

const keepLast = (s) => {
 	let str = s.split("")
 	let keepL = str.slice(str.length-2,str.length)
	let keepLJ = keepL.join('')
 	return keepLJ
 }

const keepFirstLast = (s) => {
	let result = s.split('')
	let result2 = result[2] + result[3]
 	return result2
}

//* Begin of tests
const assert = require('assert')


assert.strictEqual(keepLast('FuckChris'), ('is'))
assert.strictEqual(keepFirstLast('FuckChris'), ('ck'))
// End of tests */
