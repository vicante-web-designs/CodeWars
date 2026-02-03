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

  const splitStrng = strng.split('') //Split the string

  let lastNumArr = []; //Array to store the last set of numbers

  let index; //Variable to store the index of the first number from the last set of numbers
 
  //Check if the last character on the string is a number
  if(/\d/.test(splitStrng[splitStrng.length - 1])){
   
     //loop through the array in reverse 
    for(let i = splitStrng.length - 1; i >= 0 ; i--){

      //check if the character is a number
      if(/\d/.test(splitStrng[i])){

        lastNumArr.push(splitStrng[i]) //push the character into the array for last set of numbers

        index = i; //At the end of the loop, this should store the first number from the last set of numbers

      } else{

        break; //Let the loop stop once it encounters a letter

      }
    }

    lastNumArr = lastNumArr.reverse(); //Since we looped and stored in reverse, now we need to reverse it again to get the original order

    const calc = String(Number(lastNumArr.join('')) + 1); //Join the array into a string, turn it into a number, add 1 to it, then convert it back to a string

    const paddedCalc = calc.padStart(lastNumArr.length, '0') //Add the leading zeros that were removed during the calculation
    
    const slicedStrng = strng.slice(0,index) //slice the string from the first char to the last set of numbers

    return `${slicedStrng}${paddedCalc}` //join it with the numbers and return

  }else{
    return strng += 1; //Just add the string '1' to the end of the string
  }
}
