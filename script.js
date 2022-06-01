const quizData = [{
    question: "What is the capital of Germany?",
    a: 'Berlin',
    b: 'Munich',
    c: 'Hamburg',
    d: 'Frankfurt',
    correctAnswer: "a"
},
{
    question: "What is the capital of Italy?",
    a: 'Rome',
    b: 'Milan',
    c: 'Naples',
    d: 'Turin',
    correctAnswer: "d"
},

{
    question: "What is the capital of Spain?",
    a: 'Madrid',
    b: 'Barcelona',
    c: 'Valencia',
    d: 'Seville',
    correctAnswer: "b"
},

{
    question: "What is the capital of Portugal?",
    a: 'Lisbon',
    b: 'Porto',
    c: 'Faro',
    d: 'Coimbra',
    correctAnswer: "a"
},

{
    question: "What is the capital of Switzerland?",
    a: 'Bern',
    b: 'Zurich',
    c: 'Lausanne',
    d: 'Geneva',
    correctAnswer: "d"
},

{
    question: "What is the capital of Brazil?",
    a: 'Rio de Janeiro',
    b: 'Sao Paulo',
    c: 'Salvador',
    d: 'Brasilia',
    correctAnswer: "d"
},

{
    question: "What is the capital of Iceland?",
    a: 'Reykjavik',
    b: 'Akureyri',
    c: 'Hafnarfjordur',
    d: 'Vestmannaeyjar',
    correctAnswer: "a"
},

{
    question: "What is the capital of Canada?",
    a: 'Ottawa',
    b: 'Toronto',
    c: 'Montreal',
    d: 'Vancouver',
    correctAnswer: "a"
}
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0

let score = 0


function loadQuiz(){

deselectAnswers()

const currentQuizData = quizData[currentQuiz];
questionEL.innerHTML = currentQuizData.question;
a_text.innerHTML = currentQuizData.a;
b_text.innerHTML = currentQuizData.b;
c_text.innerHTML = currentQuizData.c;
d_text.innerHTML = currentQuizData.d;
}

// deselect all answers
function deselectAnswers(){
// removing the previous selected answer
answerEls.forEach(answer => {
    answer.checked = false
})
}

function getSelected(){
let answer

answerEls.forEach(answerEl => {
    if(answerEl.checked){
        answer = answerEl.id
    }
})
return answer
}

submitBtn.addEventListener('click', () => {
const answer = getSelected()

if(answer){
    if(answer === quizData[currentQuiz].correctAnswer){
        score++
    }
    currentQuiz++
    
    if(currentQuiz < quizData.length){
        deselectAnswers()
        loadQuiz()
    }else{
        quiz.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>`
    }
}
}
)


loadQuiz();
