var changeText = false;
var currentTimeBlock;

$(".time-slot").on("click", function() {
    if(changeText === false) {
        $(this).find(".rec").css("display", "none");
        $(this).append($("<input type='search'>"));

        $(".time-slot").css("transition", "none")
        $(".time-slot").css("transform", "none")
        changeText = true;
        currentTimeBlock = $(this)
    }
})

$(".change-option-button").on("click", function() {
    //making the rectangle display visible
    currentTimeBlock.find(".rec").css("display", "inherit")

    //The display rectangle getting the value of the input
    currentTimeBlock.find("p").replaceWith(`<p>${currentTimeBlock.find("input").val()}</p>`)
    //Removing the input
    currentTimeBlock.find("input").remove()
    
    //Restoring the hovering functionality
    $(".time-slot").css("transition", "all .2s ease-in-out")
    $(".time-slot").hover(function() {
        $(this).css("transform", "scale(1.1)") 
        $(this).css("cursor", "pointer") }, function() {
        $(this).css("transform", "scale(1)")
    })
    changeText = false;

    
})
