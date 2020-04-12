// Current Date displayed at top of page

var currentDateEl = $('#currentDay');

var currentDate = moment().format('dddd [,] MMMM Do');
console.log(currentDate);
$('#currentDay').append(currentDate);

eventsRow1 = [];
eventsRow2 = [];
eventsRow3 = [];
eventsRow4 = [];
eventsRow5 = [];
eventsRow6 = [];
eventsRow7 = [];
eventsRow8 = [];
eventsRow9 = [];

//********* Conditional formatting ***********
var row1 = 9
var row2 = 10
var row3 = 11
var row4 = 12
var row5 = 13
var row6 = 14
var row7 = 15
var row8 = 16
var row9 = 17

let currentHour = moment().format("H")
console.log(currentHour);

if(currentHour == row1) {
    $("#txtArea-1").removeClass("future");
    $("#txtArea-1").addClass("present");
    
} else if(currentHour > row1) {
    $("#txtArea-1").removeClass("future");
    $("#txtArea-1").addClass("past");
};
console.log(currentHour);

if(currentHour == row2) {
    $("#txtArea-2").removeClass("future");
    $("#txtArea-2").addClass("present");
    
} else if(currentHour > row2) {
    $("#txtArea-2").removeClass("future");
    $("#txtArea-2").addClass("past");
};
console.log(currentHour);

if(currentHour == row3) {
    $("#txtArea-3").removeClass("future");
    $("#txtArea-3").addClass("present");
    
} else if(currentHour > row3) {
    $("#txtArea-3").removeClass("future");
    $("#txtArea-3").addClass("past");
};
console.log(currentHour);

if(currentHour == row4) {
    $("#txtArea-4").removeClass("future");
    $("#txtArea-4").addClass("present");
    
} else if(currentHour > row4) {
    $("#txtArea-4").removeClass("future");
    $("#txtArea-4").addClass("past");
};
console.log(currentHour);

if(currentHour == row5) {
    $("#txtArea-5").removeClass("future");
    $("#txtArea-5").addClass("present");
    
} else if(currentHour > row5) {
    $("#txtArea-5").removeClass("future");
    $("#txtArea-5").addClass("past");
};
console.log(currentHour);

if(currentHour == row6) {
    $("#txtArea-6").removeClass("future");
    $("#txtArea-6").addClass("present");
    
} else if(currentHour > row6) {
    $("#txtArea-6").removeClass("future");
    $("#txtArea-6").addClass("past");
};
console.log(currentHour);

if(currentHour == row7) {
    $("#txtArea-7").removeClass("future");
    $("#txtArea-7").addClass("present");
    
} else if(currentHour > row7) {
    $("#txtArea-7").removeClass("future");
    $("#txtArea-7").addClass("past");
};
console.log(currentHour);

if(currentHour == row8) {
    $("#txtArea-8").removeClass("future");
    $("#txtArea-8").addClass("present");
    
} else if(currentHour > row8) {
    $("#txtArea-8").removeClass("future");
    $("#txtArea-8").addClass("past");
};
console.log(currentHour);

if(currentHour == row9) {
    $("#txtArea-9").removeClass("future");
    $("#txtArea-9").addClass("present");
    
} else if(currentHour > row9) {
    $("#txtArea-9").removeClass("future");
    $("#txtArea-9").addClass("past");
};

console.log(currentHour);

//*****End of Coniditional Formatting ********//




//********* Save Button Scripts***********//
$("#row-1").on("click", "#saveBtn-1", function(event){
    event.preventDefault();
    var event1 = $("#txtArea-1")
    .val()
    .trim()

    eventsRow1.push(event1);

    localStorage.setItem("9amEvents", JSON.stringify(eventsRow1));
});

$("#row-2").on("click", "#saveBtn-2", function(event){
    event.preventDefault();
    var event2 = $("#txtArea-2")
    .val()
    .trim()

    eventsRow2.push(event2);

    localStorage.setItem("10amEvents", JSON.stringify(eventsRow2));
});

$("#row-3").on("click", "#saveBtn-3", function(event){
    event.preventDefault();
    var event3 = $("#txtArea-3")
    .val()
    .trim()

    eventsRow3.push(event3);

    localStorage.setItem("10amEvents", JSON.stringify(eventsRow3));
});

$("#row-4").on("click", "#saveBtn-4", function(event){
    event.preventDefault();
    var event4 = $("#txtArea-4")
    .val()
    .trim()

    eventsRow4.push(event4);

    localStorage.setItem("11amEvents", JSON.stringify(eventsRow4));
});

$("#row-5").on("click", "#saveBtn-5", function(event){
    event.preventDefault();
    var event5 = $("#txtArea-5")
    .val()
    .trim()

    eventsRow5.push(event5);

    localStorage.setItem("12pmEvents", JSON.stringify(eventsRow5));
});

$("#row-6").on("click", "#saveBtn-6", function(event){
    event.preventDefault();
    var event6 = $("#txtArea-6")
    .val()
    .trim()

    eventsRow6.push(event6);

    localStorage.setItem("1pmEvents", JSON.stringify(eventsRow6));
});

$("#row-7").on("click", "#saveBtn-7", function(event){
    event.preventDefault();
    var event7 = $("#txtArea-7")
    .val()
    .trim()

    eventsRow7.push(event7);

    localStorage.setItem("1pmEvents", JSON.stringify(eventsRow7));
});

$("#row-8").on("click", "#saveBtn-8", function(event){
    event.preventDefault();
    var event8 = $("#txtArea-8")
    .val()
    .trim()

    eventsRow8.push(event8);

    localStorage.setItem("1pmEvents", JSON.stringify(eventsRow8));
});

$("#row-9").on("click", "#saveBtn-9", function(event){
    event.preventDefault();
    var event9 = $("#txtArea-9")
    .val()
    .trim()

    eventsRow9.push(event9);

    localStorage.setItem("1pmEvents", JSON.stringify(eventsRow9));
});
// Timeout function to reload page
setTimeout(function() {
    location.reload();
    //currentHour = moment().format("H");
    
}, 60 * 1000);
// Load LocalStorage values

$("#txtArea-1").val(JSON.parse(localStorage.getItem("9amEvents")));
$("#txtArea-2").val(JSON.parse(localStorage.getItem("10amEvents")));
$("#txtArea-3").val(JSON.parse(localStorage.getItem("11amEvents")));
$("#txtArea-4").val(JSON.parse(localStorage.getItem("12pmEvents")));
$("#txtArea-5").val(JSON.parse(localStorage.getItem("1pmEvents")));
$("#txtArea-6").val(JSON.parse(localStorage.getItem("2pmEvents")));
$("#txtArea-7").val(JSON.parse(localStorage.getItem("3pmEvents")));
$("#txtArea-8").val(JSON.parse(localStorage.getItem("4pmEvents")));
$("#txtArea-9").val(JSON.parse(localStorage.getItem("5pmEvents")));