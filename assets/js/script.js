var dateElement = document.getElementById("currentDay");

//create variables for all textareas
var eightAM = document.getElementById("8am");
var nineAM = document.getElementById("9am");
var tenAM = document.getElementById("10am");
var elevenAM = document.getElementById("11am");
var twelvePM = document.getElementById("12pm");
var onePM = document.getElementById("1pm");
var twoPM = document.getElementById("2pm");
var threePM = document.getElementById("3pm");
var fourPM = document.getElementById("4pm");
var fivePM = document.getElementById("5pm");

//save events to local storage when save button is clicked 
$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    
});

//display date and time at top of page
const getDateAndTime = () => {
    var dateAndTime = moment().format("dddd, MMMM Do YYYY");
    dateElement.innerHTML = dateAndTime;
};

//color code time blocks to represent if time is in past, present or future
var checkTime = function () {
    var currentTime = moment().hours();
    if (currentTime >= 8 && currentTime < 9) {
        $(eightAM).addClass("present");
        $(nineAM).addClass("future");
        $(tenAM).addClass("future");
        $(elevenAM).addClass("future");
        $(twelvePM).addClass("future");
        $(onePM).addClass("future");
        $(twoPM).addClass("future");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 9 && currentTime <10) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("present");
        $(tenAM).addClass("future");
        $(elevenAM).addClass("future");
        $(twelvePM).addClass("future");
        $(onePM).addClass("future");
        $(twoPM).addClass("future");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 10 && currentTime < 11) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("present");
        $(elevenAM).addClass("future");
        $(twelvePM).addClass("future");
        $(onePM).addClass("future");
        $(twoPM).addClass("future");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 11 &&currentTime < 12) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("present");
        $(twelvePM).addClass("future");
        $(onePM).addClass("future");
        $(twoPM).addClass("future");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 12 &&currentTime < 13) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("past");
        $(twelvePM).addClass("present");
        $(onePM).addClass("future");
        $(twoPM).addClass("future");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 13 &&currentTime < 14) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("past");
        $(twelvePM).addClass("past");
        $(onePM).addClass("present");
        $(twoPM).addClass("future");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 14 &&currentTime < 15) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("past");
        $(twelvePM).addClass("past");
        $(onePM).addClass("past");
        $(twoPM).addClass("present");
        $(threePM).addClass("future");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 15 &&currentTime < 16) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("past");
        $(twelvePM).addClass("past");
        $(onePM).addClass("past");
        $(twoPM).addClass("past");
        $(threePM).addClass("present");
        $(fourPM).addClass("future");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 16 &&currentTime < 17) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("past");
        $(twelvePM).addClass("past");
        $(onePM).addClass("past");
        $(twoPM).addClass("past");
        $(threePM).addClass("past");
        $(fourPM).addClass("present");
        $(fivePM).addClass("future");
    }
    else if (currentTime >= 17 &&currentTime < 18) {
        $(eightAM).addClass("past");
        $(nineAM).addClass("past");
        $(tenAM).addClass("past");
        $(elevenAM).addClass("past");
        $(twelvePM).addClass("past");
        $(onePM).addClass("past");
        $(twoPM).addClass("past");
        $(threePM).addClass("past");
        $(fourPM).addClass("past");
        $(fivePM).addClass("present");
    }
};

checkTime();  

//set interval
var int = setInterval(checkTime, (60*1000)*10);

//when page is refreshed, then saved events persist
$(".description", "#8AM").val(localStorage.getItem("8AM"));
$(".description", "#9AM").val(localStorage.getItem("9AM"));
$(".description", "#10AM").val(localStorage.getItem("10AM"));
$(".description", "#11AM").val(localStorage.getItem("11AM"));
$(".description", "#12PM").val(localStorage.getItem("12PM"));
$(".description", "#1PM").val(localStorage.getItem("1PM"));
$(".description", "#2PM").val(localStorage.getItem("2PM"));
$(".description", "#3PM").val(localStorage.getItem("3PM"));
$(".description", "#4PM").val(localStorage.getItem("4PM"));
$(".description", "#5PM").val(localStorage.getItem("5PM"));

//call functions
getDateAndTime();