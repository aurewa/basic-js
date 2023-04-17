const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  const arr = n.toString().split("");
  let max = 0;
  
  for(let i = 0; i< arr.length; i++){
     let arrTmp = [...arr.slice(0, i), arr.slice(i+ 1, arr.length)].flat();
     let num = Number.parseInt(arrTmp.join(''));
     
     if (num > max) max = num;
  }
  
  return max;
}

module.exports = {
  deleteDigit
};
