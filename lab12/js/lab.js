/* lab9.js
 *Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
 *Created: 11 March
 *License: Public Domain
 */

//this JS has been editied for lab 13: debuging due to the ogrinal not working
// I hope this works
//Thank god for W3Schools and Stackoverflow
//Generate 1-200 in a viewble list
for (i = 1; i <= 200; i++) {
  outputEl = document.getElementById("output");
  newEl = document.createElement("p");

  //creates a string, these are the conditions that will make the words appear

    if (i%105 ==0) {
      newEl.innerHTML = i + " - FizzBuzzBoom";
      outputEl.appendChild(newEl);
      console.log("FizzBuzzBoom");

    } else if (i%35 ==0) {
      newEl.innerHTML = i + " - BoomBuzz";
      outputEl.appendChild(newEl);
      console.log("BoomBuzz");

    } else if (i%21 ==0) {
      newEl.innerHTML = i + " - FizzBoom";
      outputEl.appendChild(newEl);
      console.log("FizzBoom");

    } else if (i%15 ==0) {
      newEl.innerHTML = i + " - FizzBuzz";
      outputEl.appendChild(newEl);
      console.log("FizzBuzz");

    } else if (i%3 == 0) {
      newEl.innerHTML = i + " - Fizz";
      outputEl.appendChild(newEl);
      console.log("Fizz");

    } else if (i%5 ==0) {
      newEl.innerHTML = i + " - Buzz";
      outputEl.appendChild(newEl);
      console.log("Buzz");

    } else if (i%7 ==0) {
      newEl.innerHTML = i + " - Boom";
      outputEl.appendChild(newEl);
      console.log("Boom");

    } else {
      newEl.innerHTML = i;
      outputEl.appendChild(newEl);
      console.log(i);


  }
}
