import assert from 'node:assert/strict';

function rotateMatrix90Clockwise(matrix) {
    const isEmptyMatrix = matrix.length === 0;
    const AreMatrixRowsAndColumnsSizeDifferent = matrix.length !== matrix[0].length;
    if (isEmptyMatrix || AreMatrixRowsAndColumnsSizeDifferent) return false;

    const matrixSize = matrix.length;

    for (let row = 0; row < matrixSize / 2; row++) {
        const firstRow = row;
        const lastRow = matrixSize - 1 - row;

        for (let column = firstRow; column < lastRow; column++) {
            const offset = column - firstRow;
            const top = matrix[firstRow][column];

            // left -> top
            matrix[firstRow][column] = matrix[lastRow - offset][firstRow];

            // bottom -> left
            matrix[lastRow - offset][firstRow] = matrix[lastRow][lastRow - offset];

            // right -> bottom
            matrix[lastRow][lastRow - offset] = matrix[column][lastRow];

            // top -> right
            matrix[column][lastRow] = top;
        }
    }

    return matrix;
}

assert.deepStrictEqual(
    rotateMatrix90Clockwise(
        [[1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]]),
        [[13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4]]);

// 1  2  3  4
// 5  6  7  8
// 9  10 11 12
// 13 14 15 16

// 13 9  5  1
// 14 6  7  2
// 15 10 11 3
// 16 12 8  4

// 13 9  5  1
// 14 10 6  2
// 15 11 7  3
// 16 12 8  4