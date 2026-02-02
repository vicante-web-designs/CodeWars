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
 
  if(/\d/.test(splitStrng)){
    const numStartingIndex = splitStrng.findIndex(char => {
        return !isNaN(char) && char.trim() !== '';
    })// For finding the index of the first number in the array

    const slicedNumStrng = strng.slice(numStartingIndex)//Slice the string starting from the numbers to the end

    const incremented = String(Number(slicedNumStrng) + 1); //Increment the sliced number string, then turn it into a string again

    const paddedNumString = incremented.padStart(slicedNumStrng.length, '0')//Add the leading zeros that were removed during the increment calculation process

    const slicedLetterStrng = strng.slice(0, numStartingIndex)//Slice the string starting from the beginning to the wjust before the numbers

    return (`${slicedLetterStrng}${paddedNumString}`)//Join them together and return
  }else{
    return strng += 1; //Just add the string '1' to the end of the string
  }
}

console.log(incrementString('foobar00999'));
