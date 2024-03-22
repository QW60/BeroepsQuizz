var questions = [
    {
        type: "closed",
        question: "What country is pizza from?",
        options: ["France", "USA", "Turkey", "Italy"],
        name: "q1",
        answer: "Italy"
    },
        {
        type: "closed",
        question: "What country invented the croissant?",
        options: ["Turkey", "France", "Spain", "Switzerland"],
        name: "q2",
        answer: "Turkey" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What food is the netherlands known for?",
        options: ["Chicken", "Rice", "Cheese", "Apples"],
        name: "q3",
        answer: "Cheese" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What food do americans like most?",
        options: ["Salad", "Hamburger", "Sushi", "Mac and Cheese"],
        name: "q4",
        answer: "Hamburger" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What is the national dish of China?",
        options: ["Peking duck", "Bami Bangwang", "Riceballs", "Bat soup"],
        name: "q5",
        answer: "Peking duck" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What is the national dish of India?",
        options: ["Biryani", "Naan", "Curry Rice", "Khichdi"],
        name: "q6",
        answer: "Khichdi" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What food is the UK known for?",
        options: ["Kabab", "Fish and Chips", "Hamburgers", "Pizza Hawaii"],
        name: "q7",
        answer: "Fish and Chips" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which food is not from The Netherlands?",
        options: ["Andijvie", "Broodje Hagelslag", "Haring", "Doner Kebab"],
        name: "q8",
        answer: "Doner Kebab" // Add the correct answer here
    },
    {
        type: "closed",
        question: "What food is not from the ocean?",
        options: ["Fish", "Seaweat", "Squid", "Chicken Nuggets"],
        name: "q9",
        answer: "Chicken Nuggets" // Add the correct answer here
    },
    {
        type: "closed",
        question: "What food is from South Africa?",
        options: ["Fufu", "Tostadas", "Bobotie", "Nasi Goreng"],
        name: "q10",
        answer: "Bobotie" // Add the correct answer here
    },
    {
        type: "open",
        question: "What is the name of the italian dish with pasta and tomato sauce?",
        name: "q11",
        answer: "spaghetti" // Add the expected answer here
    },
        {
        type: "open",
        question: "Which turkish dish is most popular in germany?",
        name: "q12",
        answer: "doner kebab" // Add the expected answer here
    },
    {
        type: "open",
        question: "What does the Teyl Inn serve?",
        name: "q13",
        answer: "sushi" // Add the expected answer here
    },
    {
        type: "open",
        question: "What is the most worldwide fastfood chain?",
        name: "q14",
        answer: "mcdonalds" // Add the expected answer here
    },
    {
        type: "open",
        question: "Which continent do bananas come from?",
        name: "q14",
        answer: "asia" // Add the expected answer here
    },
];

// Get the quiz container
var quizContainer = document.querySelector(".quizdivtje");

// Current question index
var currentQuestionIndex = 0;

// Function to show a question
function showQuestion(index) {
    // Clear the quiz container
    quizContainer.innerHTML = '';

    // Get the question
    var question = questions[index];

    var questionDiv = document.createElement("div");
    questionDiv.className = question.type === "closed" ? "quiz1" : "quiz2";

    var questionTitle = document.createElement("h2");
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    var form = document.createElement("form");

    if (question.type === "closed") {
        question.options.forEach(function(option) {
            var label = document.createElement("label");
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.name = question.name;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            form.appendChild(label);
            form.appendChild(document.createElement("br"));
        });
    } else {
        var textarea = document.createElement("textarea");
        textarea.name = question.name;
        textarea.rows = 4;
        textarea.cols = 50;
        form.appendChild(textarea);
    }

    questionDiv.appendChild(form);
    quizContainer.appendChild(questionDiv);

    // Add a check button for open questions
    if (question.type === "open") {
        var checkButton = document.createElement("button");
        checkButton.textContent = "Check";
        checkButton.addEventListener("click", function() {
            // Get the user's answer
            var userAnswer = form.querySelector(`textarea[name="${question.name}"]`).value;

            // Check the answer
            var resultText = document.createElement("p");
            if (userAnswer === question.answer) {
                resultText.textContent = "Correct!";
                resultText.style.color = "green";
            } else {
                resultText.textContent = "Incorrect. The correct answer was: " + question.answer;
                resultText.style.color = "red";
            }
            quizContainer.appendChild(resultText);
        });
        quizContainer.appendChild(checkButton);
    }

    // Add a next button
    if (index < questions.length - 1) {
        var nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", function() {
            // For closed questions, get the user's answer and check it
            if (question.type === "closed") {
                var userAnswer = form.querySelector(`input[name="${question.name}"]:checked`).value;
                var resultText = document.createElement("p");
                if (userAnswer === question.answer) {
                    resultText.textContent = "Correct!";
                    resultText.style.color = "green";
                } else {
                    resultText.textContent = "Incorrect. The correct answer was: " + question.answer;
                    resultText.style.color = "red";
                }
                quizContainer.appendChild(resultText);
            }

            // Show the next question after a delay
            setTimeout(function() {
                showQuestion(index + 1);
            }, 2000);
        });
        quizContainer.appendChild(nextButton);
    }
}

// Show the first question
showQuestion(currentQuestionIndex);