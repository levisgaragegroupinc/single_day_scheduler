// Current date and time. Use moment.js
    //declcare the moment function
    //$ with ID filled in for current day + .format. We need the current day, time is not specified.
var currentDateTime = moment();
// $("#currentDay").text(moment().format("dddd MMMM Do"));
$('#currentDay').text(currentDateTime.format('dddd MMM Do'));

// sets the hour to now, without seconds or minutes.
var currentHour = moment().startOf('hour');
// currentHour = currentHour.startOf('hour');
console.log(currentHour);
// sets the start of the day at 8AM.
var startHour = currentHour.startOf('day').add(7, 'hours');
console.log(startHour);

// $("#currentDay").text(currentDateTime.format("MMM Do, YYYY h:mm:ss a"));

// Time blocks. Label each hour

// Create a for loop to handle this code

// var hour1 = startHour.add(0, 'h');
// $('.hour8').text(hour1.format('h A'));
// console.log(hour1);

// for loop to replace code below
for (let hour = 8; hour < 18; ++hour) {
startHour = startHour.add(1, 'h');
var inputClass = '.hour';
inputClass = '.hour' + hour;
$(inputClass).text(startHour.format('h A'));

console.log(inputClass);
}; 

function styleTimeBlock() {
    var militaryTime = moment().format('HH');
    // 8am
    if (militaryTime == 8) {
        $('.input8').addClass('present');
        for (let num = 9; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        } 
    }
    // 9am
    else if (militaryTime == 9) {
    $('.input8').addClass('past');
    $('.input9').addClass('present');
        for (let num = 10; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 10am
    else if (militaryTime == 10) {
        $('.input10').addClass('present');
        for (let num = 8; num < 10; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
        }
        for (let num = 11; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 11am
    else if (militaryTime == 11) {
        $('.input11').addClass('present');
        for (let num = 8; num < 11; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
            }
        for (let num = 12; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 12pm    
    else if (militaryTime == 12) {
        $('.input12').addClass('present');
        for (let num = 8; num < 12; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
            }
        for (let num = 13; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 1pm     
    else if (militaryTime == 13) {
        $('.input13').addClass('present');
        for (let num = 8; num < 13; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
            }
        for (let num = 14; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 2pm            
    else if (militaryTime == 14) {
        $('.input14').addClass('present');
        for (let num = 8; num < 14; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
            }
        for (let num = 15; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 3pm        
    else if (militaryTime == 15) {
        $('.input15').addClass('present');
        for (let num = 8; num < 15; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
            }
        for (let num = 16; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 4pm        
    else if (militaryTime == 16) {
        $('.input16').addClass('present');
        for (let num = 8; num < 16; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
            }
        for (let num = 17; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future'); 
        }
    }
    // 5pm         
     else if (militaryTime == 17) {
        $('.input17').addClass('present');
        for (let num = 8; num < 17; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
        }
    }
    // past 5pm
    else if (militaryTime > 17) {
        for (let num = 8; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('past'); 
        }
    }
    // past 12am    
    else for (let num = 8; num < 18; ++num) {
            var inputNumber = '.input';
            inputNumber = '.input' + num;
            $(inputNumber).addClass('future');
    }    

};  

styleTimeBlock();

// function styleTimeBlock() {
//     var militaryTime = moment().format('HH');
//     console.log(militaryTime);
//     if (militaryTime === 8) {
//         console.log('It is 8-O-Clock');
//         $('.input-8am').addClass('.present');
//         $('.input-9am').addClass('.future');
//         $('.input-10am').addClass('.future');
//         $('.input-11am').addClass('.future');
//         $('.input-12am').addClass('.future');
//         $('.input-1pm').addClass('.future');
//         $('.input-2pm').addClass('.future');
//         $('.input-3pm').addClass('.future');
//         $('.input-4pm').addClass('.future');
//         $('.input-5pm').addClass('.future');
//     } else {
//         console.log('It is not 8 O Clock');
//     }

// }



//If current time
//isAfter
//isBefore
//isSame
//8

// $('.future').addClass('.present').removeClass('.future');
// $('.input-8am').addClass('.present');
// $('.input-9am').addClass('.future');
// $('.input-9am').addClass('.future');
// $('.input-9am').addClass('.future');
// $('.input-9am').addClass('.future');
// $('.input-9am').addClass('.future');
// $('.input-9am').addClass('.future');
// $('.input-9am').addClass('.future');

//default class future
// var styleBlock = getElementById('.future');
// $('.future').addClass('.present').removeClass('.future');

// for (let hour = 8; )


// HH is 24 hour format
//TOTAL of 10 slots
// 8 
// 9
// 10
// 11
// 12
// 1 13
// 2 14
// 3 15
// 4 16
// 5 17
// 6 18





// Classes to style the color
// .past
// .present
// .future


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
        // THEN the saved events persists