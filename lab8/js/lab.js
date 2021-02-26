// lab8.js
// Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
// Created: 25 Febuary
// License: Public Domain

var array ="[10, 28, 43, 74, 99]"
array = [10, 28, 43, 74, 99]
console.log("My Array", array);

function yaga(x){
  return(x +1);
}

console.log("yaga1", yaga(1));

var result = array.map
console.log("Array map", result);

var result = array.map(function(x){
  return x + 1;
})

console.log("Yaga array", result);
