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


//save events to local storage when save button is clicked 
$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).attr("id");

    localStorage.setItem("event", text, time);
    
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
console.log("check interval", int);


//when page is refreshed, then saved events persist
$(".description #8AM").val(localStorage.getItem("#8AM"));


//call functions
getDateAndTime();

