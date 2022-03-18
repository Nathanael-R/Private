var getFirstDigit = function(number){
    return parseInt(number/10);
}

var getLastDigit = function(number){
    return number%10;
}
var move = function(){
    var myDate = new Date();
    var seconds = myDate.getSeconds();
    var minutes = myDate.getMinutes();
    var hours = myDate.getHours();

    var animateFirstDigit = function(className,property) {
        (className).animate({},function() {
            (this).css("top",-getFirstDigit(property)*50)
        })
    }

    var animateSecondDigit = function(className,property) {
        (className).animate({},function() {
            (this).css("top",-getFirstDigit(property)*50)
        })
    }

    
    animateFirstDigit(".hour-one",hours)
    animateSecondDigit(".hour-two",hours)
    animateFirstDigit(".minute-one",minutes)
    animateSecondDigit(".minute-two",minutes)
    animateFirstDigit(".second-one",seconds)
    animateSecondDigit(".second-two",seconds)


}





setInterval(move,1000);

