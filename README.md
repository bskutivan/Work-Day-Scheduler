# Project Goal

The application should be a weekly planner with customizable event spaces, the ability to save events to local storage get events from local storage, and dynamically adjust color of timeslot based on current time of day.

# Acceptance Critera

When the planner is opened, the current day is displayed at the top
When the user scrolls down the page, the user is presented with time blocks for standard business hours
When the user views the time blocks, each time block is color-coded to indicate past, present, or future.
When the user clicks a time block, then they can enter an event.
When the user clocks the save button for that time block, the value in block is saved.
When the user refreshsed the page, the the saved events persist.

# Implementation Outline

When building out this application I spent a good amount of time reviewing the already created CSS classes to determine how best to structure the HTML to utilize these classes. I toyed around with using <p> elements and extra <div> containers but eventually settled on the current formatting.
  
When building out the javascript I looked into building out as little code as possible and defining as few variables as possible. I first attempted to pull the values out of the div with the time for each row to then dynamically declare each rows time value to then compare against a current time moment object but was unsuccessful. I ultimately ended up buidling out the code for the first row save button and first row conditional checking and copying it down for each row with each row having its own variable value declared.

# Future Refactoring

I ultimately want to reduce the code down and reduce the amount of variable declared. I want to find a way to dynamically create the value for the row based on the time it is representing and then for each row compare this dynamically created value against the currentHour moment object.

# Screenshots
![](images/Screenshot1.jpg) 
