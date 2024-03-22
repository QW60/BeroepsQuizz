var questions = [
    {
        type: "closed",
        question: "What is the primary ingredient in pizza dough?",
        options: ["Flour", "Sugar", "Eggs", "Salt"],
        name: "q1",
        answer: "Flour"
    },
        {
        type: "closed",
        question: "Which country is often credited with inventing pizza?",
        options: ["Spain", "France", "Greece", "Italy"],
        name: "q2",
        answer: "Italy" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What type of cheese is commonly used on a traditional Margherita pizza?",
        options: ["Feta", "Cheddar", "Gouda", "Mozzarella"],
        name: "q3",
        answer: "Mozzarella" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What is the term for the oven used to cook pizza at high temperatures?",
        options: ["Brick oven", "Microwave", "Toaster oven", "Conventional oven"],
        name: "q4",
        answer: "Brick oven" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is a traditional pizza topping?",
        options: ["Pepperoni", "Marshmallow", "Pineapple", "Chocolate"],
        name: "q5",
        answer: "Pepperoni" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What is the Italian word for pizza?",
        options: ["Pesto", "Pizza", "Pizzeria", "Pasta"],
        name: "q6",
        answer: "Pizza" // Add the correct answer here
    },
        {
        type: "closed",
        question: "What is the circular shape of a pizza commonly referred to as?",
        options: ["Crust", "Slice", "Pie", "Dough"],
        name: "q7",
        answer: "Pie" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which type of pizza is typically associated with Chicago?",
        options: ["Deep-dish", "Thin crust", "Stuffed crust", "Neapolitan"],
        name: "q8",
        answer: "Deep-dish" // Add the correct answer here
    },
    {
        type: "closed",
        question: "What is the name of the flat pan used to bake pizza in a conventional oven?",
        options: ["Pizza stone", "Baking sheet", "Pizza peel", "Pizza cutter"],
        name: "q9",
        answer: "Pizza stone" // Add the correct answer here
    },
    {
        type: "closed",
        question: "Which pizza chain uses the slogan: Better Ingredients, Better Pizza!?",
        options: ["Little Caesars", "Pizza Hut", "Domino's", "Papa John's"],
        name: "q10",
        answer: "Papa John's" // Add the correct answer here
    },
    {
        type: "open",
        question: "What type of topping is typically used on a Hawaiian pizza?",
        name: "q11",
        answer: "Pineapple" // Add the expected answer here
    },
        {
        type: "open",
        question: "What is the traditional topping on a Quattro Stagioni pizza?",
        name: "q12",
        answer: "Artichokes" // Add the expected answer here
    },
    {
        type: "open",
        question: "What is the Italian word for pizza?",
        name: "q13",
        answer: "Pizza" // Add the expected answer here
    },
    {
        type: "open",
        question: "What is the primary ingredient in a pizza base that makes it rise?",
        name: "q14",
        answer: "Yeast" // Add the expected answer here
    },
    {
        type: "open",
        question: "What is the main ingredient in a classic Margherita pizza?",
        name: "q15",
        answer: "Tomato" // Add the expected answer here
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