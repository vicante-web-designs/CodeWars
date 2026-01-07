function sumArray(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  
  
  const filter = array.filter(x => { return (x !== max && x !== min)})

  
  return sum = filter.reduce((acc, cumm) => acc + cumm, 0)
}