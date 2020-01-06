var timeoutInSeconds = 10;
var number = timeoutInSeconds;
var intervalId;

$("#start").on("click", run);

function run() {
    $("#start").toggle(true);
    $("#show-number").toggle(true);
    $("#quiz").toggle(true);
    $("#done").toggle(true);

    $("#finish").toggle(false);
    $("#correct").toggle(false);
    $("#uncorrect").toggle(false);

    number = timeoutInSeconds;

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-number").text("Your Total Time Remaining: " + number + " sec");
    if (number === 0) {
        stop();
        alert("Time Up!");
        checkAnswer();
    }
}

var questionBanks = [
    {
        question: "What is the color of Sky? ",
        answers: {
            a: "red",
            b: "black",
            c: "pink",
            d: "blue"
        },
        correctAnswer: "d"
    },

    {
        question: "How many bones do human body have? ",
        answers: {
            a: 207,
            b: 206,
            c: 350,
            d: 309
        },
        correctAnswer: "b"

    },

];
var output = [];
function builQuiz(questionBanks) {

    var answers;

    for (var i = 0; i < questionBanks.length; i++) {
        answers = [];
        for (letter in questionBanks[i].answers) {
            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + questionBanks[i].answers[letter]
                + '</label>'
            );
        }
        output.push('<div class="question">' + questionBanks[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>');
        console.log(output);

    }
    // quizContainer.innerHTML = output.join("");
}

builQuiz(questionBanks);
$("#quiz").append(output);

var correctChoices = 0;
var wrongChoices = 0;
var userGuess;
var unAnswer = "";

function checkAnswer() {
    const quizContainer = document.getElementById("quiz");
    const answerContainers = quizContainer.querySelectorAll(".answers");

    for (let i = 0; i < questionBanks.length; i++) {
        const answerContainer = answerContainers[i];
        const selector = 'input[name=question' + i + ']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === questionBanks[i].correctAnswer) {
            correctChoices++;
        }
        else {
            wrongChoices++;
        }
    }

    $("#start").toggle(true);
    $("#show-number").toggle(false);
    $("#quiz").toggle(false);
    $("#done").toggle(false);

    $("#finish").toggle(true);
    $("#correct").toggle(true);
    $("#uncorrect").toggle(true);

    $("#correct").text("Correct Answers: " + correctChoices);
    $("#uncorrect").text("Incorrect Answers: " + wrongChoices);

    // reset for other rounds
    correctChoices = 0;
    wrongChoices = 0;
    number = timeoutInSeconds;
}

$("#done").click(checkAnswer);

$(document).ready(function () {
    $("#show-number").toggle(false);
    $("#quiz").toggle(false);
    $("#finish").toggle(false);
    $("#correct").toggle(false);
    $("#uncorrect").toggle(false);
    $("#noanswer").toggle(false);
    $("#done").toggle(false);
})