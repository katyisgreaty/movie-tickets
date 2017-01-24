// Business logic goes here.....
var movieArray = ["La La Land", "Hidden Figures", "The Hobbit", "Gone with the Wind"];
var timeArray = ["11:30 am (Matinee)", "3:00 pm (Matinee)"];


var Ticket = function(name, email, movie, number, time, userAge){
  this.selectedName = name;
  this.selectedEmail = email;
  this.selectedMovie = movie;
  this.selectedNumber = number;
  this.selectedTime = time;
  this.selectedUserAge = userAge;
  this.price = 25;
};

Ticket.prototype.classicDiscount = function() {
  if((this.selectedMovie === movieArray[0]) || (this.selectedMovie === movieArray[1])) {
  } else {
    this.price -= 5;
    console.log("It's a classic!");
  }
}
  Ticket.prototype.matineeDiscount = function() {
  if((this.selectedTime === timeArray[0]) || (this.selectedTime === timeArray[1])) {
    this.price -= 5;
    console.log("it's a matinee!");
  } else {
  }
}
Ticket.prototype.ageDiscount = function() {
if(this.selectedUserAge === "Senior (Age 61 or above)") {
  this.price -= 5;
  } else {
}
};

// User logic goes here ....
$(document).ready(function(){
  $("form#tickets").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedEmail = $("input#email").val();
    var inputtedMovie = $("select#movie").val();
    var inputtedNumber = $("input#number").val();
    var inputtedTime = $("select#time").val();
    var inputtedUserAge = $("select#age").val();
    var myTicket = new Ticket(inputtedName, inputtedEmail, inputtedMovie, inputtedNumber, inputtedTime, inputtedUserAge);

    myTicket.classicDiscount();
    myTicket.matineeDiscount();
    myTicket.ageDiscount();

    var infoOutput = ("Your Name: " + myTicket.selectedName +
                      "<li>" + "Your email: " + myTicket.selectedEmail +
                      "</li><li>" + "Your movie: " + myTicket.selectedMovie +
                      "</li><li>" + " Number of tickets booked: " +  myTicket.selectedNumber +
                      "</li><li>" + " Showtime: " +myTicket.selectedTime +
                      "</li><li>" + " Ticket type: " + myTicket.selectedUserAge);

    var totalPrice = "Your total price is $" + (myTicket.price * ($("input#number").val())) + ".00";

  $("span.output").last().append("<li>" + infoOutput + "</li><li>" + totalPrice + "</li>");

  // $("input#new-first-name").val("");

  function resetFields() {
      $("select#movie").val("");
      $("input#number").val("");
      $("select#time").val("");
      $("select#age").val("");

  }

  resetFields();


  });

});
