// Current date and time. Use moment.js
    //declcare the moment function
    //$ with ID filled in for current day + .format. We need the current day, time is not specified.

    var currentDateTime = moment();
$("#1a").text(currentDateTime.format("MMM Do, YYYY h:mm:ss a"));

// Time blocks. Label each hour

// Populate html with the label for each hour

// Function to compare the current time with each time slot and update the background color.

// Call the function above to run it.







// Acceptance Criteria

// GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
        // THEN the current day is displayed at the top of the calendar
    // WHEN I scroll down
        // THEN I am presented with timeblocks for standard business hours
        // COMMENT: Add time blocks in the HTML for standard business hours. So 8AM to 5PM should suffice. 
    // WHEN I view the timeblocks for that day
        // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
        // COMMENT: Will probably need to use data types or similar to accomplish this.
    // WHEN I click into a timeblock
        // THEN I can enter an event
        // COMMENT: Need event listener for text field.
    // WHEN I click the save button for that timeblock
        // THEN the text for that event is saved in local storage
        // Need event listener for save button, and function to store input into local storage.
    // WHEN I refresh the page
        // THEN the saved events persist