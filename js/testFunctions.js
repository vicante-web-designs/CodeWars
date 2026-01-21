/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/

//My method
function getDivisorsCnt(n){
    let numArr = [] //Array to store numbers between 1 and n
    
    for(let i = 1; i <= n; i++){
        numArr.push(i)
    } //Loop to get numbers between 1 and n

    return numArr.filter(num => n % num === 0).length //filter array for divisors, and get the length
}

//Problem: It works for small numbers or small counts, but for large numbers, the browser or engine runs out of space because it keeps adding numbers to the array, which takes up memory

//Fix: Use a simple counter instead of an array

//Fixed Method
function fixedGetDivisorsCnt(n){
    let count = 0 //count to store number of divisors
    
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count ++
        }
    } //Loop to get numbers between 1 and n, then update the counter

    return count
}
