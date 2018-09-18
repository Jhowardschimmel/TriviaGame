//

window.onload = function () {
    
    $(".quizFormClass").hide();
    $("#quizForm2").hide();
    setTimeout(timer.stop, 61500);
    $("#start").on("click", timer.start);
    $("#start").click(function () {
      $("#start").hide();
        $("#quizForm1").show();
    });
    


};
var correctAnswers = 0;
var incorrectAnswers = 0;
$("#quizForm1 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm1").val());

    if (answer === "75%") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm1").hide();
    $("#quizForm2").show();
});
//2
$("#quizForm2 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm2").val());

    if (answer === "Gary Gygax and Dave Arneson") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm2").hide();
    $("#quizForm3").show();
});
//3
$("#quizForm3 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm3").val());

    if (answer === "1d8") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm3").hide();
    $("#quizForm4").show();
});
//4
$("#quizForm4 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm4").val());

    if (answer === "elemental") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm4").hide();
    $("#quizForm5").show();
});
//5
$("#quizForm5 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm5").val());

    if (answer === "Phylactery") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm5").hide();
    $("#quizForm6").show();
});
//6
$("#quizForm6 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm6").val());

    if (answer === "Half-Ogres") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm6").hide();
    $("#quizForm7").show();
});
//7
$("#quizForm7 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm7").val());

    if (answer === "Halaster Blackcloak") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm7").hide();
    $("#quizForm8").show();
});
//8
$("#quizForm8 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm8").val());

    if (answer === "Alamanther's Return") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm8").hide();
    $("#quizForm9").show();
});
//9
$("#quizForm9 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm9").val());

    if (answer === "Assassin") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm9").hide();
    $("#quizForm10").show();
});
//10
$("#quizForm10 input").on("click", function () {

    answer = ($("input[name=answer]:checked", "#quizForm9").val());

    if (answer === "Boccob") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;

    }
    
    $("#quizForm10").hide();
    $(".quizFormClass").hide();
        $("#start").hide();
        $("#correctanswers").text("You got " + correctAnswers +" answers right!");
        $("#incorrectanswers").text("You got " + incorrectAnswers +" answers wrong.");
});
var intervalId;

var clockRunning = false;

var timer = {

    time: 0,


    reset: function () {

        timer.time = 0;


        // DONE: Change the "display" div to "00:00."
        $("#timerdiv").text("00:00");

    },
    start: function () {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        }


    },
    stop: function () {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.

        clearInterval(intervalId);
        clockRunning = false;
        $("#maindiv").append("<h2>Time's Up!</h2>");
        $(".quizFormClass").hide();
        $("#start").hide();
        $("#correctanswers").text("You got " + correctAnswers +" answers right!");
        $("#incorrectanswers").text("You got " + incorrectAnswers +" answers wrong.");
        //alert("You got " + correctAnswers +" answers right");
        //alert("You got " + incorrectAnswers +" answers wrong");

    },

    count: function () {

        // DONE: increment time by 1, remember we cant use "this" here.
        timer.time++;

        // DONE: Get the current time, pass that into the timer.timeConverter function,
        //       and save the result in a variable.
        var converted = timer.timeConverter(timer.time);


        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#timerdiv").text(converted);

    },
    timeConverter: function (t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }



}