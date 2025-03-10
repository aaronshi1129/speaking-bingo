import confetti from 'confetti';

// Question banks
const questionBanks = {
    general: [
        "What's your favorite book and why?",
        "If you could travel anywhere in the world, where would you go?",
        "Describe your ideal day from start to finish.",
        "What's one skill you wish you had?",
        "What's your favorite movie and why do you like it?",
        "If you could have dinner with any historical figure, who would it be?",
        "What's your favorite childhood memory?",
        "If you could only eat one food for the rest of your life, what would it be?",
        "What three items would you bring to a deserted island?",
        "What's your favorite season and why?",
        "If you could live in any fictional world, which would you choose?",
        "What superpower would you want to have?",
        "Describe your dream job.",
        "What's something you've always wanted to try but haven't yet?",
        "What's the best piece of advice you've ever received?",
        "If you could master any instrument, which would you choose?",
        "What's your favorite way to relax after a long day?",
        "If you could meet any celebrity, who would it be?",
        "What's a goal you have for the next year?",
        "Describe the perfect vacation.",
        "What's your favorite hobby and how did you get into it?",
        "If you could instantly learn any language, which would you choose?",
        "What's your favorite game to play with friends or family?",
        "If you could time travel, which era would you visit?",
        "What's something that always makes you laugh?",
        "If you could change one thing about the world, what would it be?",
        "What's your favorite thing about your hometown?",
        "Describe your perfect weekend.",
        "What's a movie or book that changed how you think?",
        "If you could have any animal as a pet, what would you choose?",
        "What’s your favorite type of music and why?",
        "If you could invent something new, what would it be?",
        "Describe your happiest memory in detail.",
        "What’s your favorite holiday and how do you celebrate it?",
        "If you could live anywhere in the world, where would it be and why?",
        "What is your favorite thing to do on weekends?",
        "Who is someone you admire, and what makes them special?",
        "What’s one thing you’re really good at?",
        "If you could swap lives with someone for a day, who would it be?",
        "What’s your favorite type of weather and why?",
        "If you won a million dollars, what would you do with it?",
        "Describe your morning routine.",
        "What’s one place in your country everyone should visit?",
        "What’s a famous food in your culture that you enjoy?",
        "If you had a free day with no responsibilities, how would you spend it?",
        "What’s your favorite childhood toy, and why did you like it?",
        "What’s a surprising fact about you?",
        "If you could learn a new hobby, what would it be?",
        "What’s something you’ve taught someone else?",
        "What’s one thing you can’t live without?",
        "Describe your favorite place in your home.",
        "If you could go to space, would you? Why or why not?",
        "What’s one way you like to help others?",
        "What’s your favorite way to celebrate special occasions?",
        "If you could design your dream house, what would it look like?"
    ],
    personal: [
        "What accomplishment are you most proud of?",
        "Describe a challenge you've overcome in your life.",
        "What's something most people don't know about you?",
        "Who has been the biggest influence in your life and why?",
        "What are three things on your bucket list?",
        "Describe a time when you failed at something and what you learned.",
        "What's your earliest memory?",
        "What do you value most in friendships?",
        "What's a belief or opinion you've changed over time?",
        "Describe a perfect day in your life that has actually happened.",
        "What's a habit you're trying to build or break?",
        "Describe your personal style in three words.",
        "What's something you're looking forward to in the future?",
        "What do you think your best quality is?",
        "Describe a time when you were brave.",
        "What's something you regret not doing?",
        "How do you define success for yourself?",
        "What's a small thing that brings you joy?",
        "What's a tradition you want to pass on to future generations?",
        "Describe a moment when you felt truly peaceful.",
        "What's something you're grateful for today?",
        "What's a lesson you've learned the hard way?",
        "Describe your relationship with a family member you're close to.",
        "What's a skill you've taught yourself?",
        "What do you do when you need to cheer yourself up?",
        "What's a promise you've made to yourself?",
        "Describe a time when you were proud of someone else.",
        "What's something you're excited to learn more about?",
        "Describe a place that feels like home to you.",
        "What's something you wish you could tell your younger self?",
        "What is a habit you are most proud of developing?",
        "What do you do when you're feeling overwhelmed?",
        "Who has had the biggest positive impact on your life?",
        "What is a quality you admire most in yourself?",
        "What is a personal goal you are currently working towards?",
        "How do you usually celebrate your achievements?",
        "Who do you turn to for advice when you face personal challenges?",
        "What is a fear you have overcome, and how did you do it?",
        "What is something you do regularly for self-care?",
        "What is a mistake you learned the most from?",
        "How do you handle criticism or negative feedback?",
        "What motivates you to keep going during difficult times?",
        "What is a personal tradition that you hold dear?",
        "What is something you've done recently that made you happy?",
        "What is your biggest strength, and how does it help you in life?",
        "Describe a time when you felt completely in control of your life.",
        "What is a memory that reminds you of your resilience?",
        "How do you typically manage stress or anxiety?",
        "What is a value that you strive to live by every day?",
        "Describe a time when you felt truly proud of yourself.",
        "What role does gratitude play in your life?",
        "How do you handle situations when you're out of your comfort zone?",
        "What is something you want to improve about yourself?",
        "What does happiness mean to you on a personal level?",
        "What is one lesson you’ve learned about yourself this year?"
    ],
    opinion: [
        "Do you think social media has overall been good or bad for society?",
        "Should schools focus more on practical skills or academic knowledge?",
        "Is it better to be brutally honest or compassionately tactful?",
        "Do you think humans will ever colonize another planet?",
        "Should art be accessible to everyone or is exclusivity important?",
        "Is technology making us more connected or more isolated?",
        "Do you think people should be able to work remotely for most jobs?",
        "Is competition good or harmful for child development?",
        "Should everyone be expected to learn a second language?",
        "Do you think space exploration is worth the investment?",
        "Is it better to specialize deeply or have broad knowledge across fields?",
        "Should public transportation be free?",
        "Is it important to preserve cultural traditions or embrace change?",
        "Do you think artificial intelligence will ultimately benefit humanity?",
        "Should voting be mandatory?",
        "Is it better to watch movies at home or in theaters?",
        "Should schools have dress codes?",
        "Do you think people will read physical books in 50 years?",
        "Is privacy or convenience more important in the digital age?",
        "Should healthcare be free for everyone?",
        "Do you think everyone should travel internationally at least once?",
        "Is it better to save money or spend on experiences?",
        "Should everyone learn basic coding skills?",
        "Do you think we'll ever fully understand how the human brain works?",
        "Is it better to be early, on time, or fashionably late?",
        "Should people be allowed to work 4-day weeks instead of 5?",
        "Do you think humans should be vegetarian or vegan?",
        "Is social media making us more or less informed?",
        "Should students be allowed to use AI tools for homework?",
        "Do you think physical money will eventually disappear?",
        "Is it better to live in a big city or a small town?",
        "Should people focus more on their careers or personal lives?",
        "Do you think climate change can be stopped by individuals or governments?",
        "Is it better to rent a home or buy one?",
        "Should children be allowed to use smartphones at a young age?",
        "Do you think education is the most important factor for success?",
        "Is online learning as effective as traditional classroom education?",
        "Should companies prioritize profit or social responsibility?",
        "Do you think a four-day workweek would be beneficial?",
        "Is it more important to follow your passion or choose a practical career?",
        "Should people be fined for not recycling?",
        "Do you think reality TV shows are harmful or entertaining?",
        "Is it better to travel alone or with friends and family?",
        "Should governments invest more in healthcare or military defense?",
        "Do you think people are too dependent on technology nowadays?",
        "Is it better to spend money on experiences or material possessions?",
        "Should we prioritize protecting endangered species or human needs?",
        "Do you think everyone should have access to free education?",
        "Is it more important to save money or enjoy life in the moment?",
        "Should we explore space or focus on solving Earth’s problems first?",
        "Do you think art is necessary in schools?",
        "Should people be required to vote in elections?",
        "Is fame worth the loss of privacy?",
        "Should parents limit their children’s screen time strictly?",
        "Do you think working remotely is better for productivity or worse?"
    ],
    custom: []
};

