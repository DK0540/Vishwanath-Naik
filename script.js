// Test #1
let arr = [2, 4, 1, 6, 8];

let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(`min = ${min}`);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(`max = ${max}`);

// Test-3) question number 1============================>>>Q#3
let arr = [1, 2, 3, 4, 7];
let n = 4;

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == n) {
    count++;
  }
}

if (count == 1) {
  console.log("since eche eliment apeares only once");
} else {
  console.log("ther is mejority element");
}

//Test -1 Q#3=========================================================>>>>>>>Q#3
let arr = [1, 2, 5, 2, 3, 7, 6];
let n = 3;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    let num = arr[i + 1];
    arr[i] = arr[i + 1];
    arr[i + 1] = num;
  }
}

console.log(arr);
for (let i in arr) {
  if (i == n) {
    console.log(arr[i]);
  }
}

//Test-2 Q#5==================================================================>>>>>>>>>>>Q#5
let str1 = "aaxrr";
let str2 = "klkuo";

let len1 = str1.length;
let len2 = str2.length;

if (len1 != len2) {
  return console.log("false");
}

let count;
let sum = 0;
for (let i = 0; i < len1; i++) {
  count = 0;
  for (let j = 0; j < str1.length; j++) {
    if (str1[i] == str1[j]) {
      count++;
      sum += 1;
    }
  }
  //  console.log(sum)
}

let count1;
let sum1 = 0;
for (let i = 0; i < len2; i++) {
  count = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str2[i] == str2[j]) {
      count1++;
      sum1 += 1;
    }
  }
  //  console.log(sum1)
}

if (sum == sum1) {
  console.log(1);
} else {
  console.log(0);
}
///==================================>>>
