/* lab.js
 *Author: Mirna Gonzalez <mirngonzalez@ucsc.edu>
 *Created:  15 April
 *License: Public Domain
 */

 //Side note: something got lost in trasnlation
 // So I used Wes's example (http://jsfiddle.net/wmodes/r9dc4Ljt/13/)

var endpoint = "http://numbersapi.com/random/year";

$("#button").click(function(){
	$("#output").append("<p>Howdy!</p>");
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: endpoint,
      // The data to send (will be converted to a query string)
      data: { },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      /* dataType : "json", */
  })
  // If the request succeeds
  .done(function( data ) {
      $("#output").append("<p>" + data + "</p>");
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });

})
