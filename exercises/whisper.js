'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */

const whisper = (s) => {
	let n = s.toLowerCase() 
 	return n
}

//* Begin of tests
const assert = require('assert')


assert.deepStrictEqual(whisper('FUCKCHRIS'), ('fuckchris'))
// End of tests */