let gameState = {
    player1: "",
    player2: "",
    currentPlayer: "",
    player1Score: 0,
    player2Score: 0,
    player1Sets: 0,
    player2Sets: 0,
    selectedQuestionBank: "general",
    gameQuestions: [],
    remainingCards: 25,
    completedLines: []
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const questionModal = document.getElementById('question-modal');
const settingsModal = document.getElementById('settings-modal');
const gameOverModal = document.getElementById('game-over-modal');
const gameBoard = document.getElementById('game-board');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const startGameBtn = document.getElementById('start-game-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsCancel = document.getElementById('settings-cancel');
const settingsSave = document.getElementById('settings-save');
const backToStartBtn = document.getElementById('back-to-start');
const endNowBtn = document.getElementById('end-now-btn');
const correctBtn = document.getElementById('correct-btn');
const incorrectBtn = document.getElementById('incorrect-btn');
const newGameBtn = document.getElementById('new-game-btn');
const questionText = document.getElementById('question-text');
const customQuestionsContainer = document.getElementById('custom-questions-container');
const customQuestionsTextarea = document.getElementById('custom-questions');
const questionCountDisplay = document.getElementById('question-count');
const currentPlayerDisplay = document.getElementById('current-player');
const player1ScoreDisplay = document.querySelector('#player1-score .score');
const player2ScoreDisplay = document.querySelector('#player2-score .score');
const player1NameDisplay = document.querySelector('#player1-score .player-name');
const player2NameDisplay = document.querySelector('#player2-score .player-name');

// Initialize game
function init() {
    // Event listeners
    startGameBtn.addEventListener('click', startGame);
    settingsBtn.addEventListener('click', openSettings);
    settingsCancel.addEventListener('click', closeSettings);
    settingsSave.addEventListener('click', saveSettings);
    backToStartBtn.addEventListener('click', goBackToStart);
    endNowBtn.addEventListener('click', endGameEarly);
    correctBtn.addEventListener('click', handleCorrectAnswer);
    incorrectBtn.addEventListener('click', handleIncorrectAnswer);
    newGameBtn.addEventListener('click', goBackToStart);

    // Settings radio buttons
    const bankRadios = document.querySelectorAll('input[name="question-bank"]');
    bankRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                customQuestionsContainer.classList.remove('hidden');
            } else {
                customQuestionsContainer.classList.add('hidden');
            }
        });
    });

    // Custom questions textarea
    customQuestionsTextarea.addEventListener('input', updateQuestionCount);
    
    // Load custom questions from localStorage if available
    loadCustomQuestions();
}

