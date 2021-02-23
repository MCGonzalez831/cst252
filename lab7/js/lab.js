// lab7.js -
// Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
// Created: 22 Febuary
// License: Public Domain

// sortUserName - a function that takes user input and sorts the letters
// of their names

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name");
  console.log("userName =", userName);

  // split string to Arrays
  var nameArray = userName.split('');
  console.log("nameArray =", userArray);

  // sort the Array
  var nameArraySort = nameArraySort.sort('');
  console.log("nameArraySort =", nameArraySort);

  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("Oh hey, I've fixed your name: ",
 sortUserName(), "</br>");
