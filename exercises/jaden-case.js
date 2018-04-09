'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const capitalize = (w) => {
    const s = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    	return s
 }

const jadenCase = (s) => {
	const jad = s.split(' ')
	const jad2 = jad.map(capitalize)
	const jad3 = jad2.join(' ')
	return jad3
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you'), 'How Are You')
// End of tests */
