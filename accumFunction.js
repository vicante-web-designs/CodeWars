// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	//split the string
  const split = s.toLowerCase().split('');
  const duplicate = [];
  let repeat;

  //loop through the string using the length as the condition

  for(let i = 0; i < split.length; i++){
    repeat = split[i].repeat(i+1) //based on the iteration, I will duplicate the character

    duplicate.push(repeat.charAt(0).toUpperCase() + repeat.slice(1)); //I will make the first character upperCase
  }

  return duplicate.join('-')  //join it with a '-' and return
}