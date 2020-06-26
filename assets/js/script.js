const dateElement = document.getElementById('currentDay');

//display date and time at top of page
const getDateAndTime = () => {
    var dateAndTime = moment().format("dddd, MMMM Do YYYY");
    dateElement.innerHTML = dateAndTime;
};

getDateAndTime();