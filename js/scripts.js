// Business logic goes here.....
var movieArray = ["La La Land", "Hidden Figures", "The Hobbit", "Gone with the Wind"]

var Ticket = function(movie, number, time, userAge){
  this.selectedMovie = movie;
  this.selectedNumber = number;
  this.selectedTime = time;
  this.selectedUserAge = userAge;

  var ticketPrice = 25;

  var basic = function() {
    if((this.selectedMovie === movieArray[0]) || (this.selectedMovie === movieArray[1]) {
      return ticketPrice;
    } else {
      return (ticketPrice - 5);
    }
  }

};













// User logic goes here ....
$(document).ready(function(){
  $("form#tickets").submit(function(event){
    event.preventDefault();






  })






})
