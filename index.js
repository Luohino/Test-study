// Data Structure
const subjectsData = {
    economics: createDummyModels("Economics"),
    accountancy: createDummyModels("Accountancy"),
    english: createDummyModels("English"),
    hindi: [
        { name: "Model Set 1", questions: hindiModel1 },
        { name: "Model Set 2", questions: hindiModel2 },
        { name: "Model Set 3", questions: hindiModel3 },
        { name: "Model Set 4", questions: hindiModel4 },
        { name: "Model Set 5", questions: hindiModel5 }
    ]
};

function createDummyModels(subjectName) {
    const models = [];
    for (let i = 1; i <= 5; i++) {
        models.push({
            name: `Model Set ${i}`,
            questions: [
                {
                    q: `Question 1 for ${subjectName} Set ${i}`,
                    options: ["Option A", "Option B", "Option C", "Option D"],
                    answer: 0 // Index of correct answer
                },
                {
                    q: `Question 2 for ${subjectName} Set ${i}`,
                    options: ["Wrong One", "Correct One", "Another Wrong", "Last Wrong"],
                    answer: 1
                },
                {
                    q: `Question 3 for ${subjectName} Set ${i}`,
                    options: ["A", "B", "C", "D"],
                    answer: 2
                },
                {
                    q: `Question 4 for ${subjectName} Set ${i}`,
                    options: ["Yes", "No", "Maybe", "So"],
                    answer: 3
                },
                {
                    q: `Question 5 for ${subjectName} Set ${i}`,
                    options: ["Correct", "Wrong", "Wrong", "Wrong"],
                    answer: 0
                }
            ]
        });
    }
    return models;
}

// State
let currentSubject = null;
let currentModelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let quizData = []; // Current set of questions

// DOM Elements
const views = {
    home: document.getElementById('home-view'),
    model: document.getElementById('model-view'),
    quiz: document.getElementById('quiz-view'),
    result: document.getElementById('result-view')
};

const backBtn = document.getElementById('back-btn');
const appTitle = document.getElementById('app-title');
const modelList = document.getElementById('model-list');

// Quiz Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('quiz-progress');

// Result Elements
const scoreText = document.getElementById('score-text');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

// Navigation Logic
function showView(viewName) {
    // Hide all views
    Object.values(views).forEach(view => {
        view.classList.remove('active-view');
        view.style.display = 'none'; // Ensure display none for clean transition logic if needed
    });

    // Show target view
    const targetView = views[viewName];
    targetView.style.display = 'block';
    // Small timeout to allow display:block to apply before adding opacity class
    setTimeout(() => {
        targetView.classList.add('active-view');
    }, 10);

    // Header Logic
    if (viewName === 'home') {
        backBtn.classList.add('hidden');
        appTitle.textContent = 'Study Deck';
    } else {
        backBtn.classList.remove('hidden');
        if (viewName === 'model') {
            appTitle.textContent = capitalize(currentSubject);
        } else if (viewName === 'quiz') {
            appTitle.textContent = 'Quiz';
        } else if (viewName === 'result') {
            appTitle.textContent = 'Results';
            backBtn.classList.add('hidden'); // No back from results, use buttons
        }
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Model Selection Logic
function renderModels(subject) {
    currentSubject = subject;
    const models = subjectsData[subject];
    modelList.innerHTML = '';

    models.forEach((model, index) => {
        const item = document.createElement('div');
        item.className = 'model-item';
        item.innerHTML = `
            <h3>${model.name}</h3>
            <span class="arrow">➜</span>
        `;
        item.addEventListener('click', () => startQuiz(index));
        modelList.appendChild(item);
    });

    showView('model');
}

// Quiz Logic
function startQuiz(modelIndex) {
    currentModelIndex = modelIndex;
    quizData = subjectsData[currentSubject][modelIndex].questions;
    currentQuestionIndex = 0;
    score = 0;

    loadQuestion();
    showView('quiz');
}

function loadQuestion() {
    const q = quizData[currentQuestionIndex];

    // Update UI
    questionText.textContent = `Q${currentQuestionIndex + 1}. ${q.q}`;
    questionCounter.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Render Options
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="font-weight:600; margin-right:8px;">${String.fromCharCode(65 + index)}.</span> ${opt}`;
        btn.addEventListener('click', () => checkAnswer(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, selectedBtn) {
    // Prevent multiple clicks
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.add('disabled'));

    const correctIndex = quizData[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        // Show correct answer
        buttons[correctIndex].classList.add('correct');
    }

    nextBtn.disabled = false;
}

function showResults() {
    scoreText.textContent = score;
    document.querySelector('.total-text').textContent = `/ ${quizData.length}`;

    const percentage = (score / quizData.length) * 100;
    if (percentage >= 80) {
        resultMessage.textContent = "Excellent! You're a pro!";
        resultMessage.style.color = "var(--success-color)";
    } else if (percentage >= 50) {
        resultMessage.textContent = "Good job! Keep practicing.";
        resultMessage.style.color = "var(--primary-color)";
    } else {
        resultMessage.textContent = "Don't give up! Try again.";
        resultMessage.style.color = "var(--error-color)";
    }

    showView('result');
}

// Event Listeners
// Subject Selection
document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
        renderModels(card.getAttribute('data-subject'));
    });
});

// Back Button
backBtn.addEventListener('click', () => {
    if (views.quiz.classList.contains('active-view')) {
        // If in quiz, go back to model list
        showView('model');
    } else if (views.model.classList.contains('active-view')) {
        // If in model list, go back to home
        showView('home');
    }
});

// Next Button
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
});

// Result Buttons
restartBtn.addEventListener('click', () => {
    startQuiz(currentModelIndex);
});

homeBtn.addEventListener('click', () => {
    showView('home');
});
