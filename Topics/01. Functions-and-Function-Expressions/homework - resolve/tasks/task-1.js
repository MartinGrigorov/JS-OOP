/* Task Description */
/*
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		// returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number

*/

// function solve() {
//     return function sum(numbers) {
//         if (numbers.length === 0) {
//             return null;
//         }
//         if (!Array.isArray(numbers)) {
//             throw 'Error';
//         }
//         if (!numbers.every(x => x == 0 || Numbers(x))) {
//             throw 'Error';
//         }
//         return numbers.reduce((x, y) => x + (+ y), 0);
//
//     }
// }
//
// module.exports = solve;

function sum() {
    return function(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if (Number.isNaN(Number(numbers[i]))) {
                throw 'Error';
            }
        }
        if (numbers.length === 0) {
            return null;
        }
        return numbers.reduce((x, y) => x + (+ y), 0);

    }
}

module.exports = sum;

// function sum (arguments) {
// 	let sum = arguments.reduce((x, y) => x + (+ y), 0);
// 	console.log(sum);
//
// }
// sum([1,3,5])
