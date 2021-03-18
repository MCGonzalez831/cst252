/* lab9.js
 *Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
 *Created: 11 March
 *License: Public Domain
 */

 //I have no idea what I am doing but I am looking at the example
// give a number and object that looks like this:
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
// loops over the numbers and output the number and the matching text
// for factors

function fizzBuzzBoom(maxNums, factorObj) {
  // itrate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    // reset output string
    var outputStr = "";
    // iterate over teh actors we got from the HTML
    for (var factor in factorObj) {
      // check to see if this num is a mulitple of factors
      if (num % factor == 0) {
        // if yes, then add the text to output toString
        outputStr += factorObj[factor];
      }
    }
    // now  if we have words in outputStr, format it  like this " - FizzBuzz!"
       if (outputStr) {
         outputStr = " - " + outputStr + "!";
       }
       outputToPage(num.toString() + outputStr)
  }
}

 function reportError(str) {
   outputEl.innerHTML = "<div class='error'>" + str + "</div>";
 }

 document.getElementById("submit").addEventListener("click", function() {
   var max = document.getElementById("max").value;
   console.log("max:", max)
   if (! max) {
     reportError("You must provide a maximun");
   }
 } )
