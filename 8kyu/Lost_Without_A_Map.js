// Given an array of integers, return a new array with each value doubled.
/*
For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    return x.map(item => item * 2);
  }
  
  console.log(maps([1,2,3]));
  console.log(maps([4,1,1,1,4]));
  console.log(maps([2,2,2,2,2,2]));