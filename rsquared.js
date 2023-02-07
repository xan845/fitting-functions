//function
function rSquared(observed, predicted) {
  let meanObserved = observed.reduce((a, b) => a + b) / observed.length;
  let SSResidual = observed.reduce((sum, value, index) => {
    return sum + Math.pow(value - predicted[index], 2);
  }, 0);
  let SSTotal = observed.reduce((sum, value) => {
    return sum + Math.pow(value - meanObserved, 2);
  }, 0);
  return 1 - SSResidual / SSTotal;
}


//Example
let observed = [3, -0.5, 2, 7];
let predicted = [2.5, 0.0, 2, 8];
let r2 = rSquared(observed, predicted);
console.log(r2);  // Output: 0.967741935483871
