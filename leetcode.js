// easy 1=============================================>>
let nums = [1, 2, 5, 4];
let target = 5;

var twoSum = function (nums, target) {
  let add = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        add.push(i, j);
      }
    }
  }
  console.log(add);
};
twoSum(nums, target);

//easy leet code 26 ====================================>>
let removeDuplicates = function (arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count < 1) {
      nums.push(arr[i]);
    }
  }
  return nums;
};
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));

//============================================================>>easy 88
let nums1 = [1,2,3,0,0,0]; 
let m = 3;
let nums2 = [2,5,6];
let n = 3;

var merge = function(nums1, m, nums2, n) {
    let num = []
    for(let i in nums1){
        if(i<m){
      num.push(nums1[i])
        }
    }
    let x = num[num.length-1]
    console.log(x)
    for(let i in nums2){
      if(i<n){
          num.push(nums2[i])
      }
    }
     let z = num[n]
     console.log(z)
     num[n] = x
     num[m-1] = z;
      console.log(num)
     };

merge(nums1, m, nums2, n)
