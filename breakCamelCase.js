// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution2(string) {
  const split = string.split('');
  let result = [];
  //loop through the string
  split.forEach(char => {
    if(char === char.toUpperCase()){
    result.push(' ')
  }
  result.push(char)
})

  return result.join('');
}