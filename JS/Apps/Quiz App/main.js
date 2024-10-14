const questions = [
    {
        question: "Who is the best player in history?",
        answers:[
            {
                text : "Ronaldo" , correct : false,
            },
            {
                text : "Messi" , correct : true,
            },
            {
                text : "Bele" , correct : false,
            },
            {
                text : "Mardona" , correct : false,
            }
        ]
    },
    {
        question: "What is the best stadium in the world?",
        answers:[
            {
                text : "brnabio" , correct : false,
            },
            {
                text : "campno" , correct : true,
            },
            {
                text : "brlen" , correct : false,
            },
            {
                text : "metroboltano" , correct : false,
            }
        ]
    },
    {
        question: "Which is the smallest Team in the world",
        answers:[
            {
                text : "Paris" , correct : true,
            },
            {
                text : "Barca" , correct : false,
            },
            {
                text : "Madrid" , correct : false,
            },
            {
                text : "Byren" , correct : false,
            }
        ]
    },
    {
        question: "What is the best match in history?",
        answers:[
            {
                text : "Barcelona vs Paris" , correct : true,
            },
            {
                text : "Liverpool vs Man City" , correct : false,
            },
            {
                text : "Man City vs Real Madrid" , correct : false,
            },
            {
                text : "Milan vs Liverpool" , correct : false,
            }
        ]
    },
    {
        question: "Who is the best student ?",
        answers:[
            {
                text : "Ahmad" , correct : false,
            },
            {
                text : "Sami" , correct : false,
            },
            {
                text : "Hamza" , correct : false,
            },
            {
                text : "no one" , correct : true,
            }
        ]
    }
];

const questionElemnt = document.getElementById("question");
const  answerButtons = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElemnt.innerHTML = questionNo + ".  " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer)
    });
}


function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
};

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true"; 

if (isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";


};

function showScore(){
  resetState();
  questionElemnt.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

function handleNextButtno(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
} else {
    showScore();
}
};

nextButton.addEventListener("click" , ()=>{
if (currentQuestionIndex < questions.length){
   handleNextButtno();
}else{
    startQuiz();
}
});
startQuiz();