function loadCustomQuestions() {
    const savedQuestions = localStorage.getItem('customQuestions');
    if (savedQuestions) {
        customQuestionsTextarea.value = savedQuestions;
        updateQuestionCount();
        
        // If there were saved custom questions, set the radio button to custom
        const customRadio = document.querySelector('input[name="question-bank"][value="custom"]');
        if (customRadio && savedQuestions.trim() !== '') {
            customRadio.checked = true;
            customQuestionsContainer.classList.remove('hidden');
        }
        
        // Also update the question bank
        questionBanks.custom = savedQuestions.split('\n').filter(q => q.trim() !== '');
    }
}

function updateQuestionCount() {
    const questions = customQuestionsTextarea.value.split('\n').filter(q => q.trim() !== '');
    questionCountDisplay.textContent = `${questions.length} questions`;
    
    if (questions.length < 25) {
        questionCountDisplay.style.color = '#e74c3c';
    } else {
        questionCountDisplay.style.color = '#2ecc71';
    }
}

function openSettings() {
    settingsModal.classList.remove('hidden');
}

function closeSettings() {
    settingsModal.classList.add('hidden');
}

function saveSettings() {
    const selectedBank = document.querySelector('input[name="question-bank"]:checked').value;
    gameState.selectedQuestionBank = selectedBank;
    
    if (selectedBank === 'custom') {
        const questions = customQuestionsTextarea.value.split('\n').filter(q => q.trim() !== '');
        if (questions.length < 25) {
            alert('Please enter at least 25 custom questions (one per line).');
            return;
        }
        questionBanks.custom = questions;
        
        // Save custom questions to localStorage
        localStorage.setItem('customQuestions', customQuestionsTextarea.value);
    }
    
    closeSettings();
}

