//

window.onload = function () {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    $("#quizForm1").hide();
    $("#quizForm2").hide();
    setTimeout(timer.stop, 62000);
    $("#start").on("click", timer.start);
    $("#start").click(function () {
        $("#quizForm1").show();
    });
    $(".quizFormClass input").on("click", function () {

        answer = ($("input[name=answer]:checked", ".quizFormClass").val());

        if (answer === "33%" || answer === "Gary Gygax and Dave Arneson") {
            correctAnswers++;
        }
        else {
            incorrectAnswers++;

        }
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        $("#quizForm1").hide();
        $("#quizForm2").show();
    });


};

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



};

