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