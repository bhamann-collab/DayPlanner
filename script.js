var changeText = false;
var currentTimeBlock;

toggleButtonOptions();

$(".day-of-year").children()[1].innerHTML = `${getTheDay()}, ${getTheDate()} ${getTheMonth()}, ${getTheYear()}`

$(".time-slot").on("click", function() {
    if(changeText === false) {
        //Getting rid of the display rectangle
        $(this).find(".rec").css("display", "none");
        //Inserting an input rectangle
        $(this).append($("<input type='search'>"));

        $(this).find('input').val(`${$(this).find(".rec").text()}`)
        $(this).find('input').select()

        toggleButtonOptions();
        timeslotAnimationOff();

        changeText = true;
        currentTimeBlock = $(this)
    }
})

$(".change-option-button").on("click", function() {
    //making the rectangle display visible
    currentTimeBlock.find(".rec").css("display", "inherit")


        //Did you click on the Save, Delete or Cancel button
    if($(this).attr('id') === "save-button") {
        currentTimeBlock.find("p").replaceWith(`<p>${currentTimeBlock.find("input").val()}</p>`)
        currentTimeBlock.find("input").remove()
    } else if($(this).attr('id') === "delete-button") {
        currentTimeBlock.find("p").replaceWith(`<p></p>`)
        currentTimeBlock.find("input").remove()
    } else if($(this).attr('id') === "cancel-button") {
        currentTimeBlock.find("input").remove()
    }
    
    toggleButtonOptions();

    //Restoring the hovering functionality
    timeslotAnimationOn();
    changeText = false;

    
})


function toggleButtonOptions() {
    $(".change-options").toggle("show")
}

function timeslotAnimationOff() {
    $(".time-slot").css("transition", "none")
    $(".time-slot").css("transform", "none")
}

function timeslotAnimationOn() {
    $(".time-slot").css("transition", "all .2s ease-in-out")
    $(".time-slot").hover(function() {
        $(this).css("transform", "scale(1.1)") 
        $(this).css("cursor", "pointer") }, function() {
        $(this).css("transform", "scale(1)")
    })
}

function getTheDay() {
    var date = new Date()
    var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    return day[date.getDay()]
}

function getTheMonth() {
    var date = new Date()
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return month[date.getMonth()]
}

function getTheYear() {
    var date = new Date()
    return (date.getYear() + 1900)
}

function getTheDate() {
    var date = new Date()
    return date.getDate()
}

function getTheHour() {
    var date = new Date()
    return date.getHours()
}


