var number = 30;
var intervalId;
$("#start").on("click", run);
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
}
function decrement(){
    number--;
    $("#show-number").text("Your Total Time Remaining: "  + number);
    if (number === 0){
        stop();
        alert("Time Up!");
    }
}
    
 run();


var questionBanks = [
    { 
        question: "What is the color of Sky? ",
        answers: {
            a: "red" ,
            b: "black" ,
            c: "pink",
            d: "blue"
        },
        correctAnswer: "d"
    },

        {
            question: "How many bones do human body have? ",
            answers: {
                a: 207 ,
                b: 206 ,
                c: 350 ,
                d: 309
            },
            correctAnswer: "b"
            
        },
    
];
var output = [];
function builQuiz(questionBanks){
    
    var answers;

for(var i = 0; i<questionBanks.length; i++){
    answers = [];
    for(letter in questionBanks[i].answers){
        answers.push(
            '<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
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
run();