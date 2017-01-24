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
    var inputtedNumber = $("input#number").val();
    var inputtedTime = $("select#time").val();
    var inputtedUserAge = $("select#age").val();
    var myTicket = new Ticket(inputtedMovie, inputtedNumber, inputtedTime, inputtedUserAge);

    var infoOutput = ("Your movie: " + myTicket.selectedMovie + "<li>" + " Number of tickets booked: " +  myTicket.selectedNumber + "</li><li>" + " Showtime: " +myTicket.selectedTime + "</li><li>" + " Ticket type: " + myTicket.selectedUserAge);

    var totalPrice = "Your total price is $" + (myTicket.classicDiscount() * ($("input#number").val())) + ".00";

  $("span.output").last().append("<li>" + infoOutput + "</li><li>" + totalPrice + "</li>");

  // $("input#new-first-name").val("");



  });

});
