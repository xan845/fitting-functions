function multiply(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        throw new Error("Cannot multiply matrices: number of columns of matrix A must be equal to number of rows of matrix B.");
    }

    let result = [];
    for (let i = 0; i < rowsA; i++) {
        result.push([]);
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}

const matA = [[1, 2], [3, 4]];
const matB = [[5, 6], [7, 8]];
console.log(multiply(matA, matB));
// Output: [[19, 22], [43, 50]]
