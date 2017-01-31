/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve(numbers) {
    return function findPrimes(a, b) {
        if (numbers.length === 0) {
            throw 'Error';
        }
        if (!Array.isArray(numbers)) {
            throw 'Error';
        }
    }
}

module.exports = solve;
