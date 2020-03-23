var changeText = false;

$(".time-slot").on("click", function() {
    if(changeText === false) {
        $(this).children()[1].remove();
        $(this).append($("<input type='search'>"));
        $(this).css("transition", "none")
        changeText = true;
    }
})
