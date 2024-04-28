// Question # 01: Given an integer array nums, find a subarray that has the largest
// product, and return the product.

// SOLUTION # 1 (UNCOMMENT THE SOLUTION )
// let arr = [2, 3, -2, 4];

// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] * arr[i + 1] > arr[i + 1] * arr[i + 2]) {
//     console.log("if condition one");
//     console.log(arr[i] * arr[i + 1]);
//   }
// else if(arr[i + 1] * arr[i + 2] > arr[i + 2] * arr[i + 3]){
//     console.log("elif condition one");
// }
// else if (arr[i + 2] * arr[i + 3] > arr[i + 3] * arr[i + 4]) {
//     console.log("elif condition one");
//   }
// }

// Question # 02: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

// SOLUTION: 2
// let nums = [2, 7, 11, 15];
// let target = 9;

// for (i = 0; i <= nums.length; i++) {
//   if (nums[i] * nums[i + 1] === target) {
//     console.log("if condition one");
//     console.log(nums[i] * nums[i + 1]);
//   } else if (nums[i + 1] * nums[i + 2] === target) {
//     console.log("elif condition one");
//   } else if (nums[i + 2] * nums[i + 3] === target) {
//     console.log("elif condition two");
//   } else if (nums[i + 3] * nums[i + 4] === target) {
//     console.log("elif condition three");
//   }
// }

// Question: 3 Reverse each word in a given input string.
// Solution: 3
// let straight = "Welcome to my home!";
// let reverseStr;
// function reverse(input) {
//   for (i = input.length - 1; i >= 0; i--) {
//     reverseStr += input[i];
//   }
//   return reverseStr;
// }

// let a = reverse(straight);
// console.log(a);

// Question # 04: Write a JavaScript program to display the reading status (i.e. display
// book name, author name and reading status) of the following books.

// SOLUTION: 4
// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Head",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "MockingJay",
//     readingStatus: false,
//   },
// ];
// library.forEach(book => {
//     console.log(book.readingStatus);
// });

// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order

// Solution: 5

// function amountToCoin(amount, coins) {
//   let remcoins = [];
//   for (let i = 0; i < coins.length; i++) {
//     while (amount >= coins) {
//       amount -= coins[i];
//       remcoins.push(coins[i]);
//     }
//   }
//   return remcoins;
// }
// ]
// console.log(amountToCoin(10, [1, 2, 3, 4]));
