const quizData = [{
    question: "What is the capital of Germany?",
    a: 'Berlin',
    b: 'Munich',
    c: 'Hamburg',
    d: 'Frankfurt',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
},
{
    question: "What is the capital of Italy?",
    a: 'Rome',
    b: 'Milan',
    c: 'Naples',
    d: 'Turin',
    correctAnswer: "d",
    bgc: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
},

{
    question: "What is the capital of Spain?",
    a: 'Madrid',
    b: 'Barcelona',
    c: 'Valencia',
    d: 'Seville',
    correctAnswer: "b",
    bgc: 'https://images.unsplash.com/photo-1561632669-7f55f7975606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
},

{
    question: "What is the capital of Portugal?",
    a: 'Lisbon',
    b: 'Porto',
    c: 'Faro',
    d: 'Coimbra',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
},

{
    question: "What is the capital of Switzerland?",
    a: 'Bern',
    b: 'Zurich',
    c: 'Lausanne',
    d: 'Geneva',
    correctAnswer: "d",
    bgc: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
},

{
    question: "What is the capital of Brazil?",
    a: 'Rio de Janeiro',
    b: 'Sao Paulo',
    c: 'Salvador',
    d: 'Brasilia',
    correctAnswer: "d",
    bgc: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
},

{
    question: "What is the capital of Iceland?",
    a: 'Reykjavik',
    b: 'Akureyri',
    c: 'Hafnarfjordur',
    d: 'Vestmannaeyjar',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
},

{
    question: "What is the capital of Canada?",
    a: 'Ottawa',
    b: 'Toronto',
    c: 'Montreal',
    d: 'Vancouver',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80'
},

{
    question: "What is the capital of France?",
    a: 'Lyon',
    b: 'Marseille',
    c: 'Paris',
    d: 'Toulouse',
    correctAnswer: "c",
    bgc: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'
},

{
    question: "What is the capital of Japan?",
    a: 'Tokyo',
    b: 'Osaka',
    c: 'Kyoto',
    d: 'Nagoya',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
    question: "What is the capital of egypt",
    a: 'Cairo',
    b: 'Alexandria',
    c: 'Giza',
    d: 'Luxor',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
},

{
    question: "What is the capital of Argentina?",
    a: 'Cordoba',
    b: 'Buenos Aires',
    c: 'Rosario',
    d: 'Mendoza',
    correctAnswer: "b",
    bgc: 'https://images.unsplash.com/photo-1617548437735-92d875423353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
    question: "What is the capital of Australia?",
    a: 'Sydney',
    b: 'Melbourne',
    c: 'Perth',
    d: 'Brisbane',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
},

{
    question: "What is the capital of Greece?",
    a: 'Thessaloniki',
    b: 'Athens',
    c: 'Patra',
    d: 'Thessaloniki',
    correctAnswer: "b",
    bgc: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
    question: "What is the capital of USA?",
    a: 'New York',
    b: 'Los Angeles',
    c: 'Washington',
    d: 'Chicago',
    correctAnswer: "c",
    bgc: 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80'
},
{
    question: "What is the capital of Russia?",
    a: 'Moscow',
    b: 'Saint Petersburg',
    c: 'Novosibirsk',
    d: 'Kazan',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
    question: "What is the capital of China?",
    a: 'Beijing',
    b: 'Shanghai',
    c: 'Tianjin',
    d: 'Guangzhou',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},
{
    question: "What is the capital of India?",
    a: 'Mumbai',
    b: 'Chennai',
    c: 'Kolkata',
    d: 'New Delhi',
    correctAnswer: "d",
    bgc: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
},
{
    question: "What is the capital of Netherlands?",
    a: 'Rotterdam',
    b: 'The Hague',
    c: 'Amsterdam',
    d: 'Utrecht',
    correctAnswer: "c",
    bgc: 'https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
},

{
    question: "What is the capital of Senegal?",
    a: 'Dakar',
    b: 'Freetown',
    c: 'Niamey',
    d: 'Timbuktu',
    correctAnswer: "a",
    bgc: 'https://images.unsplash.com/photo-1580629677996-fded70cdfd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
},

{
    question: "What is the capital of Thailand?",
    a: 'Phuket',
    b: 'Chiang Mai',
    c: 'Bangkok',
    d: 'Chonburi',
    correctAnswer: "c",
    bgc: 'https://images.unsplash.com/photo-1520961810802-7f0a32de665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1591&q=80'
}
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const body = document.querySelector('body');

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

// changing the bgc each time a new question is loaded
body.style.backgroundImage = `url(${currentQuizData.bgc})`
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
        const mundi = 'https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        quiz.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>
        <button onclick = 'location.reload()' >Try Again!</button>`
        
        body.style.backgroundImage = `url(${mundi})`
        
    }
}
}
)
    


loadQuiz();
