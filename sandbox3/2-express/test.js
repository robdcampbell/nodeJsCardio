const arr = [0, 1, 0, 2, 34, 0, 3, 0];
//const arr2 = [4, [[4]], [[[[[4]]]]], [5, 5]];

//console.log(arr2.flat(Infinity));

// one solution
// function duplicateZero(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) arr[i] = [0, 0];
//   }
//   return arr.flat(Infinity);
// }

function duplicateZero(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      i++;
      arr.splice(i, 0, 0);
      arr.pop();
    }
  }

  return arr;
  //return arr.join("").replace(/0/g, "00").split("");
}

// console.log(duplicateZero(arr));

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
