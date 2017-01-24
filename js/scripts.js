// Business logic goes here.....
var movieArray = ["La La Land", "Hidden Figures", "The Hobbit", "Gone with the Wind"]

var ticketPrice = 25;

var Ticket = function(movie, number, time, userAge){
  this.selectedMovie = movie;
  this.selectedNumber = number;
  this.selectedTime = time;
  this.selectedUserAge = userAge;
  this.price;
};

Ticket.prototype.classicDiscount = function() {
  if((this.selectedMovie === movieArray[0]) || (this.selectedMovie === movieArray[1])) {
    this.price = ticketPrice;
    return (this.price);
  } else {
    this.price = ticketPrice - 5;
    // return (ticketPrice - 5);
    return (this.price);
  }
}

// User logic goes here ....
$(document).ready(function(){
  $("form#tickets").submit(function(event){
    event.preventDefault();

    var inputtedMovie = $("select#movie").val();
    var inputtedNumber = $("select#movie").val();
    var inputtedTime = $("select#movie").val();
    var inputtedUserAge = $("select#movie").val();
    var myTicket = new Ticket(inputtedMovie, inputtedNumber, inputtedTime, inputtedUserAge);

    var totalPrice = myTicket.classicDiscount() * ($("input#number").val());

  $("span.output").last().text(myTicket + totalPrice);

  // $("input#new-first-name").val("");



  });

});
