/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
    return function findPrimes(j, k) {
        if(arguments.length < 2 || isNaN(+j) || isNaN(+k)){
            throw Error;
        }
        let result = [];
        for (let i = j; i <= k; i++) {
            if(i === 2 || i === 3){
                result.push(i);
            }
            else if(i > 1){
                isItPrime(i);
            }
            else{
                throw new Error ('number is equal to 1,to 0 or negative');
            }
        }
        function isItPrime(n) {
            let q = parseInt(Math.sqrt(n));
            for (let i = 2; i <= q; i++) {
                if(n % i === 0){
                    return;
                }
            }
            return result.push(n);
        }
        return result;

    }
}

module.exports = solve;
