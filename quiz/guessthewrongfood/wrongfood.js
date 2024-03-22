var questions = [
    {
        type: "closed",
        question: "Which of the following is not a type of pasta?",
        options: ["Spaghetti", "Macaroni", "Croissant", "Linguine"],
        name: "q1",
        answer: "Croissant"
    },
        {
        type: "closed",
        question: "Which of the following is not a type of cheese?",
        options: ["Cheddar", "Mozzarella", "Parmesan", "Pepperoni"],
        name: "q2",
        answer: "Pepperoni" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is not a type of fruit?",
        options: ["Apple", "Banana", "Cauliflower", "Orange"],
        name: "q3",
        answer: "Cauliflower" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is not a type of sandwich?",
        options: ["Club sandwich", "Panini", "Sushi", "Reuben"],
        name: "q4",
        answer: "Sushi" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is not a type of soup?",
        options: ["Minestrone", "Gazpacho", "Lasagna", "Tomato"],
        name: "q5",
        answer: "Lasagna" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is not a type of cake?",
        options: ["Red Velvet", "Carrot", "Brownie", "Angel Food"],
        name: "q6",
        answer: "Brownie" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is not a type of tea?",
        options: ["Chamomile", "Earl Grey", "Oolong", "Cappuccino"],
        name: "q7",
        answer: "Cappuccino" // Add the correct answer here
    },
        {
        type: "closed",
        question: "Which of the following is not a type of potato dish?",
        options: ["French Fries", "Hash Browns", "Mashed Potatoes", "Tiramisu"],
        name: "q8",
        answer: "Tiramisu" // Add the correct answer here
    },
    {
        type: "closed",
        question: "Which of the following is not a type of sushi?",
        options: ["Nigiri", "Sashimi", "California Roll", "Tempura"],
        name: "q9",
        answer: "Tempura" // Add the correct answer here
    },
    {
        type: "closed",
        question: "Which of the following is not a type of salad?",
        options: ["Caesar Salad", "Caprese Salad", "Pancake Salad", "Greek Salad"],
        name: "q10",
        answer: "Pancake Salad" // Add the correct answer here
    },
    {
        type: "open",
        question: "What popular Mexican dish consists of a flour tortilla wrapped around various fillings such as beans, rice, meat, and vegetables?",
        name: "q11",
        answer: "Burrito" // Add the expected answer here
    },
        {
        type: "open",
        question: "What creamy spread, made from ground peanuts, is commonly used in sandwiches, baking, and as a topping for fruits?",
        name: "q12",
        answer: "Peanut Butter" // Add the expected answer here
    },
    {
        type: "open",
        question: "Which cut of beef, known for its tenderness and flavor, comes from the upper portion of the cow, typically used in steaks and roasts?",
        name: "q13",
        answer: "Sirloin" // Add the expected answer here
    },
    {
        type: "open",
        question: "What dish, popular in many European and Asian cuisines, involves stuffing cabbage leaves with a filling, often a mixture of ground meat, rice, and spices?",
        name: "q14",
        answer: "Cabbage Roll" // Add the expected answer here
    },
    {
        type: "open",
        question: "What side dish, commonly served at picnics and barbecues, consists of boiled potatoes mixed with mayonnaise, mustard, and various other ingredients such as onions, celery, and pickles?",
        name: "q15",
        answer: "Potato Salad" // Add the expected answer here
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