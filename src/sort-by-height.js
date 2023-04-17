const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const sortedAray = arr.filter(x=>x != -1).sort((x,y)=> x-y);
    let index = 0;
    for(let j = 0; j < arr.length; j++){
        if (arr[j] != -1){
          arr[j] = sortedAray[index];
          index ++;
        }
    }

    return arr;
}

module.exports = {
  sortByHeight
};
