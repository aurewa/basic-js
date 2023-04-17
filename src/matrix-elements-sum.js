const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let innerL = matrix[0].length;

    let sum = 0;
    for(let i = 0; i < innerL; i++){
        
        for(j = 0; j < matrix.length; j ++){
            
            let elem = matrix[j][i];
            if (elem === 0) break;
            sum += elem;
        }
    }
    
    return sum;
}

module.exports = {
  getMatrixElementsSum
};
