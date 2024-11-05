const questions = [
    {
        question: "What do you call a ghost's favorite dessert?",
        answers: ["I Scream", "Candy Corn", "Pumpkin Pie"],
        correct: 0
    },
    {
        question: "What do you call a witch at the beach?",
        answers: ["A sand-witch", "A broomstick", "A sea witch"],
        correct: 0
    },
    {
        question: "What is a vampire's favorite fruit?",
        answers: ["Blood Orange", "Tomato", "Apple"],
        correct: 0
    },
    {
        question: "What is a mummy's favorite type of music?",
        answers: ["Wrap music", "Pop", "Rock"],
        correct: 0
    },
    {
        question: "What kind of pants do ghosts wear?",
        answers: ["Boo jeans", "Sweatpants", "Shorts"],
        correct: 0
    },
    {
        question: "What do you call a monster who poisons corn?",
        answers: ["A ghoulish kernel", "A scarecrow", "A popcorn monster"],
        correct: 0
    },
    {
        question: "What do you call a witch's garage?",
        answers: ["A broom closet", "A witch hut", "A spooky shed"],
        correct: 0
    },
    {
        question: "Why don’t skeletons fight each other?",
        answers: ["They don’t have guts", "They are scared", "They are friends"],
        correct: 0
    },
    {
        question: "What do you call a haunted chicken?",
        answers: ["A poultrygeist", "A ghost chicken", "A spooky bird"],
        correct: 0
    },
    {
        question: "What is a vampire's favorite game?",
        answers: ["Hide and Seek", "Monopoly", "Blood Wars"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');

    resultElement.textContent = '';
    nextButton.style.display = 'none';

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');
    const currentQuestion = questions[currentQuestionIndex];
    const audio = document.getElementById("background-audio");

    if (selectedIndex === currentQuestion.correct) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Oops! Try again!";
        
        audio.volume = 1;
        audio.play();
        
        document.documentElement.classList.add("jumpscare");

        document.body.classList.add("invisivel");
        
        return;
    }
    
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        const resultElement = document.getElementById('result');
        questionElement.textContent = "Quiz Completed!";
        answersElement.innerHTML = '';
        resultElement.textContent = '';
        document.getElementById('next').style.display = 'none';
    }
}

window.onload = displayQuestion;
