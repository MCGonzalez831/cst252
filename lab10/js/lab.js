/** lab9.js
 *Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
 *Created: 3 March
 *License: Public Domain
 **/

 var buttonEL = document.getElementById("my-button");
 console.log("Here's the button", buttonEL);

 var titleEL = document.getElementById("output");
 console.log("Here's the title?", titleEL);

 buttonEL.addEventListener("Click", function(){
   var name = document.getElementById("user-name")
   titleEL.innerText = "Hello," + name;
 })
