'use strict';
function longestString(arr) {
  var longest = "";
  for (var i = 0; i <= arr.length; i++) {
    console.log(arr.length);
    if (typeof arr[i] == "string") {
      if (arr[i].length > longest.length){
        longest = arr[i];
      }
    }
  }
  return longest;
}
module.exports = longestString;
