//Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) { // 0(n) 
    for (let j = 0; j < array.length; j++) { // 0(n) 
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

// When for loops are nested, we multiply them instead of add to calculate the Big O
// Big O( n * n) = Big O( n^2)


// Don't forget to use different terms for each inputs
// ex

const boxes = ['a', 'b', 'c', 'd', 'e'];
const boxes2 = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array,array2) {
  for (let i = 0; i < array.length; i++) { // 0(a) 
    for (let j = 0; j < array2.length; j++) { // 0(b) 
      console.log(array[i], array2[j])
    }
  }
}
logAllPairsOfArray(boxes,boxes2 )
// Big O( a * b)