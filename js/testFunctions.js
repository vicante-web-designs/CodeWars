/*

5Kyu
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  //loop through the string
  const splitStrng = strng.split('')

  console.log(splitStrng[splitStrng.length - 3])
 
  if(/\d/.test(splitStrng[splitStrng.length - 1])){
    //loop through the array in reverse 
    //if it's a number, store in a new array
    // if not, then break the loop
    //reverse the array
    //then join it, turn it into a number, add 1, then padd it with zeros
    //slice the string from the first char to the last set of numbers
    //join it with the numbers and return

  }else{
    return strng += 1; //Just add the string '1' to the end of the string
  }
}

console.log(incrementString('foo99obar99'));

//TODO: Complete this kata
