const dateElement = document.getElementById("currentDay");

//create variables for all textareas
var eightAM = document.getElementById("8AM");
var nineAM = document.getElementById("9AM");
var tenAM = document.getElementById("10AM");
var elevenAM = document.getElementById("11AM");
var twelvePM = document.getElementById("12PM");
var onePM = document.getElementById("1PM");
var twoPM = document.getElementById("2PM");
var threePM = document.getElementById("3PM");
var fourPM = document.getElementById("4PM");
var fivePM = document.getElementById("5PM");
//use counter/iterate through instead? make list items instead of divs/rows/columns?

//display date and time at top of page
const getDateAndTime = () => {
    var dateAndTime = moment().format("dddd, MMMM Do YYYY");
    dateElement.innerHTML = dateAndTime;
};

//color code time blocks to represent if time is in past, present or future
var checkTime = function () {
    var currentTime = moment.hour();
    if (currentTime >= 8 && currentTime < 9) {
        $(eightAM).addClass("present");
      }
    else if (currentTime >= 9 && currentTime <10){
        $(eightAM).addClass("past");
        $(nineAM).addClass("present");
    }
    else if (currentTime >=10 && currentTime < 11){
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("present");
    }
    //continue through full workday, background colors not changing?
    //or use .isBefore .isAfter .isBetween? but just check hour? 
};

//save events to local storage when save button is clicked (JSON stringify?)



//when page is refreshed, then saved events persist (JSON parse?)



//call functions
getDateAndTime();
checkTime();