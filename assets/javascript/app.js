// A $( document ).ready() block.

window.onload = function () {
    $("#quizForm").hide();
    $("#start").on("click", timer.start);
    $("#start").click(function () {
        $("#quizForm").show();
    });

    $("#quizForm input").on("click", function () {
        alert($("input[name=answer]:checked", "quizForm").val());
    })
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