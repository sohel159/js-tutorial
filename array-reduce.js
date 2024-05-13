const numbers = [1, 2, 3, 4];
 const result = numbers.reduce( function(prevValue, currentValue) {

  return prevValue + currentValue;

}, 0);

console.log(result);