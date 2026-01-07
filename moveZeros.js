/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

5Kyu

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let zeroCount = 0;
  
  arr.forEach(x => {
    if(x === 0){
      zeroCount++
    }
  })
  
  const noZeros = arr.filter(x => x !== 0);
  
  for(let i = 0; i < zeroCount; i++){
    noZeros.push(0);
  }
  
  return noZeros
} 