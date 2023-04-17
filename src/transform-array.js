const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const opp = ['--double-prev', '--double-next', "--discard-prev", '--discard-next'];
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  let result = [];
  let oArray = [];
  let cArray = [];
  
  for(let i = 0; i < arr.length; i ++){
    
    console.log(oArray)
    
    let elem = arr[i];
    
    if (elem === '--double-prev'){
        if (i-1 >= 0) oArray.push([i-1, arr[i-1]])
    }
    
    else if (elem === '--double-next'){
        if (i+1 < arr.length) oArray.push([i+1, arr[i+1]])
    }
    
    else if (elem === "--discard-prev"){
        if (i-1 >= 0) oArray = oArray.filter(x=>x[0] != i-1);
    }
    
    else if (elem === '--discard-next'){
        if (i+1 < arr.length) oArray = oArray.filter(x=>x[0] != i+1);
    }
  }
  
  for(let i = 0; i < arr.length; i ++){
      let elem = arr[i];
      if (opp.indexOf(elem) < 0) result.push(elem);
      
      oArray.filter(x=> x[0] === i).forEach(e=>{
         result.push(e[1]); 
      });
  }

  return result;
}

module.exports = {
  transform
};
