
exports.min = function min (array) {
  if (!array || array.length===0) {
    return 0;
  } else {
    let minValue = array[0];
    for (let i=0; i < array.length; i++) {
      if (minValue > array[i]) {
        minValue = array[i];
      } 
    }
    return minValue;
  }
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
