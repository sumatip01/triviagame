// Create timer 
// Create trivia style webpage
// Player should be able to pick answers
// game ends when timer runs out, display number of correct and incorrect answers
//

function check () {

var question1 = document.trivia.question1.value;
var question2 = document.trivia.question2.value;
var question3 = document.trivia.question3.value;
var correct = 0;


    if (question1 == "The Amazon River") {
        correct ++;
}
    if (question2 == "Greenland") {
    correct ++;
}
    if (question3 == "Pacific Ocean") {
    correct ++;
}


    document.getElementById ("after_submit").style.visibility = "visible";
    document.getElementById ("number_correct").innerHTML = "You got " + correct + " correct.";
}