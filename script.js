var changeText = false;
var currentTimeBlock;

//Time block	
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var today = new Date();
var tomorrow = today;
tomorrow.setDate(tomorrow.getDate() + 1);
var yesturday = today;
yesturday.setDate(yesturday.getDate() - 1);

$(".change-date").on("click", function() {
    if($(this).attr('id') === "back") {
        today = yesturday;
        tomorrow = today;
        yesturday.setDate(yesturday.getDate() - 1);
    } else if($(this).attr('id') === "forward") {
        today = tomorrow;
        yesturday = today;
        tomorrow.setDate(tomorrow.getDate() + 1);
    }
    updateDate()
})
//Time block

toggleButtonOptions();
updateDate();

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

function updateDate() {
    $(".day-of-year").children()[1].innerHTML = `${weekday[today.getDay()]}, ${today.getDate()} ${month[today.getMonth()]}, ${today.getFullYear()}`
}

