/* lab15.js
 *Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
 *Created: 24 March
 *License: Public Domain
 */

// I have no idea what is happeinging and I am confusion

 // declaring the contstructor
 class Car {
   constructor(brand, model, year, color) {
     this.carname = brand;
     this.carmodel = model;
     this.caryear = year;
     this.carcolor = color;
   }
   info() {
     return "I have a " + this.carname + " " + this.carmodel + " " + this.caryear + " " + this.carcolor + ".";
   }
 }

   mycar = new Car("Nissan", "Versa", "2015", "White");
   document.getElementById("output").innerHTML += "<p>" + mycar.info() + "</p>";



 // This is the Design an OOP Design?
 // Somehow I did this 

 document.getElementById("output").innerHTML += "<p>" + "I am confused on how to do this lab but here is my car and JS in the navigation area." + "</p>";
