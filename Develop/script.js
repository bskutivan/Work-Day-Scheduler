// Current Date displayed at top of page

var currentDateEl = $('#currentDay');

var currentDate = moment().format('dddd [,] MMMM Do');
console.log(currentDate);
$('#currentDay').append(currentDate);

eventsRow1 = [];

//********* Save Button Script***********
$("#row-1").on("click", "#saveBtn-1", function(event){
    event.preventDefault();
    var event1 = $("#txtArea-1")
    .val()
    .trim()

    console.log(event1);
    eventsRow1.push(event1);

    localStorage.setItem("9amEvents", JSON.stringify(eventsRow1));
});

$("#txtArea-1").val(JSON.parse(localStorage.getItem("9amEvents")));