function startGame() {
    const player1Name = player1Input.value.trim() || "Player 1";
    const player2Name = player2Input.value.trim() || "Player 2";
    
    gameState.player1 = player1Name;
    gameState.player2 = player2Name;
    gameState.player1Score = 0;
    gameState.player2Score = 0;
    gameState.player1Sets = 0;
    gameState.player2Sets = 0;
    gameState.remainingCards = 25;
    gameState.completedLines = [];

    // Randomly choose starting player
    gameState.currentPlayer = Math.random() < 0.5 ? player1Name : player2Name;
    
    // Update displays
    player1NameDisplay.textContent = player1Name;
    player2NameDisplay.textContent = player2Name;
    player1ScoreDisplay.textContent = "0";
    player2ScoreDisplay.textContent = "0";
    currentPlayerDisplay.textContent = gameState.currentPlayer;

    // Select random questions for the game
    const questionsSource = questionBanks[gameState.selectedQuestionBank];
    gameState.gameQuestions = [...questionsSource];
    
    // Shuffle questions
    for (let i = gameState.gameQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameState.gameQuestions[i], gameState.gameQuestions[j]] = [gameState.gameQuestions[j], gameState.gameQuestions[i]];
    }
    
    // Take the first 25 questions
    gameState.gameQuestions = gameState.gameQuestions.slice(0, 25);
    
    // Create game board
    createGameBoard();
    
    // Switch screens
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
}

