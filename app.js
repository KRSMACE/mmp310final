function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    //ANSWERS
    if (question1 == "hadokenryu") {
        correct++;
    }
    if (question2 == "hurricanekickryu") {
        correct++;
    }
    if (question3 == "yogaflame") {
        correct++;
    }
    if (question4 == "ragingakuma") {
        correct++;
    }
    if (question5 == "shoryukenryu") {
        correct++;
    }

    //ARRAY
    var pictures = ["images/win.gif", "images/decent.gif", "images/fail.gif"];
    var messages = ["Perfect", "Yout not quite there yet", "Try Again"];
    var score;

    if (correct == 0) {
        score = 4;
    }
    
    if (correct == 0) {
        score = 3;
    }
    
    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 5) {
        score = 0;
    }


    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}