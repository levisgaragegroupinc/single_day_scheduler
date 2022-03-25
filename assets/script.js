// Current date and time. Use moment.js.
var currentDateTime = moment();
$('#currentDay').text(currentDateTime.format('dddd MMM Do'));

// Sets the hour to now, without seconds or minutes.
var currentHour = moment().startOf('hour');
console.log(currentHour);
// sets the start of the day at 8AM.
var startHour = currentHour.startOf('day').add(7, 'hours');
console.log(startHour);

// Time blocks. Label each hour.
for (let hour = 8; hour < 18; ++hour) {
startHour = startHour.add(1, 'h');
var inputClass = '.hour';
inputClass = '.hour' + hour;
$(inputClass).text(startHour.format('h A'));

console.log(inputClass);
}; 

// Style timeblock based on current hour.
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
// Call timeblock styling function.
styleTimeBlock();
// Retrieve to do items from local storage.
var hourlyToDo = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < hourlyToDo.length; i++) {
    var ToDoItem = localStorage.getItem(hourlyToDo[i]);
    $('.input' + hourlyToDo[i]).val(ToDoItem);
}
// Save to do item to local storage.
$('.saveBtn').click(function(event){
    event.preventDefault();
    var inputText = $(this).siblings('.form-control').val();
    var ToDoItem = $(this).parent().data('hour');
    localStorage.setItem(ToDoItem, inputText);
});