function createGameBoard() {
    gameBoard.innerHTML = '';
    
    for (let i = 0; i < 25; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = i;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">${i + 1}</div>
                <div class="card-back">${gameState.gameQuestions[i]}</div>
            </div>
        `;
        
        card.addEventListener('click', handleCardClick);
        gameBoard.appendChild(card);
    }
}

function handleCardClick(e) {
    const card = e.currentTarget;
    
    // Prevent clicking if card is already flipped or not current player's turn
    if (card.classList.contains('flipped') || card.classList.contains('player1') || card.classList.contains('player2')) {
        return;
    }
    
    const index = card.dataset.index;
    
    // Show question
    questionText.textContent = gameState.gameQuestions[index];
    questionModal.classList.remove('hidden');
    
    // Store currently selected card in gameState
    gameState.currentCardIndex = index;
    gameState.currentCard = card;
    
    // Flip the card
    card.classList.add('flipped');
}

function handleCorrectAnswer() {
    const card = gameState.currentCard;
    
    // Mark card for current player
    if (gameState.currentPlayer === gameState.player1) {
        card.classList.add('player1');
        gameState.player1Score++;
        player1ScoreDisplay.textContent = gameState.player1Score;
    } else {
        card.classList.add('player2');
        gameState.player2Score++;
        player2ScoreDisplay.textContent = gameState.player2Score;
    }
    
    questionModal.classList.add('hidden');
    
    // Check for completed sets
    checkForCompletedSets();
    
    // Check if game is over
    gameState.remainingCards--;
    if (gameState.remainingCards === 0) {
        endGame();
    } else {
        switchPlayer();
    }
}

function handleIncorrectAnswer() {
    questionModal.classList.add('hidden');
    
    // Flip the card back
    gameState.currentCard.classList.remove('flipped');
    
    switchPlayer();
}

function switchPlayer() {
    gameState.currentPlayer = gameState.currentPlayer === gameState.player1 ? gameState.player2 : gameState.player1;
    currentPlayerDisplay.textContent = gameState.currentPlayer;
}

function endGameEarly() {
    if (confirm("Are you sure you want to end the game now?")) {
        endGame();
    }
}

function endGame() {
    const winnerDisplay = document.getElementById('winner-display');
    const finalScore = document.getElementById('final-score');
    
    let winnerText;
    if (gameState.player1Sets > gameState.player2Sets) {
        winnerText = `${gameState.player1} wins!`;
        launchConfetti();
    } else if (gameState.player2Sets > gameState.player1Sets) {
        winnerText = `${gameState.player2} wins!`;
        launchConfetti();
    } else {
        winnerText = "It's a tie!";
    }
    
    winnerDisplay.textContent = winnerText;
    finalScore.textContent = `${gameState.player1}: ${gameState.player1Sets} sets | ${gameState.player2}: ${gameState.player2Sets} sets`;
    
    gameOverModal.classList.remove('hidden');
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function goBackToStart() {
    gameScreen.classList.add('hidden');
    gameOverModal.classList.add('hidden');
    startScreen.classList.remove('hidden');
    
    // Reset input fields
    player1Input.value = '';
    player2Input.value = '';
}

function checkForCompletedSets() {
    // Get all cards claimed by each player
    const player1Cards = Array.from(document.querySelectorAll('.card.player1')).map(card => parseInt(card.dataset.index));
    const player2Cards = Array.from(document.querySelectorAll('.card.player2')).map(card => parseInt(card.dataset.index));
    
    // All possible winning combinations (3 in a row)
    const winningCombinations = [
        // Rows
        [0, 1, 2], [1, 2, 3], [2, 3, 4],
        [5, 6, 7], [6, 7, 8], [7, 8, 9],
        [10, 11, 12], [11, 12, 13], [12, 13, 14],
        [15, 16, 17], [16, 17, 18], [17, 18, 19],
        [20, 21, 22], [21, 22, 23], [22, 23, 24],
        
        // Columns
        [0, 5, 10], [5, 10, 15], [10, 15, 20],
        [1, 6, 11], [6, 11, 16], [11, 16, 21],
        [2, 7, 12], [7, 12, 17], [12, 17, 22],
        [3, 8, 13], [8, 13, 18], [13, 18, 23],
        [4, 9, 14], [9, 14, 19], [14, 19, 24],
        
        // Diagonals
        [0, 6, 12], [1, 7, 13], [2, 8, 14],
        [5, 11, 17], [6, 12, 18], [7, 13, 19],
        [10, 16, 22], [11, 17, 23], [12, 18, 24],
        [2, 6, 10], [3, 7, 11], [4, 8, 12],
        [7, 11, 15], [8, 12, 16], [9, 13, 17],
        [12, 16, 20], [13, 17, 21], [14, 18, 22]
    ];
    
    // Check for new completed sets
    for (let combo of winningCombinations) {
        // Check if this combo is already counted
        if (gameState.completedLines.some(line => JSON.stringify(line.combo) === JSON.stringify(combo))) {
            continue;
        }
        
        // Check if player 1 has completed this set
        if (combo.every(index => player1Cards.includes(index))) {
            gameState.player1Sets++;
            gameState.completedLines.push({
                player: 'player1',
                combo: combo
            });
            drawLine(combo, 'player1');
        }
        
        // Check if player 2 has completed this set
        if (combo.every(index => player2Cards.includes(index))) {
            gameState.player2Sets++;
            gameState.completedLines.push({
                player: 'player2',
                combo: combo
            });
            drawLine(combo, 'player2');
        }
    }
    
    // Update scores
    player1ScoreDisplay.textContent = gameState.player1Sets;
    player2ScoreDisplay.textContent = gameState.player2Sets;
}

function drawLine(combo, playerClass) {
    // Find the positions of the first and last card in the combo
    const first = document.querySelector(`.card[data-index="${combo[0]}"]`);
    const middle = document.querySelector(`.card[data-index="${combo[1]}"]`);
    const last = document.querySelector(`.card[data-index="${combo[2]}"]`);
    
    if (!first || !middle || !last) return;
    
    const firstRect = first.getBoundingClientRect();
    const middleRect = middle.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    
    // Create a line element
    const line = document.createElement('div');
    line.className = `bingo-line ${playerClass}`;
    
    // Determine if the line is horizontal, vertical, or diagonal
    const boardRect = gameBoard.getBoundingClientRect();
    const firstCenterX = firstRect.left + firstRect.width / 2 - boardRect.left;
    const firstCenterY = firstRect.top + firstRect.height / 2 - boardRect.top;
    const lastCenterX = lastRect.left + lastRect.width / 2 - boardRect.left;
    const lastCenterY = lastRect.top + lastRect.height / 2 - boardRect.top;
    
    // Calculate length and angle
    const dX = lastCenterX - firstCenterX;
    const dY = lastCenterY - firstCenterY;
    const length = Math.sqrt(dX * dX + dY * dY);
    const angle = Math.atan2(dY, dX) * 180 / Math.PI;
    
    // Position the line
    line.style.width = `${length}px`;
    line.style.left = `${firstCenterX}px`;
    line.style.top = `${firstCenterY}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.transformOrigin = 'left center';
    
    // Add line to board
    gameBoard.appendChild(line);
}

// Initialize the game
document.addEventListener('DOMContentLoaded', init);