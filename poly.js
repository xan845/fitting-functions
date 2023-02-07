// Function to perform polynomial regression
function polyRegression(data, degree) {
  // Initialize variables
  var X = [];
  var Y = [];
  for (var i = 0; i < data.length; i++) {
    X.push(data[i][0]);
    Y.push(data[i][1]);
  }
  
  // Create the design matrix
  var Xmatrix = [];
  for (var i = 0; i < X.length; i++) {
    var row = [];
    for (var j = 0; j <= degree; j++) {
      row.push(Math.pow(X[i], j));
    }
    Xmatrix.push(row);
  }
  
  // Perform the matrix operations to get the coefficients
  var Xt = math.transpose(Xmatrix);
  var XtX = math.multiply(Xt, Xmatrix);
  var XtX_inv = math.inv(XtX);
  var XtY = math.multiply(Xt, Y);
  var B = math.multiply(XtX_inv, XtY);
  
  // Return the coefficients in the form of a polynomial function
  var poly = function(x) {
    var result = 0;
    for (var i = 0; i < B.length; i++) {
      result += B[i] * Math.pow(x, i);
    }
    return result;
  };
  
  return poly;
}

// Example usage
var data = [[1, 2], [2, 4], [3, 6], [4, 8]];
var poly = polyRegression(data, 4);
var x = 5;
var y = poly(x);
console.log("For x = " + x + ", y = " + y);
