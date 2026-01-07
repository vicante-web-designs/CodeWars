/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

6Kyu

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/
function duplicateEncode(word){
  // change string to lowercase
  const str = word.toLowerCase();
  const charCount = {};

  for(char of str){
    charCount[char] = (charCount[char] || 0) + 1;
  }

  'hello'

 
  return Array.from(str).map(x => charCount[x] > 1 ? ')' : '(').join('');
}