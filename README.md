# _Movie Tickets_

#### _Book a movie Ticket, January 24,2017_

#### By _**Shruti and Katy**_

## Description

_This project consists of a movie ticket booking website where  a user can select the name of a movie, the time of day that they would like to see the movie and their age.  It should let them know how much their movie ticket will cost, based on those three factors like non-"first-release" movies, matinee and senior tickets that tend to be cheaper than the regular priced ticket._

## Specs

* _form: Get user's Name_
* _form: User select movie_
* _form: User select number of tickets_
* _form: drop down time selector_
* _form: get user age_
* _If movie is new, user will pay $25 each ticket_
    * _example input: La La Land 7pm 30 yrs old_
    * _example output: $25/each_
* _If movie is classic, take $5 off price_
    * _example input: The Hobbit 7pm 30 yrs old_
    * _example output: $20/each_
* _If movie is matinee time, Take $5 off price_
    * _example input: La La Land 4pm 30 yrs old_
    * _example output: $20/each_
    * _example input: The Hobbit 4pm 30 yrs old_ (Both matinee and classic)
    * _example output: $15/each_
* _If user is over 60 years old, take $5 off_
    * _example input: La La Land 7pm 62 yrs old_
    * _example output: $20/each_
    * _example input: The Hobbit 4pm 62 yrs old_ (Both matinee and classic and senior)
    * _example output: $10/each_
* _If movie is old, user will pay $15 each ticket_
    * _example input: The Hobbit_
    * _example output: $15/each_

## Known Bugs
 Not found yet.

## Support and contact details

For any queries and comments contact us at abc@yahoo.com

## Technologies Used

This Project uses HTML CSS and the concept of constructor and prototype of Javascript and jquery to determine how the price of ticket is calculated depending on the input from the user. 

### License

*{This software is licensed under MIT.}*

Copyright (c) 2017 **_Shruti Priya and Katy Daviscourt_**
