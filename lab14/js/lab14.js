/* lab9.js
 *Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
 *Created: 22 March
 *License: Public Domain
 */

 function Vehicle(make, model, year, color, extras) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.color = color;
   this.extras = extras;
   this.info = function() {
     return color + " " + year + " " + make + " " + model + " with Santa Cruz stickers";
   }
 }

 var vehicles = [];

 var bike = new Vehicle(" Nissan ", " Versa ", 2015, " white ", " anime stickers ");

 console.log(bike);
 console.log(bike.info());


var firstCar = new Vehicle(" white ", 2015, " Nissan ", " Versa " );
    document.getElementById("output").innerHTML += "I only recently got my first car, which was the" + firstCar.info();
    document.getElementById("output").innerHTML += "I only got my car in 2019, which is still very recently but I love my little weeb car " + "</p>";
   console.log(firstCar);
