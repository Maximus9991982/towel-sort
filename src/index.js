
module.exports = function towelSort (matrix) {
    let result = [];
    
    for (let i = 0; i <= matrix.length - 1; i++) {
        if (i == 0 || i%2 == 0) {
            result.push(matrix[i]);
            
        } else {
            result.push(matrix[i].reverse());
        }
    }
    
  return result.flat();
}
