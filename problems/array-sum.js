"use strict";
function arraySum(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == "object"){
      arr[i] = arraySum(arr[i]);
    }
    total += arr[i];
  }
  return total;
}
module.exports = arraySum;
