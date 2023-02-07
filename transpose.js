function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];

    for (let i = 0; i < cols; i++) {
        result.push([]);
        for (let j = 0; j < rows; j++) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
}

const mat = [[1, 2, 3], [4, 5, 6]];
console.log(transpose(mat));
// Output: [[1, 4], [2, 5], [3, 6]]
