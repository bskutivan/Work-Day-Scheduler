// Current Date displayed at top of page

var currentDateEl = $('#currentDay');

var currentDate = moment().format('dddd [,] MMMM Do');
console.log(currentDate);
$('#currentDay').append(currentDate);



//********* Save Button Script***********
$("#row-1").on("click", "#saveBtn-1", function(event){
    event.preventDefault();
    var event1 = $("#txtArea-1")
    .val()
    .trim()

    console.log(event1);
});
