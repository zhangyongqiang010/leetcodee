// 数组第二大值
function getMaxSecondNum(arr) {
  var a = arr[0];
  var b = arr[1];
  if (a < b) {
    var temp = b;
    b = a;
    a = temp;
  }
  arr.forEach((item, index) => {
    if (index > 1) {
      if (item > a) {
        b = a;
        a = item;
      } else if (item < a && item > b) {
        b = item;
      }
    }
  });
  console.log(a, b);
  return b;
}
getMaxSecondNum([1, 3, 2, 3, 6, 8, 22, 4, 7, 4, 1]);

// 求数组两数之和
// var twoSum = function (nums, target) {
//   var result = [];
//   nums.forEach((item, index) => {
//     let a = target - item;
//     let idx = nums.indexOf(a, index + 1);
//     if (idx > -1) {
//       result = [index, idx];
//     }
//   });
//   console.log(result);
//   return result;
// };
var twoSum = function (nums, target) {
  var map = new Map();
  nums.forEach((item, index) => {
    let res = target - item;
    if (map.has(res)) {
      return [index, map.get(item)];
    } else {
      map.set(item, index);
    }
  });
};
twoSum([2, 7, 10, 5, 4], 9);
