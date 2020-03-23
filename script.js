var changeText = false;
var currentTimeBlock;

toggleButtonOptions();

$(".time-slot").on("click", function() {
    if(changeText === false) {
        //Getting rid of the display rectangle
        $(this).find(".rec").css("display", "none");
        //Inserting an input rectangle
        $(this).append($("<input type='search'>"));

        $(this).find('input').val(`${$(this).find(".rec").text()}`)
        $(this).find('input').select()

        toggleButtonOptions();

        $(".time-slot").css("transition", "none")
        $(".time-slot").css("transform", "none")
        changeText = true;
        currentTimeBlock = $(this)
    }
})

$(".change-option-button").on("click", function() {
    //making the rectangle display visible
    currentTimeBlock.find(".rec").css("display", "inherit")

    if($(this).attr('id') === "save-button") {
        //The display rectangle getting the value of the input
        currentTimeBlock.find("p").replaceWith(`<p>${currentTimeBlock.find("input").val()}</p>`)
        //Removing the input
        currentTimeBlock.find("input").remove()
    } else if($(this).attr('id') === "delete-button") {
        //deleting content from .rec
        currentTimeBlock.find("p").replaceWith(`<p></p>`)
        currentTimeBlock.find("input").remove()
    } else if($(this).attr('id') === "cancel-button") {
        currentTimeBlock.find("input").remove()
    }
    
    toggleButtonOptions();

    //Restoring the hovering functionality
    $(".time-slot").css("transition", "all .2s ease-in-out")
    $(".time-slot").hover(function() {
        $(this).css("transform", "scale(1.1)") 
        $(this).css("cursor", "pointer") }, function() {
        $(this).css("transform", "scale(1)")
    })
    changeText = false;

    
})


function toggleButtonOptions() {
    $(".change-options").toggle("show")
}