// Current Date displayed at top of page

var currentDateEl = $('#currentDay');

var currentDate = moment().format('dddd [,] MMMM Do');
console.log(currentDate);
$('#currentDay').append(currentDate);

eventsRow1 = [];
eventsRow2 = [];
eventsRow3 = [];

//********* Save Button Scripts***********
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



// Load LocalStorage values

$("#txtArea-1").val(JSON.parse(localStorage.getItem("9amEvents")));
$("#txtArea-2").val(JSON.parse(localStorage.getItem("10amEvents")));
$("#txtArea-3").val(JSON.parse(localStorage.getItem("11amEvents")));