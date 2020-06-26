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

//display date and time at top of page
const getDateAndTime = () => {
    var dateAndTime = moment().format("dddd, MMMM Do YYYY");
    dateElement.innerHTML = dateAndTime;
};

//save events to local storage


getDateAndTime();